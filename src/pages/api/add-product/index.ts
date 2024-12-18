import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db'; // Adjust the import based on your structure
import { productTable } from '@/db/schema'; // Adjust according to your import structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, image, price, description, gender } = req.body;

      // Validate input
      if (!name || typeof price !== 'number') {
        return res.status(400).json({ error: 'Name is required and price must be a number.' });
      }

      if (gender && !['M', 'F', 'K'].includes(gender)) {
        return res.status(400).json({ error: 'Gender must be either "M" or "F" & "category of K i.e. Kids".' });
      }

      // Insert product into the database
      const result: any = await db.insert(productTable).values({
        name,
        image,
        price,
        description,
        gender,
      });

      const productId = result[0]?.id; // Extract product ID from result

      return res.status(201).json({ message: 'Product added successfully!', product: { id: productId, name, image, price, description, gender } });
    } catch (error: any) {
      console.error('Error adding product:', error);
      return res.status(500).json({ error: 'Failed to add product.', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
