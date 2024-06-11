/* Components */
import { PageTitle } from "../../common";
import { Fade } from "react-awesome-reveal";
import { CategoryCard } from "../../components/Home";
import { CardGroup, Loader } from "semantic-ui-react";

/* Hooks */
import { useDeviceType } from "../../../hooks";
import { useCategories } from "../../../Admin/hooks";

export const Home = () => {
  const { isLoading, data } = useCategories("actives", "client");
  const isTabletOrMobile = useDeviceType();

  return (
    <>
      <PageTitle title="Categories" />
      <Fade cascade>
        <CardGroup itemsPerRow={!isTabletOrMobile ? 4 : 1}>
          {isLoading && (
            <Loader
              content="Loading categories..."
              active
              inline="centered"
              className="mt-5"
            />
          )}

          {data?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </CardGroup>
      </Fade>
    </>
  );
};
