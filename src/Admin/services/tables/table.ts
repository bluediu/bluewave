/* api*/
import { api } from "@/api";

/* interfaces */
import {
  ITable,
  ITableOrderStatus,
  ITableCreate,
  ITableUpdate,
} from "@/Admin/interfaces";

/* types */
import { TFilter } from "@/Admin/types";

/* utils */
import { fn } from "@/utils";

const TABLES = "/tables/table";

export const getTable = async (id: number): Promise<ITable> => {
  const { data } = await api.get<ITable>(
    `${TABLES}/${id}/get/`,
    fn.getSessionToken(),
  );
  return data;
};

export const listTables = async (filterBy: TFilter): Promise<ITable[]> => {
  const params = fn.generateUrlParams({ filter_by: filterBy });

  const { data } = await api.get<ITable[]>(
    `${TABLES}/list/${params}`,
    fn.getSessionToken(),
  );

  return data;
};

export const listTableOrderStatuses = async (): Promise<
  ITableOrderStatus[]
> => {
  const { data } = await api.get<ITableOrderStatus[]>(
    `${TABLES}/list/order_statuses/`,
    fn.getSessionToken(),
  );

  return data;
};

export const createTable = async (
  category: ITableCreate,
): Promise<undefined> => {
  await api.post<undefined>(
    `${TABLES}/create/`,
    category,
    fn.getSessionToken(),
  );
};

export const updateTable = async (props: {
  id: number;
  table: ITableUpdate;
}): Promise<undefined> => {
  const { id, table } = props;

  await api.put<undefined>(
    `${TABLES}/${id}/update/`,
    table,
    fn.getSessionToken(),
  );
};
