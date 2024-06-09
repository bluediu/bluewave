import { clientPath } from "../Client/constants";
import { ClientLayout } from "../Client/layouts";
import { Home } from "../Client/pages/Home";
import { IRoute } from "../interfaces";

const routesClient: IRoute[] = [
  {
    path: clientPath.CLIENT,
    layout: ClientLayout,
    component: Home,
  },
];

export default routesClient;
