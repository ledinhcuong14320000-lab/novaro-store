"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-surface p-0.5 text-xs ${className}`}
      role="group"
      aria-label="Language switch"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-2.5 py-1 transition-colors cursor-pointer ${
          lang === "en" ? "bg-gold text-ink font-semibold" : "text-muted hover:text-cream"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("km")}
        className={`rounded-full px-2.5 py-1 transition-colors cursor-pointer ${
          lang === "km" ? "bg-gold text-ink font-semibold" : "text-muted hover:text-cream"
        }`}
      >
        ខ្មែរ
      </button>
    </div>
  );
}
