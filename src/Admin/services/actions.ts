import { api } from "../../api";
import { fn } from "../utils";
import {
  IAuthForm,
  IAuthLogin,
  IAuthLoginResponse,
  IUser,
} from "../interfaces";

const FORMS = "/forms";
const AUTH = "/users/auth";
const USERS = "/users/user";

// TODO: Delete later, only testing propuse
export const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

/* ==== Form ==== */
export const getAuthForm = async (): Promise<IAuthForm> => {
  const { data } = await api.get<IAuthForm>(`${FORMS}/user/auth/`);
  return data;
};

/* ==== Auth ==== */
export const authLogin = async (
  user: IAuthLogin,
): Promise<IAuthLoginResponse> => {
  const { data } = await api.post<IAuthLoginResponse>(`${AUTH}/login/`, user);
  return data;
};

/* ==== User ==== */
export const getUser = async (id: number): Promise<IUser> => {
  const { data } = await api.get<IUser>(
    `${USERS}/${id}/get/`,
    fn.getSessionToken(),
  );

  return data;
};
