interface IProduct {
  product: number;
  quantity: number;
}

export interface IBulkOrderRegister {
  table: string;
  products: IProduct[];
}
