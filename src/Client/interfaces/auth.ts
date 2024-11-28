export interface ILoginRequest {
  code: string;
}

export interface ILoginResponse {
  access: string;
  code: string;
}
