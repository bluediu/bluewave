import { JwtPayload, jwtDecode } from "jwt-decode";
import { TOKEN } from "../constants";
interface ISessionTokenResponse {
  headers: {
    Authorization: string;
  };
}

type TJwtPayload = JwtPayload & { user_id: number };

/**
 * Return a jwt payload as object.
 *
 * NOTE: Call this function only when an existing LS token is present.
 */
export const decodeToken = (token: string): TJwtPayload => jwtDecode(token);

/**
 * Return a HTTP header authorization token.
 */
export const getSessionToken = (): ISessionTokenResponse => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(TOKEN) ?? "INVALID_TOKEN"}`,
  },
});
