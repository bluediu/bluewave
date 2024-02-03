/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

export interface IRoute {
  path: string;
  layout: ComponentType<any>;
  component: ComponentType<any>;
}
