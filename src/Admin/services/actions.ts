import { api } from "../../api";

import { IAuthForm, IAuthLogin, IAuthLoginResponse } from "../interfaces";

const FORMS = "/forms";
// const USERS = "/users/user";
const AUTH = "/users/auth";

export const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const getAuthForm = async (): Promise<IAuthForm> => {
  const { data } = await api.get<IAuthForm>(`${FORMS}/user/auth/`);
  return data;
};

export const authLogin = async (
  user: IAuthLogin,
): Promise<IAuthLoginResponse> => {
  const { data } = await api.post<IAuthLoginResponse>(`${AUTH}/login/`, user);
  return data;
};
