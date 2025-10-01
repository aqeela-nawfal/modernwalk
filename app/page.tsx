import { Section } from "@/components/section";
import { ProductGrid } from "@/components/product-grid";

import { fetchCategoryProducts, fetchFlashSale } from "@/lib/api";
import Link from "next/link";
import { Button } from "../components/button";

export default async function HomePage() {

  const [flash, men, women] = await Promise.all([
    fetchFlashSale(8),
    fetchCategoryProducts("men-clothing"),
    fetchCategoryProducts("women-clothing"),
  ]);

  // Remove one card from women collection (remove the first item)
  const womenModified = women.slice(1, 8);
  const menModified = men;

  return (
    <div className="space-y-12">
      <Section
        title="Flash Sale"
        action={
          <Link href="/catalog/men-clothing">
            <Button variant="secondary">Shop Now</Button>
          </Link>
        }
      >
        <ProductGrid products={flash} />
      </Section>




      <Section
        title="Men's Clothing"
        action={<Link href="/catalog/men-clothing"><Button>View all</Button></Link>}
      >
        <ProductGrid products={menModified} />
      </Section>


      <Section
        title="Women's Clothing"
        action={<Link href="/catalog/women-clothing"><Button>View all</Button></Link>}
      >
        <ProductGrid products={womenModified} />
      </Section>
    </div>
  );
}
