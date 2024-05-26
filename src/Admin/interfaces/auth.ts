export interface IAuthLogin {
  username: string;
  password: string;
}

export interface IAuthLoginResponse {
  refresh: string;
  access: string;
  user_id: number;
  superuser: boolean;
}
