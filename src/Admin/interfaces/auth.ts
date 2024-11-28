export interface ILoginRequest {
  username: string;
  password: string;
}

export interface IUserToken {
  user_id: number;
  superuser: boolean;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
}

export interface ILoginResponse {
  refresh: string;
  access: string;
  user_id: number;
  superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}
