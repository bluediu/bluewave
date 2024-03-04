import { HomeAdmin } from "../Admin/pages";
import { AdminLayout } from "../Admin/layouts";

import { IRoute } from "../interfaces";
import { adminPath } from "../Admin/constants";
import { UserAdmin } from "../Admin/pages/UserAdmin";
import { UserDetail } from "../Admin/components/Users";

const routesAdmin: IRoute[] = [
  { path: adminPath.ADMIN, layout: AdminLayout, component: HomeAdmin },
  { path: adminPath.USERS, layout: AdminLayout, component: UserAdmin },
  {
    path: `${adminPath.USER_DETAIL}/:id`,
    layout: AdminLayout,
    component: UserDetail,
  },
];

export default routesAdmin;
