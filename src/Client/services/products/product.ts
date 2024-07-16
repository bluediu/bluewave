/* Api */
import { api } from "../../../api";

/* Interfaces */
import { ILatest } from "../../interfaces";

/* Utils */
import { fn } from "../../../utils";

const PRODUCTS = "/products/product";

export const listLatest = async (): Promise<ILatest[]> => {
  const { data } = await api.get<ILatest[]>(
    `${PRODUCTS}/list/latest/`,
    fn.getSessionToken("client"),
  );

  return data;
};
