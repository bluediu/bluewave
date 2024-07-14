/* api*/
import { api } from "../../../api";

/* interfaces */
import {
  IOrder,
  IOrderRegister,
  IOrderUpdate,
  IProductOrder,
  IOrderState,
} from "../../interfaces";

/* utils */
import { fn } from "../../../utils";

/* Types */
import { TScope } from "../../../types";

const ORDERS = "/orders/order";

export const getOrderState = async (
  code: string,
  scope: TScope = "admin",
): Promise<IOrderState> => {
  const { data } = await api.get<IOrderState>(
    `${ORDERS}/table/${code}/state/`,
    fn.getSessionToken(scope),
  );
  return data;
};

export const listOrders = async (id?: number): Promise<IOrder[]> => {
  const { data } = await api.get<IOrder[]>(
    `${ORDERS}/list/?table_id=${id}`,
    fn.getSessionToken(),
  );
  return data;
};

export const listProductsByTableOrder = async (
  code: string,
  scope: TScope = "admin",
): Promise<IProductOrder[]> => {
  if (!code) return {} as IProductOrder[];

  const { data } = await api.get<IProductOrder[]>(
    `${ORDERS}/table/${code}/products/`,
    fn.getSessionToken(scope),
  );

  return data;
};

export const registerOrder = async (
  order: IOrderRegister,
): Promise<undefined> => {
  await api.post<undefined>(`${ORDERS}/register/`, order, fn.getSessionToken());
};

export const updateOrder = async (props: {
  code: string;
  order: IOrderUpdate;
}): Promise<undefined> => {
  const { code, order } = props;

  await api.put<undefined>(
    `${ORDERS}/${code}/update/`,
    order,
    fn.getSessionToken(),
  );
};

export const closeOrders = async (code: string): Promise<undefined> => {
  const noData = {};
  const { data } = await api.put<undefined>(
    `${ORDERS}/table/${code}/close_bulk/`,
    noData,
    fn.getSessionToken(),
  );
  return data;
};
