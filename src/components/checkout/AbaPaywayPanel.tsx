"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { formatUSD } from "@/lib/format";

type AbaResponse =
  | { mock: true; tranId: string; amount: string; merchantId: string }
  | { mock: false; apiUrl: string; fields: Record<string, string> };

type Props = {
  orderNumber: string;
  amount: number;
  fullName: string;
  phone: string;
  email?: string;
  onSuccess: () => void;
  onCancel: () => void;
};

export function AbaPaywayPanel({ orderNumber, amount, fullName, phone, email, onSuccess, onCancel }: Props) {
  const { t } = useLanguage();
  const [data, setData] = useState<AbaResponse | null>(null);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/checkout/aba", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderNumber, amount, fullName, phone, email }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("aba checkout request failed");
        return res.json();
      })
      .then((json: AbaResponse) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [orderNumber, amount, fullName, phone, email]);

  useEffect(() => {
    if (data && !data.mock) formRef.current?.submit();
  }, [data]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-6 text-center">
        <h2 className="font-heading text-xl text-cream mb-1">{t("checkout.aba.title")}</h2>
        <p className="text-xs text-muted mb-5">{t("checkout.aba.scanNotice")}</p>

        {error && <p className="text-sm text-red-400">{t("checkout.aba.error")}</p>}

        {!error && !data && (
          <p className="text-sm text-muted py-10">{t("checkout.aba.loading")}</p>
        )}

        {data && data.mock && (
          <>
            <div className="mx-auto mb-5 h-40 w-40 rounded-md border border-border-soft bg-[repeating-linear-gradient(45deg,#2b241b_0_6px,#17140f_6px_12px)]" />
            <div className="space-y-2 text-sm mb-5">
              <div className="flex justify-between text-muted">
                <span>{t("checkout.aba.reference")}</span>
                <span className="text-cream">{data.tranId}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>{t("checkout.aba.amountLabel")}</span>
                <span className="text-gold font-semibold">{formatUSD(Number(data.amount))}</span>
              </div>
            </div>
            <p className="text-[11px] text-muted/80 mb-5 leading-relaxed">{t("checkout.aba.mockNotice")}</p>
            <button
              type="button"
              onClick={onSuccess}
              className="w-full rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors cursor-pointer"
            >
              {t("checkout.aba.simulateSuccess")}
            </button>
          </>
        )}

        {data && !data.mock && (
          <>
            <p className="text-sm text-muted py-6">{t("checkout.aba.redirecting")}</p>
            <form ref={formRef} action={data.apiUrl} method="POST" className="hidden">
              {Object.entries(data.fields).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value} />
              ))}
            </form>
          </>
        )}

        <button
          type="button"
          onClick={onCancel}
          className="mt-3 w-full rounded-md border border-border px-6 py-2.5 text-sm text-muted hover:border-gold-dark hover:text-cream transition-colors cursor-pointer"
        >
          {t("checkout.aba.cancel")}
        </button>
      </div>
    </div>
  );
}
