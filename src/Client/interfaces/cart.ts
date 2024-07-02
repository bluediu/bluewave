/* Module: Interfaces */
import { ICategoryProduct } from "../../Admin/interfaces";

export interface ICartProduct extends ICategoryProduct {
  productQty: number;
}
