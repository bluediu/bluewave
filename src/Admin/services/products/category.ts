/* api*/
import { api } from "@/api";

/* interfaces */
import {
  ICategory,
  ICategoryUpdate,
  ICategoryCreate,
  ICategoryProduct,
} from "@/Admin/interfaces";

/* types */
import { TScope } from "@/types";

import { TFilter } from "@/Admin/types";

/* utils */
import { fn } from "@/utils";

const CATEGORIES = "/products/category";

export const getCategory = async (id: number): Promise<ICategory> => {
  const { data } = await api.get<ICategory>(
    `${CATEGORIES}/${id}/get/`,
    fn.getSessionToken(),
  );
  return data;
};

interface IProps {
  id: number;
  filterBy: TFilter;
  scope: TScope;
}

export const getProductsByCategory = async (
  props: IProps,
): Promise<ICategoryProduct[]> => {
  const { id, filterBy, scope = "admin" } = props;
  const params = fn.generateUrlParams({ filter_by: filterBy });

  const { data } = await api.get<ICategoryProduct[]>(
    `${CATEGORIES}/${id}/products/${params}`,
    fn.getSessionToken(scope),
  );

  return data;
};

export const listCategories = async (
  filterBy: TFilter,
  scope: TScope = "admin",
): Promise<ICategory[]> => {
  const params = fn.generateUrlParams({ filter_by: filterBy });

  const { data } = await api.get<ICategory[]>(
    `${CATEGORIES}/list/${params}`,
    fn.getSessionToken(scope),
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

export const updateCategory = async (props: {
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
