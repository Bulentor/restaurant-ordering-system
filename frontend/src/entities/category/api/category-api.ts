import type { Category } from '../model/types'; 

const mockCategories: Category[] = [
  { id: 1, name: "Супы" },
  { id: 2, name: "Блины" },
  { id: 3, name: "Горячее" },
  { id: 4, name: "Выпечка" },
  { id: 5, name: "Напитки" },
  { id: 6, name: "Холодные" }
];

export const categoryApi = {
  async getCategories(): Promise<Category[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockCategories;
  }
};
