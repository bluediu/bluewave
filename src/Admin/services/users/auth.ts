/* api */
import { api } from "@/api";

/* interfaces */
import { ILoginRequest, ILoginResponse } from "@/Admin/interfaces";

const AUTH = "/users/auth";

/* ==== Auth ==== */
export const login = async (user: ILoginRequest): Promise<ILoginResponse> => {
  const { data } = await api.post<ILoginResponse>(`${AUTH}/login/`, user);
  return data;
};
