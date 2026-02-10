type Picture = {
  id: number;
  url: string;
  productId: number;
};

type Category = {
  id: number;
  categoryName: string;
};

export interface Product {
  id: number;
  name: string;
  price: number;
  pictures: Picture[];
  description: string;
  categoryId: number;
  category: Category;
  stock: number;
}

export type ProductCart = {
  id:number;
  name: string;
  amount: number;
  count: number;
  category: string;
  picture: Picture
  price: number;
};


