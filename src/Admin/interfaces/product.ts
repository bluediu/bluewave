/* Interfaces */
import { ICategory } from "./category";

/* Types */
import { TScope } from "../../types";
import { TFilter } from "../types";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  is_active: boolean;
  image: string;
  category: ICategory;
  max_qty: number;
  min_qty: number;
}

export interface IProductFilterProps {
  filterBy: TFilter;
  category?: number;
  scope?: TScope;
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
