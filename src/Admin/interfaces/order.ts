type TStatus = "Pending" | "Delivered" | "Canceled";

export interface IOrder {
  code: string;
  status: TStatus;
  issued_at: Date;
  is_close: boolean;
  table: Table;
  product: Product;
}
export interface IProductOrder {
  code: string;
  status_label: TStatus;
  product_name: string;
  product_image: string;
  product_category: string;
  product_price: number;
  is_close: boolean;
  quantity: number;
  max_qty: number;
  created_at: Date;
  updated_at: Date;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  is_active: boolean;
  image: string;
  category: Category;
  created_at: Date;
  updated_at: Date;
}

interface Category {
  id: number;
  name: string;
  is_active: boolean;
  image: string;
  created_at: Date;
  updated_at: Date;
}

interface Table {
  id: number;
  code: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
