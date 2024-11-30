/* api*/
import { api } from "@/api";

/* interfaces */
import { IUser, IUserCreate, IUserUpdateRequest } from "@/Admin/interfaces";

/* types */
import { TFilter } from "@/Admin/types";

/* utils */
import { fn, sleep } from "@/utils";

const USERS = "/users/user";

/* ==== User ==== */
export const getUser = async (id: number): Promise<IUser> => {
  const { data } = await api.get<IUser>(
    `${USERS}/${id}/get/`,
    fn.getSessionToken(),
  );
  return data;
};

export const listUsers = async (filterBy: TFilter): Promise<IUser[]> => {
  const params = fn.generateUrlParams({ filter_by: filterBy });

  const { data } = await api.get<IUser[]>(
    `${USERS}/list/${params}`,
    fn.getSessionToken(),
  );

  return data;
};

export const createUser = async (user: IUserCreate): Promise<undefined> => {
  await api.post<undefined>(`${USERS}/create/`, user, fn.getSessionToken());
};

export const updateUser = async (
  props: IUserUpdateRequest,
): Promise<undefined> => {
  const { id, user } = props;

  await api.put<undefined>(
    `${USERS}/${id}/update/`,
    user,
    fn.getSessionToken(),
  );
};
