export interface IPaymentSearch {
  code: string;
  payment_type: string;
  since: string;
  until: string;
}

export interface IPayment {
  code: string;
  table: string;
  total: number;
  type: "Cash" | "Card";
  status: string;
  created_at: string;
}

export interface IOrderPayment {
  quantity: number;
  product_id: string;
  product_name: string;
  product_image: string;
  product_category: string;
  product_price: number;
}

export interface IRegisterPayment {
  table: string;
  type: string;
}
