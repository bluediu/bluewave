export type TFilter = "all" | "actives" | "inactives";

export enum EStatus {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}

export enum EPaymentType {
  CASH = "CASH",
  CARD = "CARD",
}

export enum EPaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
}
