/* Layouts */
import { AdminLayout } from "../Admin/layouts";

/* Pages */
import {
  UserAdmin,
  UserDetail,
  CategoryAdmin,
  CategoryDetail,
  ProductAdmin,
  ProductDetail,
  TableAdmin,
  TableDetail,
  DashboardAdmin,
  DashboardDetail,
  HistoryAdmin,
} from "../Admin/pages";

/* Interfaces */
import { IRoute } from "../interfaces";

/* Constants */
import { adminPath } from "../Admin/constants";

const routesAdmin: IRoute[] = [
  { path: adminPath.ADMIN, layout: AdminLayout, component: DashboardAdmin },
  {
    path: adminPath.ADMIN_TABLE_DETAIL,
    layout: AdminLayout,
    component: DashboardDetail,
  },
  { path: adminPath.USERS, layout: AdminLayout, component: UserAdmin },
  {
    path: adminPath.USER_DETAIL,
    layout: AdminLayout,
    component: UserDetail,
  },
  {
    path: adminPath.CATEGORIES,
    layout: AdminLayout,
    component: CategoryAdmin,
  },
  {
    path: adminPath.CATEGORY_DETAIL,
    layout: AdminLayout,
    component: CategoryDetail,
  },
  {
    path: adminPath.PRODUCTS,
    layout: AdminLayout,
    component: ProductAdmin,
  },
  {
    path: adminPath.PRODUCT_DETAIL,
    layout: AdminLayout,
    component: ProductDetail,
  },
  {
    path: adminPath.TABLES,
    layout: AdminLayout,
    component: TableAdmin,
  },
  {
    path: adminPath.TABLE_DETAIL,
    layout: AdminLayout,
    component: TableDetail,
  },
  {
    path: adminPath.HISTORY,
    layout: AdminLayout,
    component: HistoryAdmin,
  },
];

export default routesAdmin;
