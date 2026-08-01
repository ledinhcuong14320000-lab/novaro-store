"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductArt } from "@/components/ProductArt";

const VALUE_PROPS = [
  { icon: "shipping", titleKey: "home.values.shipping.title", bodyKey: "home.values.shipping.body" },
  { icon: "cod", titleKey: "home.values.cod.title", bodyKey: "home.values.cod.body" },
  { icon: "quality", titleKey: "home.values.quality.title", bodyKey: "home.values.quality.body" },
  { icon: "returns", titleKey: "home.values.returns.title", bodyKey: "home.values.returns.body" },
];

function ValueIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  switch (name) {
    case "shipping":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
          <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17.5" cy="18" r="1.6" />
        </svg>
      );
    case "cod":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
          <rect x="3" y="6" width="18" height="12" rx="1.5" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "quality":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
          <path d="M12 3l2.5 5.2 5.7.8-4.1 4 1 5.7L12 16l-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
          <path d="M4 12a8 8 0 1 1 3 6.2M4 12v5M4 12H9" />
        </svg>
      );
  }
}

export default function Home() {
  const { t } = useLanguage();
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,164,85,0.14),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(201,164,85,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="animate-fade-in text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-light">
            {t("home.hero.eyebrow")}
          </p>
          <h1 className="animate-fade-in font-heading mt-4 max-w-2xl text-balance whitespace-pre-line text-4xl sm:text-6xl leading-[1.08] text-cream">
            {t("home.hero.title")}
          </h1>
          <p className="animate-fade-in mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-muted">
            {t("home.hero.subtitle")}
          </p>
          <div className="animate-fade-in mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
            >
              {t("home.hero.cta")}
            </Link>
            <Link
              href="/products"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-cream hover:border-gold hover:text-gold transition-colors"
            >
              {t("home.hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading text-3xl text-cream">{t("home.categories.title")}</h2>
            <p className="text-sm text-muted mt-1">{t("home.categories.subtitle")}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/products?category=${c.id}`}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-surface"
            >
              <ProductArt seed={c.id} category={c.id} className="h-full w-full transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent">
                <span className="text-sm font-medium text-cream group-hover:text-gold-light transition-colors">
                  {t(c.labelKey)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 border-t border-border-soft">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading text-3xl text-cream">{t("home.featured.title")}</h2>
            <p className="text-sm text-muted mt-1">{t("home.featured.subtitle")}</p>
          </div>
          <Link href="/products" className="hidden sm:block text-sm text-gold hover:text-gold-light transition-colors whitespace-nowrap">
            {t("home.featured.viewAll")} →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Link href="/products" className="sm:hidden mt-8 block text-center text-sm text-gold hover:text-gold-light transition-colors">
          {t("home.featured.viewAll")} →
        </Link>
      </section>

      {/* Value props */}
      <section className="border-y border-border-soft bg-ink-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((v) => (
            <div key={v.titleKey} className="flex flex-col items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-dark text-gold">
                <ValueIcon name={v.icon} />
              </div>
              <h3 className="font-heading text-lg text-cream">{t(v.titleKey)}</h3>
              <p className="text-sm text-muted leading-relaxed">{t(v.bodyKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl border border-gold-dark bg-surface px-6 sm:px-14 py-12 sm:py-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,164,85,0.16),transparent_55%)]" />
          <div className="relative">
            <h2 className="font-heading text-3xl text-cream">{t("home.banner.title")}</h2>
            <p className="mt-3 text-sm text-muted max-w-md mx-auto">{t("home.banner.body")}</p>
            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder={t("home.banner.placeholder")}
                className="flex-1 rounded-md border border-border bg-ink px-4 py-2.5 text-sm text-cream placeholder:text-muted focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light transition-colors whitespace-nowrap"
              >
                {t("home.banner.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
