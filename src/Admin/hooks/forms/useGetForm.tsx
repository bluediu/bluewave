/* Hooks*/
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IForm } from "@/Admin/interfaces";

/* Constants */
import { STALE_TIME } from "@/constants";

interface IProps {
  cache: string;
  getForm: () => Promise<IForm>;
}

export const useGetForm = (props: IProps) => {
  const { cache, getForm } = props;

  const form = useQuery({
    queryKey: [`get${cache}Form`],
    queryFn: getForm,
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return form;
};
