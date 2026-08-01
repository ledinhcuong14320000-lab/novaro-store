import { Suspense } from "react";
import { ProductsListing } from "./ProductsListing";

export const metadata = {
  title: "Shop All — NOVARO",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsListing />
    </Suspense>
  );
}
