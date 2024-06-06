/* api */
import { api } from "../../../api";

/* interfaces */
import { IAuthTableLogin, IAuthTableLoginResponse } from "../../interfaces";

const AUTH = "/tables/table";

/* ==== Auth ==== */
export const login = async (
  user: IAuthTableLogin,
): Promise<IAuthTableLoginResponse> => {
  const { data } = await api.post<IAuthTableLoginResponse>(
    `${AUTH}/login/`,
    user,
  );
  return data;
};
