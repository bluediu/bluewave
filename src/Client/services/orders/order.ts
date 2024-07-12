/* Api */
import { api } from "../../../api";

/* Interfaces */
import { IBulkOrderRegister } from "../../interfaces";

/* Utils */
import { fn } from "../../../utils";

const ORDERS = "/orders/order";

export const registerBulkOrders = async (
  orders: IBulkOrderRegister,
): Promise<undefined> => {
  await api.post<undefined>(
    `${ORDERS}/register/bulk/`,
    orders,
    fn.getSessionToken("client"),
  );
};
