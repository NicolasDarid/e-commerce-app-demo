import { Product, SingleFormatProduct } from "./store";

export function getDefaultPrice(product: Product): number {
  if ("formats" in product && product.formats.length > 0) {
    return product.formats[0].price;
  }
  return (product as SingleFormatProduct).price;
}

export function getDefaultPoids(product: Product): string {
  if ("formats" in product && product.formats.length > 0) {
    return product.formats[0].poids;
  }
  const single = product as SingleFormatProduct;
  return single.poids ?? ""; // <-- fallback vide si undefined
}

export function getDefaultOriginalPrice(product: Product): number {
  if ("formats" in product && product.formats.length > 0) {
    return product.formats[0].originalPrice ?? 0;
  }
  const single = product as SingleFormatProduct;
  return single.originalPrice ?? 0; // <-- fallback vide si undefined
}
