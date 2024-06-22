/* Layouts */
import { CardGroupLayout } from "../../layouts";

/* Components */
import { PageTitle } from "../../common";
import { CategoryList } from "../../components/Home";

/* Module: Hooks */
import { useCategories } from "../../../Admin/hooks";

export const Home = () => {
  const { isLoading, data } = useCategories("actives", "client");

  return (
    <>
      <PageTitle title="Categories" />
      <CardGroupLayout>
        <CategoryList isLoading={isLoading} data={data} />
      </CardGroupLayout>
    </>
  );
};
