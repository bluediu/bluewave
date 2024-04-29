/* api*/
import { api } from "../../../api";

/* interfaces */
import { IOrder, IProductOrder } from "../../interfaces";

/* utils */
import { fn } from "../../utils";

const ORDERS = "/orders/order";

export const listOrders = async (id?: number): Promise<IOrder[]> => {
  const { data } = await api.get<IOrder[]>(
    `${ORDERS}/list/?table_id=${id}`,
    fn.getSessionToken(),
  );
  return data;
};

export const listProductsByTableOrder = async (
  code: string,
): Promise<IProductOrder[]> => {
  const { data } = await api.get<IProductOrder[]>(
    `${ORDERS}/table/${code}/products/`,
    fn.getSessionToken(),
  );

  return data;
};
