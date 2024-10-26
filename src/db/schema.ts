// src/lib/tables.ts
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const productTable = pgTable("product", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  image: varchar('imageUrl'),
  price: integer().notNull(),
  description: varchar('description'),
  gender: varchar('gender').default('M'),
});

// Define the type for the product
export type Product = {
  id: number;
  name: string;
  image?: string;
  price: number;
  description?: string;
  gender: string;
};
