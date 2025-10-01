import Link from "next/link";
import Badge from "./badge";

export function CategoryPills() {
  const list = [
    { slug: "men-clothing", label: "Men's Clothing" },
    { slug: "women-clothing", label: "Women's Clothing" },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((c) => (
        <Link key={c.slug} href={`/${c.slug}`}>
          <Badge className="cursor-pointer">{c.label}</Badge>
        </Link>
      ))}
    </div>
  );
}
