/* Layouts */
import { CardGroupLayout } from "@/Client/layouts";

/* Components */
import { Divider } from "semantic-ui-react";

import { PageTitle } from "@/Client/common";
import { CategoryList, AllProducts, Carousel } from "@/Client/components/Home";

/* Module: Hooks */
import { useCategories } from "@/Admin/hooks";

export const Home = () => {
  const { isLoading, data } = useCategories("actives", "client");

  return (
    <>
      <Carousel />
      <PageTitle title="Categories" />
      <CardGroupLayout>
        <CategoryList isLoading={isLoading} data={data} />
      </CardGroupLayout>
      <Divider />
      <AllProducts />
    </>
  );
};
