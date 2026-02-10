import type { Product } from "../@types";

export const useFilter = () => {
  const filterByCategory = (items: Product[], category: string) => {
    if (category === "all") return items;
    return items.filter((item) => item.category.categoryName === category);
  };

  const sortItems = (items: Product[], sortBy: string) => {
    const copy = [...items];

    switch (sortBy) {
      case "price-asc":
        return copy.sort((a, b) => a.price - b.price);
      case "price-desc":
        return copy.sort((a, b) => b.price - a.price);
      case "name-asc":
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return copy.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return items;
    }
  };

  return { filterByCategory, sortItems };
};
