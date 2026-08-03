import { NextRequest, NextResponse } from "next/server";
import { buildPaywayPayload, getPaywayApiUrl, isPaywayConfigured } from "@/lib/payway";

type AbaCheckoutRequest = {
  orderNumber: string;
  amount: number;
  fullName: string;
  phone: string;
  email?: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Partial<AbaCheckoutRequest>;
  const { orderNumber, amount, fullName, phone, email } = body;

  if (!orderNumber || !amount || !fullName || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isPaywayConfigured()) {
    // No ABA_PAYWAY_MERCHANT_ID / ABA_PAYWAY_API_KEY set yet — return a fake
    // payload so the checkout UI can be previewed before real credentials exist.
    return NextResponse.json({
      mock: true,
      tranId: orderNumber,
      amount: amount.toFixed(2),
      merchantId: "DEMO-MERCHANT",
    });
  }

  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin;

  const fields = buildPaywayPayload({
    tranId: orderNumber,
    amount,
    firstName: firstName || fullName,
    lastName: rest.join(" ") || "-",
    email: email || "no-reply@novaro.shop",
    phone,
    returnUrl: `${siteUrl}/api/checkout/aba/callback`,
    continueSuccessUrl: `${siteUrl}/checkout?order=${orderNumber}`,
  });

  return NextResponse.json({ mock: false, apiUrl: getPaywayApiUrl(), fields });
}
