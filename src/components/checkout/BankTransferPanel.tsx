"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { formatUSD } from "@/lib/format";

const ABA_ACCOUNT_NUMBER = "005700019";
const WING_ACCOUNT_NUMBER = "011200701";

type Props = {
  orderNumber: string;
  amount: number;
  onConfirm: () => void;
  onCancel: () => void;
};

export function BankTransferPanel({ orderNumber, amount, onConfirm, onCancel }: Props) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 overflow-y-auto">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-6 text-center my-auto">
        <h2 className="font-heading text-xl text-cream mb-1">{t("checkout.bankTransfer.title")}</h2>
        <p className="text-xs text-muted mb-5 leading-relaxed">{t("checkout.bankTransfer.notice")}</p>

        <div className="space-y-2 text-sm mb-5">
          <div className="flex justify-between text-muted">
            <span>{t("checkout.bankTransfer.orderRefLabel")}</span>
            <span className="text-gold font-semibold">{orderNumber}</span>
          </div>
          <div className="flex justify-between text-muted">
            <span>{t("checkout.bankTransfer.amountLabel")}</span>
            <span className="text-gold font-semibold">{formatUSD(amount)}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-muted mb-2">{t("checkout.bankTransfer.abaLabel")}</p>
          <div className="relative mx-auto mb-2 h-48 w-48 overflow-hidden rounded-md border border-border-soft bg-ink">
            <Image src="/payment/aba-qr.jpg" alt="ABA QR" fill sizes="192px" className="object-contain" />
          </div>
          <p className="text-sm text-cream font-semibold">{ABA_ACCOUNT_NUMBER}</p>
        </div>

        <div className="mb-5 pt-4 border-t border-border-soft">
          <p className="text-xs text-muted mb-2">{t("checkout.bankTransfer.wingLabel")}</p>
          <p className="text-sm text-cream font-semibold mb-2">{WING_ACCOUNT_NUMBER}</p>
          <p className="text-[11px] text-muted/80 leading-relaxed">{t("checkout.bankTransfer.wingNotice")}</p>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="w-full rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors cursor-pointer"
        >
          {t("checkout.bankTransfer.confirm")}
        </button>
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
