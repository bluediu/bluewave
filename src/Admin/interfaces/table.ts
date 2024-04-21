export interface ITable {
  id: number;
  code: string;
  is_active: boolean;
}

export interface ITableOrderStatus {
  id: number;
  code: string;
  orders_number: number;
  all_orders_delivered: boolean;
}

export type ITableCreate = Omit<ITable, "id" | "is_active">;

export type ITableUpdate = Omit<ITable, "id">;
