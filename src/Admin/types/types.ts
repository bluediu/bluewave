export type TFilter = "all" | "actives" | "inactives";
export type TSize = "tiny" | "small" | "large" | "fullscreen";

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
