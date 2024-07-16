/* Components */
import { Latest } from "./Latest";
import { Image, Loader } from "semantic-ui-react";
import { Fade, JackInTheBox } from "react-awesome-reveal";

/* Hooks */
import { useDeviceType } from "../../../../hooks";
import { useLatestProducts } from "../../../hooks";

/* Statics */
import BLOB from "/img/blob.svg";
import RECOMMENDED from "/img/recommended.svg";

import "./Carousel.scss";

export const Carousel = () => {
  const isTabletOrMobile = useDeviceType();
  const { data, isLoading } = useLatestProducts();

  const title = "Our Latest Products";

  return (
    <section className={!isTabletOrMobile ? "carousel" : ""}>
      {!isTabletOrMobile ? (
        <article className="blob">
          <Image src={BLOB} className="blob__bg-image" />
          <div className="blob__info">
            <JackInTheBox>
              <Image src={RECOMMENDED} />
            </JackInTheBox>
            <h1 className="blob__text carousel__text">{title}</h1>
          </div>
        </article>
      ) : (
        <h1 className="carousel__text text-center">{title}</h1>
      )}

      <article
        className={`carousel__shadow ${isTabletOrMobile ? "w-100" : "carousel-desktop-width"}`}
      >
        {isLoading ? (
          <Loader className="h-100" size="big" active inline="centered" />
        ) : (
          <Fade>
            <Latest products={data!} />
          </Fade>
        )}
      </article>
    </section>
  );
};
