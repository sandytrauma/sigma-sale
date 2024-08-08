// types/Product.ts

export interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    description?: string; // Optional description
    gender: 'men' | 'women' | 'kids';
  }
  