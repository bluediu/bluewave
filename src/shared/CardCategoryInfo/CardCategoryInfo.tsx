/* Components */
import { CardMeta, Label } from "semantic-ui-react";

export const CardCategoryInfo = ({ category }: { category: string }) => {
  return (
    <CardMeta>
      <Label horizontal>Category: {category}</Label>
    </CardMeta>
  );
};
