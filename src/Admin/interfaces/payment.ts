export interface IPayment {
  code: string;
  table: string;
  total: number;
  type: "Cash" | "Card";
  status: string;
}

export interface IRegisterPayment {
  table: string;
  type: string;
}
