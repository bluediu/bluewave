import { useEffect } from "react";

/* Constants */
import { APP } from "../Admin/constants";

export const useDynamicPageTitle = (scope: string) => {
  useEffect(() => {
    document.title = `${APP} | ${scope}`;
  }, [scope]);
};
