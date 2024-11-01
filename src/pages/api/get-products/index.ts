import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db'; // Adjust the import based on your structure
import { productTable } from '@/db/schema'; // Adjust according to your import structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const products = await db.select().from(productTable).execute();
      return res.status(200).json(products);
    } catch (error: any) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ error: 'Failed to fetch products.', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
