export interface IUser {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}

export interface IUserCreate {
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_active: boolean;
  password: string;
  repeat_password: string;
}

export type IUserUpdate = Omit<IUserCreate, "password" | "repeat_password">;

export interface IUserUpdateRequest {
  id: number;
  user: IUserUpdate;
}
