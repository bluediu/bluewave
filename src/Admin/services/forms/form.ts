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

export const getUpdateCategoryForm = async (
  categoryId: number,
): Promise<IForm> => {
  const { data } = await api.get<IForm>(
    `${FORMS}/product/${categoryId}/update_category/`,
  );
  return data;
};

/* Products */
export const getCreateProductForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/product/create_product/`);
  return data;
};

export const getProductsFilterForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/product/filter/`);
  return data;
};

export const getUpdateProductForm = async (
  productId: number,
): Promise<IForm> => {
  const { data } = await api.get<IForm>(
    `${FORMS}/product/${productId}/update_product/`,
  );
  return data;
};

/* Tables */
export const getCreateTableForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/table/create/`);
  return data;
};

export const getUpdateTableForm = async (tableId: number): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/table/${tableId}/update/`);
  return data;
};

/* Orders */
export const getRegisterOrderForm = async (code: string): Promise<IForm> => {
  const { data } = await api.get<IForm>(
    `${FORMS}/order/table/${code}/register/`,
  );
  return data;
};

/* Payments */
export const getRegisterPaymentForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/order/register_payment/`);
  return data;
};

/* Payments */
export const getSearchHistoryForm = async (): Promise<IForm> => {
  const { data } = await api.get<IForm>(`${FORMS}/order/search_payments/`);
  return data;
};
