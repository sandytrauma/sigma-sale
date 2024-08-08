// src/pages/api/products/index.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { mockProducts } from '@/lib/mockProducts';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gender } = req.query;

  if (req.method === 'GET') {
    if (gender) {
      const filteredProducts = mockProducts.filter(p => p.gender === gender);
      res.status(200).json(filteredProducts);
    } else {
      res.status(200).json(mockProducts);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
