// src/components/ProductDetails.tsx

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/Product';
import { cn } from '@/lib/utils';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className={cn("min-h-screen p-6")}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="flex flex-col md:flex-col-2 lg:flex-col-2 items-center">
          <div className="w-full  text-center mb-6">
            <div className="flex w-full p-2 mb-4 gap-6 items-center justify-center">
              <h1 className="text-4xl font-bold text-accent">{product.name}</h1>
              <span className="text-2xl text-accent font-bold">/</span>
              <div className="flex  items-center justify-center">                
                {product.description && (
                  <p className="text-3xl text-muted">{product.description}</p>
                )}
              </div>
            </div>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover h-60 object-center rounded-md mb-4"
            />

          </div>
          <div className="flex w-full p-2 gap-6 items-center justify-center">
            <p className="text-lg text-muted"><span className="gap-4"> Price : </span>{product.price}</p>
            <h1 className="flex text-muted text-2xl gap-2">Rating
              <div className="flex">
                {Array(5).fill(1).map((_, index) => (
                  <Image
                    src="/star.svg"
                    key={index}
                    alt="star-rating"
                    width={24}
                    height={24}
                    className="ml-[-4px]"
                  />
                ))}
              </div>
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
