"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/cart/CartContext";
import { LanguageSwitch } from "@/components/LanguageSwitch";

function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8h12l-1.2 11.2a1.5 1.5 0 0 1-1.5 1.3H8.7a1.5 1.5 0 0 1-1.5-1.3L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function Header() {
  const { t } = useLanguage();
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="md:hidden text-cream cursor-pointer"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-heading text-2xl tracking-[0.15em] text-gold">NOVARO</span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted mt-0.5">
                {t("nav.tagline")}
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="text-cream/90 hover:text-gold transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/products" className="text-cream/90 hover:text-gold transition-colors">
              {t("nav.shop")}
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSwitch />
            <Link
              href="/cart"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-cream hover:border-gold hover:text-gold transition-colors"
              aria-label={t("nav.cart")}
            >
              <CartIcon className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-1 pb-4 text-sm border-t border-border-soft pt-3">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded px-2 py-2 text-cream/90 hover:bg-surface hover:text-gold transition-colors"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded px-2 py-2 text-cream/90 hover:bg-surface hover:text-gold transition-colors"
            >
              {t("nav.shop")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
