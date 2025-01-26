import { CategoriesResponse, Product, ProductResponse } from "@/types/products.type";

// Products
export async function getAllProducts(limit = 0): Promise<ProductResponse> {
  const res = await fetch("https://dummyjson.com/products?limit=" + limit);
  return await res.json();
}
// Single Product
export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
}

// Get Product By Category
export async function getProductByCategory(slug: string): Promise<ProductResponse> {
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
  return await res.json();
}

// Category
export async function getCatogories(): Promise<CategoriesResponse> {
  const res = await fetch("https://dummyjson.com/products/categories");
  return await res.json();
}

export async function getCategoryList(): Promise<string[]> {
  const res = await fetch("https://dummyjson.com/products/category-list");
  return await res.json();
}
