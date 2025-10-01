import { Section } from "@/components/section";
import { ProductGrid } from "@/components/product-grid";
import { fetchCategoryProducts } from "@/lib/api";
import { CATEGORY_SLUGS, CATEGORY_SLUG_TO_NAME } from "@/lib/categories";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const name = CATEGORY_SLUG_TO_NAME[params.slug];
  if (!name) return { title: "Not Found | Modern Walk" };
  return { title: `${name} | Modern Walk` };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  if (!CATEGORY_SLUGS.includes(params.slug)) notFound();

  const products = await fetchCategoryProducts(params.slug);
  const title = CATEGORY_SLUG_TO_NAME[params.slug];

  return (
    <div className="space-y-8">
      <Section title={title}>
        <ProductGrid products={products} />
      </Section>
    </div>
  );
}
