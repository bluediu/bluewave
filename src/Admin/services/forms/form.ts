/* api */
import { api } from "../../../api";

/* interfaces */
import { IForm } from "../../interfaces";

const FORMS = "/forms";

/* ==== Form ==== */
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
