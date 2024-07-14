/* Api */
import { api } from "../../../api";

/* Interfaces */
import { IBulkOrderRegister, IOrderCount } from "../../interfaces";

/* Utils */
import { fn } from "../../../utils";

const ORDERS = "/orders/order";

export const getOrderCount = async (code: string): Promise<IOrderCount> => {
  if (!code) return {} as IOrderCount;

  const { data } = await api.get<IOrderCount>(
    `${ORDERS}/table/${code}/count/`,
    fn.getSessionToken("client"),
  );

  return data;
};

export const registerBulkOrders = async (
  orders: IBulkOrderRegister,
): Promise<undefined> => {
  await api.post<undefined>(
    `${ORDERS}/register/bulk/`,
    orders,
    fn.getSessionToken("client"),
  );
};
