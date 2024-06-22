/* Components */
import { CategoryCard } from "../CategoryCard";
import { ItemList } from "../../../../shared";

/* Module: Interfaces */
import { ICategory } from "../../../../Admin/interfaces";

interface IProps {
  isLoading: boolean;
  data?: ICategory[];
}

export const CategoryList = (props: IProps) => {
  const { isLoading, data } = props;

  return (
    <>
      <ItemList isLoading={isLoading} loadingMsg="Loading product...">
        <>
          {data?.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </>
      </ItemList>
    </>
  );
};
