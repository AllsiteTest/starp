import { db } from "./db";
import {
  contactMessages,
  products,
  policies,
  type InsertContactMessage,
  type ContactMessage,
  type Product,
  type InsertProduct,
  type Policy,
  type InsertPolicy
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  getPolicies(): Promise<Policy[]>;
  getPolicyBySlug(slug: string): Promise<Policy | undefined>;
  createPolicy(policy: InsertPolicy): Promise<Policy>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }

  async getPolicies(): Promise<Policy[]> {
    return await db.select().from(policies);
  }

  async getPolicyBySlug(slug: string): Promise<Policy | undefined> {
    const [policy] = await db.select().from(policies).where(eq(policies.slug, slug));
    return policy;
  }

  async createPolicy(policy: InsertPolicy): Promise<Policy> {
    const [newPolicy] = await db.insert(policies).values(policy).returning();
    return newPolicy;
  }
}

export const storage = new DatabaseStorage();
