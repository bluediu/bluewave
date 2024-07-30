/* api*/
import { api } from "../../../api";

/* interfaces */
import {
  IOrderPayment,
  IPayment,
  IPaymentSearch,
  IRegisterPayment,
} from "../../interfaces";

/* utils */
import { fn } from "../../../utils";

const PAYMENTS = "/payments/payment";

export const registerPayment = async (
  order: IRegisterPayment,
): Promise<undefined> => {
  await api.post<undefined>(
    `${PAYMENTS}/register/`,
    order,
    fn.getSessionToken(),
  );
};

export const getPayment = async (code: string): Promise<IPayment> => {
  if (!code) return {} as IPayment;

  const { data } = await api.get<IPayment>(
    `${PAYMENTS}/table/${code}/get/`,
    fn.getSessionToken(),
  );
  return data;
};

export const getPayments = async (
  items: IPaymentSearch,
): Promise<IPayment[]> => {
  const params = fn.generateUrlParams({ ...items });

  const { data } = await api.get<IPayment[]>(
    `${PAYMENTS}/list/${params}`,
    fn.getSessionToken(),
  );

  return data;
};

export const getOrdersByPayment = async (
  code: string,
): Promise<IOrderPayment[]> => {
  const { data } = await api.get<IOrderPayment[]>(
    `${PAYMENTS}/${code}/orders/`,
    fn.getSessionToken(),
  );

  return data;
};

export const closePayment = async (code: string): Promise<undefined> => {
  const noData = {};
  const { data } = await api.put<undefined>(
    `${PAYMENTS}/table/${code}/close/`,
    noData,
    fn.getSessionToken(),
  );
  return data;
};
