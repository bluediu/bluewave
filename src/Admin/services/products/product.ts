/* api*/
import { api } from "@/api";

/* interfaces */
import {
  IProduct,
  IProductCreate,
  IProductFilterProps,
  IProductUpdate,
} from "@/Admin/interfaces";

/* types */
import { TScope } from "@/types";

/* utils */
import { fn } from "@/utils";

const PRODUCTS = "/products/product";

export const getProduct = async (
  id: number,
  scope: TScope = "admin",
): Promise<IProduct> => {
  const { data } = await api.get<IProduct>(
    `${PRODUCTS}/${id}/get/`,
    fn.getSessionToken(scope),
  );
  return data;
};

export const listProducts = async (
  props: IProductFilterProps,
): Promise<IProduct[]> => {
  const { filterBy, category, scope = "admin" } = props;

  const params = fn.generateUrlParams({
    filter_by: filterBy,
    category,
  });

  const { data } = await api.get<IProduct[]>(
    `${PRODUCTS}/list/${params}`,
    fn.getSessionToken(scope),
  );

  return data;
};

export const createProduct = async (
  product: IProductCreate,
): Promise<undefined> => {
  product.price = fn.convertDolarToCent(product.price);
  const formData = fn.createFormData(product);

  await api.post<undefined>(
    `${PRODUCTS}/create/`,
    formData,
    fn.getSessionToken(),
  );
};

export const updateProduct = async (props: {
  id: number;
  product: IProductUpdate;
}): Promise<undefined> => {
  const { id, product } = props;
  product.price = fn.convertDolarToCent(product.price);
  const formData = fn.createFormData(product);

  await api.put<undefined>(
    `${PRODUCTS}/${id}/update/`,
    formData,
    fn.getSessionToken(),
  );
};
