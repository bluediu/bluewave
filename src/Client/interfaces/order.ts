interface IProduct {
  product: number;
  quantity: number;
}

export interface IBulkOrderRequest {
  table: string;
  products: IProduct[];
}

export interface IOrderCount {
  count: number;
}
