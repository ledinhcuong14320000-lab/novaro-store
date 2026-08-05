import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formatUSD } from "@/lib/format";

type OrderItem = {
  name: string;
  size: string;
  color: string;
  qty: number;
  price: number;
};

type OrderPayload = {
  orderNumber: string;
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  province: string;
  notes?: string;
  paymentMethod: string;
  paymentLabel: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
};

function buildEmailText(order: OrderPayload) {
  const itemLines = order.items
    .map((item) => `  - ${item.name} (${item.size}, ${item.color}) x${item.qty} — ${formatUSD(item.price * item.qty)}`)
    .join("\n");

  return `Đơn hàng mới: ${order.orderNumber}

Khách hàng: ${order.fullName}
Điện thoại: ${order.phone}
Email: ${order.email || "—"}
Địa chỉ: ${order.address}, ${order.province}
Ghi chú: ${order.notes || "—"}

Phương thức thanh toán: ${order.paymentLabel}

Sản phẩm:
${itemLines}

Tạm tính: ${formatUSD(order.subtotal)}
Phí vận chuyển: ${order.shipping === 0 ? "Miễn phí" : formatUSD(order.shipping)}
Tổng cộng: ${formatUSD(order.total)}
`;
}

async function sendOrderEmail(order: OrderPayload) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.ORDER_NOTIFICATION_EMAIL || user;
  if (!user || !pass || !to) throw new Error("Gmail credentials are not configured");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"NOVARO Store" <${user}>`,
    to,
    subject: `Đơn hàng mới #${order.orderNumber} - NOVARO`,
    text: buildEmailText(order),
  });
}

async function forwardToSheet(order: OrderPayload) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) throw new Error("SHEETS_WEBHOOK_URL is not configured");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error(`Sheets webhook responded with ${res.status}`);
}

export async function POST(req: NextRequest) {
  const order = (await req.json()) as OrderPayload;

  const [emailResult, sheetResult] = await Promise.allSettled([sendOrderEmail(order), forwardToSheet(order)]);

  if (emailResult.status === "rejected") console.error("Order email failed:", emailResult.reason);
  if (sheetResult.status === "rejected") console.error("Order sheet sync failed:", sheetResult.reason);

  return NextResponse.json({
    email: emailResult.status === "fulfilled",
    sheet: sheetResult.status === "fulfilled",
  });
}
