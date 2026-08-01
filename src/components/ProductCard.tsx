"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { formatUSD } from "@/lib/format";
import { ProductArt } from "@/components/ProductArt";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { lang, t } = useLanguage();
  const cover = product.images?.[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface">
        {cover ? (
          <Image
            src={cover}
            alt={product.name[lang]}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProductArt
            seed={product.id}
            category={product.category}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink">
              {t("products.new")}
            </span>
          )}
          {product.compareAtPrice && (
            <span className="rounded-full bg-ink/80 border border-gold-dark px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-light">
              -{Math.round(100 - (product.price / product.compareAtPrice) * 100)}%
            </span>
          )}
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[11px] uppercase tracking-wider text-muted">
          {t(`category.${product.category}`)}
        </p>
        <h3 className="font-heading text-lg text-cream group-hover:text-gold-light transition-colors">
          {product.name[lang]}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-gold font-medium">{formatUSD(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted line-through">{formatUSD(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
