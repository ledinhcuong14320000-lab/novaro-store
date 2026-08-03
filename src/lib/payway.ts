import crypto from "crypto";

const DEFAULT_API_URL = "https://checkout-sandbox.payway.com.kh/api/payment-gateway/v1/payments/purchase";

export function isPaywayConfigured() {
  return Boolean(process.env.ABA_PAYWAY_MERCHANT_ID && process.env.ABA_PAYWAY_API_KEY);
}

export function getPaywayApiUrl() {
  return process.env.ABA_PAYWAY_API_URL ?? DEFAULT_API_URL;
}

export type PaywayOrderInput = {
  tranId: string;
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  returnUrl: string;
  continueSuccessUrl: string;
};

function formatReqTime() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}`;
}

// Order is fixed by ABA PayWay's Purchase API spec — the signature check fails
// server-side if these fields are concatenated in any other order.
const HASH_FIELD_ORDER = [
  "req_time",
  "merchant_id",
  "tran_id",
  "amount",
  "items",
  "shipping",
  "firstname",
  "lastname",
  "email",
  "phone",
  "type",
  "payment_option",
  "return_url",
  "cancel_url",
  "continue_success_url",
  "return_deeplink",
  "currency",
  "custom_fields",
  "return_params",
] as const;

export type PaywayFormFields = Record<(typeof HASH_FIELD_ORDER)[number] | "hash", string>;

export function buildPaywayPayload(order: PaywayOrderInput): PaywayFormFields {
  const merchantId = process.env.ABA_PAYWAY_MERCHANT_ID ?? "";
  const apiKey = process.env.ABA_PAYWAY_API_KEY ?? "";
  const amount = order.amount.toFixed(2);

  const items = Buffer.from(
    JSON.stringify([{ name: `NOVARO order ${order.tranId}`, quantity: "1", price: amount }])
  ).toString("base64");

  const fields: Record<(typeof HASH_FIELD_ORDER)[number], string> = {
    req_time: formatReqTime(),
    merchant_id: merchantId,
    tran_id: order.tranId,
    amount,
    items,
    shipping: "0.00",
    firstname: order.firstName,
    lastname: order.lastName,
    email: order.email,
    phone: order.phone,
    type: "purchase",
    payment_option: "",
    return_url: Buffer.from(order.returnUrl).toString("base64"),
    cancel_url: "",
    continue_success_url: order.continueSuccessUrl,
    return_deeplink: "",
    currency: "USD",
    custom_fields: "",
    return_params: order.tranId,
  };

  const rawString = HASH_FIELD_ORDER.map((key) => fields[key]).join("");
  const hash = crypto.createHmac("sha512", apiKey).update(rawString).digest("base64");

  return { ...fields, hash };
}
