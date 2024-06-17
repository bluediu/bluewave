/* Layouts */
import { ClientLayout } from "../Client/layouts";

/* Pages */
import { Home, ProductsClient, ProductClientDetail } from "../Client/pages";

/* Interfaces */
import { IRoute } from "../interfaces";

/* Constants */
import { clientPath } from "../Client/constants";

const routesClient: IRoute[] = [
  {
    path: clientPath.CLIENT,
    layout: ClientLayout,
    component: Home,
  },
  {
    path: clientPath.PRODUCTS,
    layout: ClientLayout,
    component: ProductsClient,
  },
  {
    path: clientPath.PRODUCT_DETAIL,
    layout: ClientLayout,
    component: ProductClientDetail,
  },
];

export default routesClient;
