import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db';
import { productTable } from '@/db/schema'; 
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { gender } = req.query; 

    try {
      // Start building the query
      const query = db.select().from(productTable);
      
      // Apply filtering based on gender
      if (Array.isArray(gender)) {
        // If gender is an array, use the first value
        query.where(eq(productTable.gender, gender[0]));
      } else if (gender) {
        // If gender is a single string
        query.where(eq(productTable.gender, gender));
      }

      const products = await query.execute(); // Execute the query

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
