import { JwtPayload, jwtDecode } from "jwt-decode";
import { TOKEN } from "../constants";
interface ISessionTokenResponse {
  headers: {
    Authorization: string;
  };
}

type TJwtPayload = JwtPayload & { user_id: number; superuser: boolean };

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

/**
 * Asynchronously delays execution for a specified number of seconds.
 */
export const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

/**
 * Return a date string to the 'd/m/Y, H:i' format.
 */
export const formatDate = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const formattedDate = dateObj
    .toLocaleString("default", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+)/, "$2/$1/$3, $4:$5");

  return formattedDate;
};

/**
 * Convert a object data to a form data object.
 */
export const createFormData = <T>(data: T): FormData => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data as Record<string, Blob>)) {
    formData.append(key, value);
  }

  return formData;
};

/**
 * Convert a cent value to a dolar value.
 */
export const convertCentToDolar = (value: number): string => {
  return (value / 100).toFixed(2);
};

/**
 * Convert a dolar value to a cent value.
 */
export const convertDolarToCent = (value: number): number => {
  return Number((value * 100).toFixed(2));
};
