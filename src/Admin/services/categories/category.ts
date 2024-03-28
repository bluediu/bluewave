/* api*/
import { api } from "../../../api";

/* interfaces */
import { ICategory, ICategoryUpdate, ICategoryCreate } from "../../interfaces";

/* types */
import { TFilter } from "../../types";

/* utils */
import { fn } from "../../utils";

const CATEGORIES = "/products/category";

export const getCategory = async (id: number): Promise<ICategory> => {
  const { data } = await api.get<ICategory>(
    `${CATEGORIES}/${id}/get/`,
    fn.getSessionToken(),
  );
  return data;
};

export const listCategories = async (
  filterBy: TFilter,
): Promise<ICategory[]> => {
  const { data } = await api.get<ICategory[]>(
    `${CATEGORIES}/list/?filter_by=${filterBy}`,
    fn.getSessionToken(),
  );

  return data;
};

export const createCategory = async (
  category: ICategoryCreate,
): Promise<undefined> => {
  const formData = fn.createFormData(category);

  await api.post<undefined>(
    `${CATEGORIES}/create/`,
    formData,
    fn.getSessionToken(),
  );
};

export const updateUser = async (props: {
  id: number;
  category: ICategoryUpdate;
}): Promise<undefined> => {
  const { id, category } = props;
  const formData = fn.createFormData(category);

  await api.put<undefined>(
    `${CATEGORIES}/${id}/update/`,
    formData,
    fn.getSessionToken(),
  );
};
