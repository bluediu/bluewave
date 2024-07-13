/* Layouts */
import { CardGroupLayout } from "../../layouts";

/* Components */
import { PageTitle } from "../../common";
import { Divider } from "semantic-ui-react";
import { CategoryList, AllProductsCard, Carousel } from "../../components/Home";

/* Module: Hooks */
import { useCategories } from "../../../Admin/hooks";

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
      <AllProductsCard />
    </>
  );
};
