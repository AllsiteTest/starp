import { pgTable, text, serial, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url"),
  category: text("category").notNull(),
});

export const policies = pgTable("policies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ 
  id: true, 
  createdAt: true 
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertPolicySchema = createInsertSchema(policies).omit({ id: true, updatedAt: true });

export type ContactMessage = typeof contactMessages.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Policy = typeof policies.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertPolicy = z.infer<typeof insertPolicySchema>;
