"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories, products, type CategoryId } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type SortKey = "featured" | "priceLow" | "priceHigh" | "newest";

export function ProductsListing() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = (searchParams.get("category") as CategoryId | null) ?? "all";
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = products.slice();
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    switch (sort) {
      case "priceLow":
        list.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [activeCategory, sort]);

  const setCategory = (id: CategoryId | "all") => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="font-heading text-4xl text-cream">{t("products.title")}</h1>
        <p className="text-sm text-muted mt-2">{t("products.subtitle")}</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors cursor-pointer ${
              activeCategory === "all"
                ? "border-gold bg-gold text-ink font-semibold"
                : "border-border text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {t("category.all")}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors cursor-pointer ${
                activeCategory === c.id
                  ? "border-gold bg-gold text-ink font-semibold"
                  : "border-border text-muted hover:border-gold hover:text-gold"
              }`}
            >
              {t(c.labelKey)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="sort" className="text-muted whitespace-nowrap">
            {t("products.sort.label")}
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-cream focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">{t("products.sort.featured")}</option>
            <option value="priceLow">{t("products.sort.priceLow")}</option>
            <option value="priceHigh">{t("products.sort.priceHigh")}</option>
            <option value="newest">{t("products.sort.newest")}</option>
          </select>
        </div>
      </div>

      <p className="text-xs text-muted mb-6">
        {filtered.length} {t("products.count")}
      </p>

      {filtered.length === 0 ? (
        <p className="text-muted text-sm py-16 text-center">{t("products.empty")}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
