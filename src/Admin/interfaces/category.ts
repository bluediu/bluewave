export interface ICategory {
  id: number;
  name: string;
  is_active: boolean;
  image: string;
}

export interface ICategoryCreate {
  name: string;
  image: File;
}

export interface ICategoryUpdate extends ICategoryCreate {
  is_active: boolean;
}

export interface ICategoryProduct {
  id: number;
  name: string;
  price: number;
  is_active: boolean;
  image: string;
  category_name: string;
}
