import { ICategory } from "./category";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  is_active: boolean;
  image: string;
  category: ICategory;
}

export interface IProductCreate {
  name: string;
  description: string;
  price: number;
  image: File;
  category: number;
}

export interface IProductUpdate extends IProductCreate {
  is_active: boolean;
}
