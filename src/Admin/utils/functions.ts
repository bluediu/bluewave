import { JwtPayload, jwtDecode } from "jwt-decode";

type TJwtPayload = JwtPayload & { user_id: number };

/**
 * Return a jwt payload as object.
 *
 * NOTE: Call this function only when an existing LS token is present.
 */
export const decodeToken = (token: string): TJwtPayload => jwtDecode(token);
