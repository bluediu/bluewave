/* Layouts */
import { AdminLayout } from "../Admin/layouts";

/* Pages */
import {
  HomeAdmin,
  UserAdmin,
  UserDetail,
  CategoryAdmin,
  CategoryDetail,
  ProductAdmin,
  ProductDetail,
} from "../Admin/pages";

/* Interfaces */
import { IRoute } from "../interfaces";

/* Constants */
import { adminPath } from "../Admin/constants";

const routesAdmin: IRoute[] = [
  { path: adminPath.ADMIN, layout: AdminLayout, component: HomeAdmin },
  { path: adminPath.USERS, layout: AdminLayout, component: UserAdmin },
  {
    path: `${adminPath.USER_DETAIL}/:id`,
    layout: AdminLayout,
    component: UserDetail,
  },
  {
    path: adminPath.CATEGORIES,
    layout: AdminLayout,
    component: CategoryAdmin,
  },
  {
    path: `${adminPath.CATEGORY_DETAIL}/:id`,
    layout: AdminLayout,
    component: CategoryDetail,
  },
  {
    path: adminPath.PRODUCTS,
    layout: AdminLayout,
    component: ProductAdmin,
  },
  {
    path: `${adminPath.PRODUCT_DETAIL}/:id`,
    layout: AdminLayout,
    component: ProductDetail,
  },
];

export default routesAdmin;
