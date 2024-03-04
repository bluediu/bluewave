/* api*/
import { api } from "../../../api";

/* interfaces */
import { IUser } from "../../interfaces";

/* utils */
import { fn } from "../../utils";

const USERS = "/users/user";

/* ==== User ==== */
export const getUser = async (id: number): Promise<IUser> => {
  if (id === 0) return {} as IUser;

  const { data } = await api.get<IUser>(
    `${USERS}/${id}/get/`,
    fn.getSessionToken(),
  );
  return data;
};

type TFilter = "all" | "actives" | "inactives";

export const listUsers = async (filterBy: TFilter): Promise<IUser[]> => {
  const { data } = await api.get<IUser[]>(
    `${USERS}/list/?filter_by=${filterBy}`,
    fn.getSessionToken(),
  );

  return data;
};

export const createUser = async (user: IUser): Promise<undefined> => {
  await api.post<undefined>(`${USERS}/create/`, user, fn.getSessionToken());
};

interface IUpdateUser {
  id: number;
  user: IUser;
}

export const updateUser = async (props: IUpdateUser): Promise<undefined> => {
  const { id, user } = props;

  await api.put<undefined>(
    `${USERS}/${id}/update/`,
    user,
    fn.getSessionToken(),
  );
};

export interface IUserInactive {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_staff?: boolean;
  is_active: boolean;
}

export const inactiveUser = async (user: IUserInactive): Promise<undefined> => {
  await api.put<undefined>(
    `${USERS}/${user.id}/update/`,
    { is_active: false },
    fn.getSessionToken(),
  );
};
