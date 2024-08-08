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
      <div className="w-full text-center mb-6">
        <h1 className="text-4xl font-bold text-accent">{product.name}</h1>
        <p className="text-lg text-muted">{product.price}</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover h-60 object-center rounded-md mb-4"
        />
        {product.description && (
          <p className="text-lg text-muted">{product.description}</p>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
