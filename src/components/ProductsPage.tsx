"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type ProductItemType = {
  id: number;
  name: string;
  image?: string | null;
  price: number;
  description?: string | null;
  gender: string | null;
};

const ProductsPage = () => {
  const [productList, setProductList] = useState<ProductItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/get-products"); 
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: ProductItemType[] = await response.json();
      setProductList(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productList.map((product) => (
        <Card key={product.id} className="flex flex-col m-2">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <Image
              src={product.image || "/skirt.jpg"} 
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto rounded-md object-cover center"
            />
            <CardDescription className="text-accent font-semibold">
              Price: ${product.price}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {product.description && <p>{product.description}</p>}
            <p>Category: {product.gender === "M" ? "Male" : "Female" || "Kids"}</p>
          </CardContent>
          <Link href={`/product/${product.id}`}>
            <CardFooter className="justify-between">
              <p>Add to cart...</p>
              <span>
                <FaCartPlus />
              </span>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
