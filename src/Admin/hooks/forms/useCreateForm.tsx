/* Hooks*/
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IForm } from "../../interfaces";

interface IProps {
  cache: string;
  getCreateForm: () => Promise<IForm>;
}

export const useCreateForm = (props: IProps) => {
  const { cache, getCreateForm } = props;

  const createForm = useQuery({
    queryKey: [`create${cache}Form`],
    queryFn: getCreateForm,
    refetchOnWindowFocus: false,
  });

  return createForm;
};
