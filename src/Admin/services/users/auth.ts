/* api */
import { api } from "../../../api";

/* interfaces */
import { IAuthLogin, IAuthLoginResponse } from "../../interfaces";

const AUTH = "/users/auth";

/* ==== Auth ==== */
export const authLogin = async (
  user: IAuthLogin,
): Promise<IAuthLoginResponse> => {
  const { data } = await api.post<IAuthLoginResponse>(`${AUTH}/login/`, user);
  return data;
};
