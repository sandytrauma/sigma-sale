// src/pages/api/products/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { mockProducts } from '@/lib/mockProducts'; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  // Check if the id is a valid string
  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  // Convert id to a number
  const productId = parseInt(id, 10);

  if (req.method === 'GET') {
    // Check if the id is a valid number
    if (isNaN(productId)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Find the product by ID
    const product = mockProducts.find(p => p.id === productId);
    
    if (product) {
      res.status(200).json(product);
      console.log('Fetched product:', product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    console.log('Method not allowed');
  }
}
