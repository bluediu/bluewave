export interface ITable {
  id: number;
  code: string;
  is_active: boolean;
}

export type ITableCreate = Omit<ITable, "id" | "is_active">;

export type ITableUpdate = Omit<ITable, "id">;
