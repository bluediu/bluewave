/* api */
import { api } from "../../../api";

/* Module: interfaces */
import { IForm } from "../../../Admin/interfaces";

const FORMS = "/forms";

/* ==== Form ==== */

/* Tables */
export const getAuthTableForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/table/login/`);
  return data;
};
