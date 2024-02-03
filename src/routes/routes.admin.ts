import { HomeAdmin } from "../Admin/pages";
import { AdminLayout } from "../Admin/layouts";

import { IRoute } from "../interfaces";
import { adminPath } from "../Admin/constants";

const routesAdmin: IRoute[] = [
  { path: adminPath.ADMIN, layout: AdminLayout, component: HomeAdmin },
  { path: adminPath.USERS, layout: AdminLayout, component: AdminLayout },
];

export default routesAdmin;
