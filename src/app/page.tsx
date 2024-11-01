"use client";
import Image from "next/image";

import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Container } from "postcss";



export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, isLoading] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3000/api/products');
      const data: Product[] = await res.json();
      setProducts(data);

    };
    fetchProducts();
  }, []);

  return (
    <section className="h-full w-full flex flex-col items-center justify-center gap-y-4">
      <div
        className="relative border-accent h-[600px] w-full"
        style={{
          background: 'linear-gradient(0.25turn, rgba(63, 135, 166, 0.8), rgba(15, 52, 67, 0.8), rgba(52, 232, 158, 0.8))'
        }}
      >
        <img
          src="/skirt.jpg"
          alt="section-category-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.1,
            }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-green-200 font-semibold text-center p-10 bg-black bg-opacity-50"
        >
          Fashion is the armour to survive the reality of everyday life
          <Image
            src="/quote.svg"
            alt="camp"
            width={28}
            height={28}
            className="camp-quote object-cover object-center float-end top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="feature-button p-4">
            <Link href={"/products"}>
            <button className="bg-accent border-accent hover:bg-secondary py-2 px-4 rounded-md transition">
              <p className="flex text-muted items-center transform justify-center gap-2">
                <ChevronRight className="lg:hover:rotate-90 duration-75" />
                Explore
                <span className="hidden sm:inline md:inline lg:inline"> our daily products</span>
              </p>
            </button>
            </Link>
          </div>
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:mt-5 gap-x-4"
      >
        <div className="relative w-full h-full rounded-[80%]"
          style={{
            background: 'linear-gradient(0.1turn, rgba(63, 135, 166, 0.0), rgba(15, 52, 67, 0.0), rgba(52, 232, 158, 0.1))'
          }}
        >
          <Image
            src="/snowboarder.png"
            alt="snowboarder hero"
            width={400}
            height={400}
            priority
            className="object-contain object-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center bg-background-transparent p-20 mt-10 order-last md:order-1">

          <p className="text-muted items-center justify-center">
            Sigma-Sale at your doorstep...
          </p>
          <div className="flex flex-wrap items-center jsutify-center gap-3 pt-4">
            <button className="bg-accent border-accent hover:bg-secondary py-2 px-4 rounded-md transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>


      
      <div className={cn("Feture-product p-4 mb-24"
      )}>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              passHref
              className="bg-zinc-100 p-4 rounded-lg text-background shadow-md border border-border-accent"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                priority
                className="h-[192px] w-full object-cover object-center rounded-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="text-lg font-bold text-gray-800">${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </section>


  );
}
