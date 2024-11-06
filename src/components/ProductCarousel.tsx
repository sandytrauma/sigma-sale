"use client";
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Define the types for the product
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description?: string;
}

// const products: Product[] = [
//   { id: 1, name: 'T-Shirt', image: '/tshirt.jpg', price: '₹200', description: 'A comfortable t-shirt.' },
//   { id: 2, name: 'Jeans', image: '/jeans.jpg', price: '₹400', description: 'Stylish jeans.' },
//   { id: 3, name: 'Jacket', image: '/jacket.jpg', price: '₹600', description: 'Warm jacket for winter.' },
// ];

const ProductCarousel: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/get-products'); // Adjust URL if needed
      const data: Product[] = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [products]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full rounded-lg flex-shrink-0">
              <div className="bg-zinc-100 p-4 h-[600px] shadow-md rounded-lg transition-transform text-accent duration-300">               
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  priority
                  className="w-full h-full object-cover object-center rounded-md mb-4"
                />
              </div>
              <div className="mt-4 items-center justify-center">
              <h2 className={cn("text-xl md:font-extrabold lg:font-extrabold bg-secondary text-zinc font-roboto")}>{product.name}<span className="px-2 gap-4">|</span>{product.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ProductCarousel;
