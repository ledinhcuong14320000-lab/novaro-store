"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/cart/CartContext";
import { formatUSD } from "@/lib/format";
import { ProductArt } from "@/components/ProductArt";
import { AbaPaywayPanel } from "@/components/checkout/AbaPaywayPanel";
import type { CategoryId } from "@/lib/products";

const PROVINCES: { en: string; km: string }[] = [
  { en: "Phnom Penh", km: "ភ្នំពេញ" },
  { en: "Siem Reap", km: "សៀមរាប" },
  { en: "Battambang", km: "បាត់ដំបង" },
  { en: "Sihanoukville", km: "ព្រះសីហនុ" },
  { en: "Kampong Cham", km: "កំពង់ចាម" },
  { en: "Kandal", km: "កណ្តាល" },
  { en: "Kampong Speu", km: "កំពង់ស្ពឺ" },
  { en: "Takeo", km: "តាកែវ" },
  { en: "Kampot", km: "កំពត" },
  { en: "Other", km: "ផ្សេងទៀត" },
];

const PAYMENT_METHODS = [
  { id: "cod", labelKey: "checkout.payment.cod" },
  { id: "aba", labelKey: "checkout.payment.aba" },
  { id: "wing", labelKey: "checkout.payment.wing" },
] as const;

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  province: string;
  notes: string;
  payment: (typeof PAYMENT_METHODS)[number]["id"];
};

const PHONE_REGEX = /^(?:\+855|0)[1-9][0-9]{6,8}$/;

function generateOrderNumber() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `NV-${code}`;
}

export default function CheckoutPage() {
  const { lang, t } = useLanguage();
  const { items, subtotal, clearCart } = useCart();

  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    province: PROVINCES[0].en,
    notes: "",
    payment: "cod",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [pendingAbaOrder, setPendingAbaOrder] = useState<string | null>(null);

  const shipping = subtotal >= 50 ? 0 : 3;
  const total = subtotal + shipping;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = t("checkout.required");
    if (!form.phone.trim()) next.phone = t("checkout.required");
    else if (!PHONE_REGEX.test(form.phone.trim())) next.phone = t("checkout.phoneInvalid");
    if (!form.address.trim()) next.address = t("checkout.required");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const number = generateOrderNumber();
    if (form.payment === "aba") {
      setPendingAbaOrder(number);
      return;
    }
    setOrderNumber(number);
    clearCart();
  };

  if (orderNumber) {
    return (
      <div className="mx-auto max-w-xl px-4 sm:px-6 py-24 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12l4.5 4.5L19 7" />
          </svg>
        </div>
        <h1 className="font-heading text-3xl text-cream">{t("checkout.success.title")}</h1>
        <p className="text-sm text-muted mt-3 leading-relaxed">{t("checkout.success.body")}</p>
        <p className="mt-6 inline-block rounded-md border border-border bg-surface px-5 py-2.5 text-sm text-gold-light">
          {t("checkout.success.orderNumber")}: <span className="font-semibold text-gold">{orderNumber}</span>
        </p>
        <div>
          <Link
            href="/"
            className="inline-block mt-8 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
          >
            {t("checkout.success.backHome")}
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 sm:px-6 py-24 text-center">
        <p className="text-sm text-muted">{t("checkout.emptyRedirect")}</p>
        <Link
          href="/products"
          className="inline-block mt-6 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
        >
          {t("cart.empty.cta")}
        </Link>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-border bg-ink px-4 py-2.5 text-sm text-cream placeholder:text-muted focus:outline-none focus:border-gold";

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="font-heading text-4xl text-cream mb-10">{t("checkout.title")}</h1>

      {pendingAbaOrder && (
        <AbaPaywayPanel
          orderNumber={pendingAbaOrder}
          amount={total}
          fullName={form.fullName}
          phone={form.phone}
          email={form.email || undefined}
          onSuccess={() => {
            setOrderNumber(pendingAbaOrder);
            clearCart();
            setPendingAbaOrder(null);
          }}
          onCancel={() => setPendingAbaOrder(null)}
        />
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-heading text-xl text-cream mb-4">{t("checkout.contact")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs text-muted mb-1.5 block">{t("checkout.fullName")}</label>
                <input
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className={inputClass}
                  placeholder="Sok Dara"
                />
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="text-xs text-muted mb-1.5 block">{t("checkout.phone")}</label>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                  placeholder="012 345 678"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-xs text-muted mb-1.5 block">{t("checkout.email")}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl text-cream mb-4">{t("checkout.shippingAddress")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs text-muted mb-1.5 block">{t("checkout.address")}</label>
                <input
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  className={inputClass}
                  placeholder="St. 240, House 12"
                />
                {errors.address && <p className="text-xs text-red-400 mt-1">{errors.address}</p>}
              </div>
              <div>
                <label className="text-xs text-muted mb-1.5 block">{t("checkout.province")}</label>
                <select
                  value={form.province}
                  onChange={(e) => update("province", e.target.value)}
                  className={`${inputClass} cursor-pointer`}
                >
                  {PROVINCES.map((p) => (
                    <option key={p.en} value={p.en}>
                      {lang === "km" ? p.km : p.en}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-muted mb-1.5 block">{t("checkout.notes")}</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className={`${inputClass} min-h-20 resize-none`}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl text-cream mb-4">{t("checkout.payment")}</h2>
            <div className="space-y-2">
              {PAYMENT_METHODS.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 text-sm cursor-pointer transition-colors ${
                    form.payment === method.id
                      ? "border-gold bg-surface text-cream"
                      : "border-border text-muted hover:border-gold-dark"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={form.payment === method.id}
                    onChange={() => update("payment", method.id)}
                    className="accent-[#c9a455]"
                  />
                  {t(method.labelKey)}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-xl border border-border bg-surface p-6 sticky top-24">
            <h2 className="font-heading text-xl text-cream mb-5">{t("cart.summary")}</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.key} className="flex gap-3">
                  <div className="relative h-14 w-12 flex-shrink-0 overflow-hidden rounded border border-border bg-ink">
                    {item.image ? (
                      <Image src={item.image} alt={item.name[lang]} fill sizes="60px" className="object-cover" />
                    ) : (
                      <ProductArt seed={item.productId} category={item.category as CategoryId} className="h-full w-full" />
                    )}
                  </div>
                  <div className="flex-1 text-xs">
                    <p className="text-cream">{item.name[lang]}</p>
                    <p className="text-muted">
                      {item.size} · {item.color} · x{item.qty}
                    </p>
                  </div>
                  <span className="text-xs text-gold-light">{formatUSD(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-sm mt-5 pt-5 border-t border-border-soft">
              <div className="flex justify-between text-muted">
                <span>{t("cart.subtotal")}</span>
                <span className="text-cream">{formatUSD(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>{t("cart.shipping")}</span>
                <span className="text-cream">{shipping === 0 ? t("cart.shippingFree") : formatUSD(shipping)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border-soft text-base">
                <span className="text-cream font-medium">{t("cart.total")}</span>
                <span className="text-gold font-semibold">{formatUSD(total)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors cursor-pointer"
            >
              {t("checkout.placeOrder")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
