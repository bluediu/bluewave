import { useContext } from "react";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { JwtPayload, jwtDecode } from "jwt-decode";

import { AuthContext } from "../../context";
import { adminActions } from "../../services";
import { TOKEN } from "../../constants";

type TJwtPayload = JwtPayload & { user_id: number };

export const useUserMutation = () => {
  const { handleAuthUser } = useContext(AuthContext);

  const loginMutation = useMutation({
    mutationKey: ["authLogin"],
    mutationFn: adminActions.authLogin,
    onSuccess: (data) => {
      // Save user token on login.
      localStorage.setItem(TOKEN, data.access);

      // Decode token a meta data.
      const token: string = localStorage.getItem(TOKEN)!;
      const decodedToken: TJwtPayload = jwtDecode(token);

      // Save user auth info in context API.
      handleAuthUser({ userAuthId: decodedToken.user_id });

      // Show authentication message.
      toast.success("Login successful.");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        error.request.status === 401 &&
          toast.error(error.response?.data.errors.detail);
      }
    },
  });

  return { loginMutation };
};
