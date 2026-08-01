"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/cart/CartContext";
import { formatUSD } from "@/lib/format";
import { ProductArt } from "@/components/ProductArt";
import { QuantityStepper } from "@/components/QuantityStepper";
import type { CategoryId } from "@/lib/products";

const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_FLAT = 3;

export default function CartPage() {
  const { lang, t } = useLanguage();
  const { items, updateQty, removeItem, subtotal, count } = useCart();

  const shipping = items.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border text-gold">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 8h12l-1.2 11.2a1.5 1.5 0 0 1-1.5 1.3H8.7a1.5 1.5 0 0 1-1.5-1.3L6 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>
        </div>
        <h1 className="font-heading text-3xl text-cream">{t("cart.empty.title")}</h1>
        <p className="text-sm text-muted mt-2">{t("cart.empty.body")}</p>
        <Link
          href="/products"
          className="inline-block mt-8 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
        >
          {t("cart.empty.cta")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="font-heading text-4xl text-cream mb-2">{t("cart.title")}</h1>
      <p className="text-sm text-muted mb-10">
        {count} {count === 1 ? t("cart.item") : t("cart.items")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 divide-y divide-border-soft border-y border-border-soft">
          {items.map((item) => (
            <div key={item.key} className="py-6 flex gap-4 sm:gap-6">
              <div className="relative h-24 w-20 sm:h-28 sm:w-24 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-surface">
                {item.image ? (
                  <Image src={item.image} alt={item.name[lang]} fill sizes="100px" className="object-cover" />
                ) : (
                  <ProductArt seed={item.productId} category={item.category as CategoryId} className="h-full w-full" />
                )}
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex-1">
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-heading text-lg text-cream hover:text-gold-light transition-colors"
                  >
                    {item.name[lang]}
                  </Link>
                  <p className="text-xs text-muted mt-1">
                    {t("product.size")}: {item.size} · {t("product.color")}: {item.color}
                  </p>
                  <p className="text-sm text-gold mt-1">{formatUSD(item.price)}</p>
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3">
                  <QuantityStepper value={item.qty} onChange={(q) => updateQty(item.key, q)} />
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-cream font-medium">{formatUSD(item.price * item.qty)}</span>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs text-muted hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {t("cart.remove")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-xl border border-border bg-surface p-6 sticky top-24">
            <h2 className="font-heading text-xl text-cream mb-5">{t("cart.summary")}</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted">
                <span>{t("cart.subtotal")}</span>
                <span className="text-cream">{formatUSD(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>{t("cart.shipping")}</span>
                <span className="text-cream">{shipping === 0 ? t("cart.shippingFree") : formatUSD(shipping)}</span>
              </div>
              {remainingForFree > 0 && (
                <p className="text-xs text-gold-light">
                  {t("cart.freeShippingNotice").replace("{amount}", formatUSD(remainingForFree))}
                </p>
              )}
              <div className="flex justify-between pt-3 border-t border-border-soft text-base">
                <span className="text-cream font-medium">{t("cart.total")}</span>
                <span className="text-gold font-semibold">{formatUSD(total)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block text-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
            >
              {t("cart.checkout")}
            </Link>
            <Link
              href="/products"
              className="mt-3 block text-center text-sm text-muted hover:text-gold transition-colors"
            >
              {t("cart.continueShopping")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
