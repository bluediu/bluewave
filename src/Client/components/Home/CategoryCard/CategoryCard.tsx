/* Layouts */
import { CardLayout } from "../../../layouts";

/* Components */
import { Link } from "react-router-dom";
import { Button, Card, Icon } from "semantic-ui-react";

/* Module: Interfaces */
import { ICategory } from "../../../../Admin/interfaces";

/* Utils */
import { generateUrl } from "../../../../utils";

/* Constants */
import { PRODUCTS } from "../../../constants/paths";

import "./CategoryCard.scss";

interface IProps {
  category: ICategory;
}

export const CategoryCard = ({ category }: IProps) => {
  return (
    <CardLayout image={category.image}>
      <Card.Content className="category-card">
        <Card.Header className="category-card__text">
          {category.name}
        </Card.Header>
        <Button
          as={Link}
          to={generateUrl(PRODUCTS, { category: category.id })}
          circular
          size="tiny"
          className="category-card__button m-0"
        >
          Go
          <Icon name="angle right" />
        </Button>
      </Card.Content>
    </CardLayout>
  );
};
