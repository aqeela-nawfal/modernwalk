"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Badge from "./badge";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function ProductCard({ product, className }:{
  product: Product; className?: string;
}) {
  const original = product.price * 1.15; // fake crossed price

  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-shadow", className)}>
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="line-clamp-1 text-base">{product.title}</CardTitle>
  <Badge className="w-fit text-xs">{product.category}</Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative aspect-square w-full">
          <Image src={product.image} alt={product.title} fill className="object-contain" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold">{money(product.price)}</span>
          <span className="text-muted-foreground line-through text-sm">{money(original)}</span>
        </div>
      </CardContent>
    </Card>
  );

  // ...existing code...
}

