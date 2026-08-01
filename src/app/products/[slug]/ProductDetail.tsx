"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/cart/CartContext";
import { formatUSD } from "@/lib/format";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { QuantityStepper } from "@/components/QuantityStepper";
import { getRelatedProducts, type Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const { lang, t } = useLanguage();
  const { addItem } = useCart();
  const router = useRouter();

  const [colorIndex, setColorIndex] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const related = getRelatedProducts(product);
  const selectedColor = product.colors[colorIndex];
  const colorLabel = selectedColor?.name[lang] ?? "";
  const activeImage = product.images?.[colorIndex] ?? product.images?.[0];

  const handleAddToCart = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    addItem(product, size, colorLabel, qty, activeImage);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const stockLabel = product.stock <= 5 ? t("product.lowStock") : t("product.inStock");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
      <button
        type="button"
        onClick={() => router.push("/products")}
        className="text-sm text-muted hover:text-gold transition-colors mb-8 inline-flex items-center gap-1 cursor-pointer"
      >
        ← {t("product.back")}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface">
            {activeImage ? (
              <Image
                key={activeImage}
                src={activeImage}
                alt={`${product.name[lang]} — ${colorLabel}`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                className="object-cover animate-fade-in"
              />
            ) : (
              <ProductArt seed={product.id} category={product.category} className="h-full w-full" />
            )}
          </div>
          {product.images && product.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setColorIndex(i)}
                  aria-label={product.colors[i]?.name[lang]}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors cursor-pointer ${
                    colorIndex === i ? "border-gold" : "border-border hover:border-gold-dark"
                  }`}
                >
                  <Image src={src} alt="" fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-muted">{t(`category.${product.category}`)}</p>
          <h1 className="font-heading text-3xl sm:text-4xl text-cream mt-2">{product.name[lang]}</h1>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-2xl text-gold font-medium">{formatUSD(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-base text-muted line-through">{formatUSD(product.compareAtPrice)}</span>
            )}
          </div>

          <p className="text-sm text-muted leading-relaxed mt-5 max-w-md">{product.description[lang]}</p>

          <p className="text-xs text-gold-light mt-4">{stockLabel} · {t("product.sku")}: {product.sku}</p>

          {/* Color */}
          {product.colors.length > 0 && (
            <div className="mt-7">
              <p className="text-sm text-cream mb-2">
                {t("product.color")}: <span className="text-muted">{colorLabel}</span>
              </p>
              <div className="flex gap-2">
                {product.colors.map((c, i) => (
                  <button
                    key={c.name.en}
                    type="button"
                    aria-label={c.name[lang]}
                    onClick={() => setColorIndex(i)}
                    className={`h-9 w-9 rounded-full border-2 transition-all cursor-pointer ${
                      colorIndex === i ? "border-gold scale-110" : "border-border hover:border-gold-dark"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          <div className="mt-7">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-cream">{t("product.size")}</p>
              <button type="button" className="text-xs text-muted hover:text-gold transition-colors cursor-pointer">
                {t("product.sizeGuide")}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSize(s);
                    setSizeError(false);
                  }}
                  className={`min-w-11 rounded-md border px-3 py-2 text-sm transition-colors cursor-pointer ${
                    size === s
                      ? "border-gold bg-gold text-ink font-semibold"
                      : "border-border text-cream hover:border-gold hover:text-gold"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {sizeError && <p className="text-xs text-red-400 mt-2">{t("product.selectSize")}</p>}
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="text-sm text-cream sr-only">{t("product.quantity")}</p>
            <QuantityStepper value={qty} onChange={setQty} max={product.stock} />
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 min-w-[180px] rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors cursor-pointer"
            >
              {justAdded ? `✓ ${t("product.added")}` : t("product.addToCart")}
            </button>
          </div>

          {/* Details accordions */}
          <div className="mt-10 divide-y divide-border-soft border-t border-b border-border-soft">
            <details className="py-4 group">
              <summary className="cursor-pointer list-none flex items-center justify-between text-sm text-cream">
                {t("product.details")}
                <span className="text-gold group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-muted mt-3 leading-relaxed">{product.description[lang]}</p>
            </details>
            <details className="py-4 group">
              <summary className="cursor-pointer list-none flex items-center justify-between text-sm text-cream">
                {t("product.care")}
                <span className="text-gold group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-muted mt-3 leading-relaxed">{product.care[lang]}</p>
            </details>
            <details className="py-4 group">
              <summary className="cursor-pointer list-none flex items-center justify-between text-sm text-cream">
                {t("product.shipping")}
                <span className="text-gold group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-muted mt-3 leading-relaxed">{t("product.shippingBody")}</p>
            </details>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-heading text-2xl text-cream mb-6">{t("product.related")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
