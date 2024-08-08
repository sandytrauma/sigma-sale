// src/app/product/[id]/page.tsx

import React from 'react';
import { Product } from '@/types/Product';
import ProductDetails from '@/components/ProductDetails';

// Fetch product data based on the `id`
async function fetchProductById(id: string): Promise<Product> {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      next: { revalidate: 60 }, // Revalidate at most every 60 seconds
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    // You might want to handle the error more gracefully here
    throw error; // Rethrow the error after logging it
  }
}



interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  try {
    const product = await fetchProductById(params.id);
    return <ProductDetails product={product} />;
  } catch (error) {
    // Handle the error, e.g., show an error message or a fallback UI
    return <div>Error loading product details</div>;
  }
}



export default ProductPage;
