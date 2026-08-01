"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { CartProvider } from "@/cart/CartContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}
