/* api */
import { api } from "../../../api";

/* interfaces */
import { IForm } from "../../interfaces";

const FORMS = "/forms";

/* ==== Form ==== */

/* Users */
export const getAuthForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/user/auth/`);
  return data;
};

export const getCreateUserForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/user/create/`);
  return data;
};

export const getUpdateUserForm = async (userId: number): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/user/${userId}/update/`);
  return data;
};

/* Categories */
export const getCreateCategoryForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/product/create_category/`);
  return data;
};

export const getUpdateCategoryForm = async (userId: number): Promise<IForm> => {
  const { data } = await api.get<IForm>(
    `${FORMS}/product/${userId}/update_category/`,
  );
  return data;
};
