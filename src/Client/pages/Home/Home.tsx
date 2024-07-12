/* Layouts */
import { CardGroupLayout } from "../../layouts";

/* Components */
import { PageTitle } from "../../common";
import { CategoryList } from "../../components/Home";

/* Module: Hooks */
import { useCategories } from "../../../Admin/hooks";

import {
  Button,
  Card,
  Image,
  Divider,
  Grid,
  Header,
  List,
  Segment,
  Container,
} from "semantic-ui-react";
// Import css files

// import "slick-carousel/slick/slick-theme.css";

import "./Home.scss";
import { useState } from "react";

const recentProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "http://127.0.0.1:8000/uploads/products/20240523005409_1jLu.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    image: "http://127.0.0.1:8000/uploads/products/20240523005409_1jLu.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    image: "http://127.0.0.1:8000/uploads/products/20240523005409_1jLu.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    image: "http://127.0.0.1:8000/uploads/products/20240523005409_1jLu.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    image: "http://127.0.0.1:8000/uploads/products/20240523005409_1jLu.jpg",
  },
];
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
  "http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg",
  "http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg",
  "http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg",
  "http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg",
  "http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg",
];

const CustomCarousel = () => {
  return (
    <section className="d-flex justify-content-evenly align-items-center">
      <h1>Our Lastest Products</h1>
      <div style={{ width: "40%" }}>
        {" "}
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          //
        >
          {images.map((src, index) => (
            <div key={index}>
              <div>
                <Image
                  className="m-0 "
                  size="medium"
                  rounded
                  src={src}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export const Home = () => {
  const { isLoading, data } = useCategories("actives", "client");

  return (
    <>
      {/* <PageTitle title="Menu" /> */}
      {/* https://medium.com/@isabellepino/package-for-react-carousel-31aac8b1f090 */}
      <CustomCarousel />

      <section>
        <Card fluid className="my-5 card-layout">
          <Card.Content className="p-0">
            <Image
              floated="left"
              className="m-0 "
              // style={{ width: "100%" }}
              size="medium"
              src="http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg"
            />
            <Card.Content className="text-center">
              <section className="p-5 mt-5">
                <div>
                  <h1>Explore our complete product range</h1>
                  <span>
                    Discover a variety of products across all categories. Click
                    below to view our <br /> full selection and find exactly
                    what you need.
                  </span>
                </div>

                <Button
                  basic
                  color="black"
                  className="mt-5"
                  size="medium"
                  circular
                >
                  Explore
                </Button>
              </section>
            </Card.Content>
          </Card.Content>
        </Card>
      </section>
      <PageTitle title="Categories" />
      <CardGroupLayout>
        <CategoryList isLoading={isLoading} data={data} />
      </CardGroupLayout>
    </>
  );
};
