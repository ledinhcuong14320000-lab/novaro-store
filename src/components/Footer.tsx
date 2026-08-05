"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories } from "@/lib/products";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border-soft bg-ink-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <span className="font-heading text-2xl tracking-[0.15em] text-gold">NOVARO</span>
            <p className="mt-3 text-sm leading-relaxed text-muted max-w-sm">{t("footer.about")}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-gold-light mb-4">{t("footer.shop")}</h4>
            <ul className="space-y-2 text-sm text-muted">
              {categories.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <Link href={`/products?category=${c.id}`} className="hover:text-gold transition-colors">
                    {t(c.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-gold-light mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>{t("footer.address")}</li>
              <li>
                <a href="tel:+85570461350" className="hover:text-gold-light transition-colors">
                  +855 70 461 350
                </a>
              </li>
              <li>hello@novaro.shop</li>
            </ul>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-gold-light mb-2">{t("footer.payments")}</p>
              <div className="flex flex-wrap gap-2 text-[11px] text-muted">
                <span className="rounded border border-border px-2 py-1">ABA PAY</span>
                <span className="rounded border border-border px-2 py-1">Wing</span>
                <span className="rounded border border-border px-2 py-1">COD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border-soft pt-6 text-xs text-muted">
          <p>© {year} NOVARO. {t("footer.rights")}</p>
          <p>{t("common.currencyNote")}</p>
        </div>
      </div>
    </footer>
  );
}
