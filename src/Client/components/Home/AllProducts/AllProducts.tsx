/* Components */
import { Link } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react";

/* Hooks */
import { useDeviceType } from "@/hooks";

/* Constants */
import { ALL_PRODUCTS } from "@/Client/constants";

/* Statics */
import ALL from "/img/all-product-img.jpg";

export const AllProducts = () => {
  const isTabletOrMobile = useDeviceType();

  return (
    <section>
      <Card fluid className="my-5 card-layout">
        <Card.Content className="p-0">
          <Image
            floated="left"
            className={`m-0 ${isTabletOrMobile && "width-100"}`}
            size="medium"
            src={ALL}
          />
          <Card.Content className="text-center">
            <section className="p-5">
              <div>
                <h2>Explore our complete product range</h2>
                <span>
                  Discover a variety of products across all categories. Click
                  below to view our
                  {!isTabletOrMobile && <br />}
                  full selection and find exactly what you need.
                </span>
              </div>

              <Button
                as={Link}
                to={ALL_PRODUCTS}
                circular
                size="tiny"
                className="category-card__button mt-5"
              >
                Explore
                <Icon name="angle right" />
              </Button>
            </section>
          </Card.Content>
        </Card.Content>
      </Card>
    </section>
  );
};
