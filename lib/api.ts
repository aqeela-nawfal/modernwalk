import { Product } from "./types";
import { CATEGORY_SLUG_TO_NAME } from "./categories";

// Get products for one category. Newest first.
export async function fetchCategoryProducts(slug: string): Promise<Product[]> {
  const name = CATEGORY_SLUG_TO_NAME[slug];
  if (!name) throw new Error(`Unknown category: ${slug}`);
  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(name)}`;
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 12 } }); // cache 12h
  const data = (await res.json()) as Product[];
  return [...data].sort((a, b) => b.id - a.id);
}

// Flash sale = newest items from both categories, limited
export async function fetchFlashSale(limit = 8): Promise<Product[]> {
  const [men, women] = await Promise.all([
    fetchCategoryProducts("men-clothing"),
    fetchCategoryProducts("women-clothing"),
  ]);
  return [...men, ...women].sort((a, b) => b.id - a.id).slice(0, limit);
}
