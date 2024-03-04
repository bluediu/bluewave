/* Hooks*/
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IForm } from "../../interfaces";

interface IProps {
  id: number;
  cache: string;
  getUpdateForm: (id: number) => Promise<IForm>;
}

export const useUpdateForm = (props: IProps) => {
  const { id, cache, getUpdateForm } = props;

  const updateForm = useQuery({
    queryKey: [`update${cache}Form`, id],
    queryFn: () => getUpdateForm(id),
    refetchOnWindowFocus: false,
  });

  return updateForm;
};
