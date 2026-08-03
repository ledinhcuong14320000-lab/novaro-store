import { NextRequest, NextResponse } from "next/server";

// ABA PayWay POSTs the transaction result here after the customer pays.
// Once real credentials are set, verify the payload's hash against
// ABA_PAYWAY_API_KEY before trusting `tran_id` / `status` and updating the order.
export async function POST(request: NextRequest) {
  await request.formData().catch(() => null);
  return NextResponse.json({ received: true });
}
