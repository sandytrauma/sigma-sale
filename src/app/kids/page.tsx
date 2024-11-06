"use client";
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/Product';





const MensSectionPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3000/api/get-products?gender=K'); // Adjust URL if needed
      const data: Product[] = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  return (
    <section className={cn("min-h-screen bg-background p-6 mb-24")}>
      



      <main className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      )}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            passHref
            className="bg-zinc-100 p-4 rounded-lg shadow-md transition-transform text-accent duration-300 hover:scale-105 border border-border-accent"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-60 object-cover object-center rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-muted-primary">{product.name}</h2>
            <p className="text-lg text-muted-primary">{product.price}</p>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default MensSectionPage;
