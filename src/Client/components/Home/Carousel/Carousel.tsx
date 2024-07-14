/* Components */
import { Image } from "semantic-ui-react";
import { Carousel as RCarousel } from "react-responsive-carousel";

/* Hooks */
import { useDeviceType } from "../../../../hooks";

/* Statics */
import BLOB from "/img/blob.svg";
import RECOMMENDED from "/img/recommended.svg";

import "./Carousel.scss";

const images = [
  "http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg",
  "http://127.0.0.1:8000//uploads/products/20240330000731_SPkT.jpg",
  "http://127.0.0.1:8000//uploads/products/20240403212816_yAP9.webp",
  "http://127.0.0.1:8000//uploads/products/20240523005409_1jLu.jpg",
  "http://127.0.0.1:8000//uploads/products/20240403212816_yAP9.webp",
];

export const Carousel = () => {
  const isTabletOrMobile = useDeviceType();

  const title = "Our Latest Products";

  return (
    <section className={!isTabletOrMobile ? "carousel" : ""}>
      {!isTabletOrMobile ? (
        <article className="blob">
          <Image src={BLOB} className="blob__bg-image" />
          <div className="blob__info">
            <Image src={RECOMMENDED} />
            <h1 className="blob__text carousel__text">{title}</h1>
          </div>
        </article>
      ) : (
        <h1 className="carousel__text text-center">{title}</h1>
      )}

      <article
        className={`carousel__shadow ${isTabletOrMobile ? "w-100" : "carousel-desktop-width"}`}
      >
        <RCarousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          {images.map((src, index) => (
            <div key={index}>
              <Image
                className="m-0 carousel__image"
                size="medium"
                rounded
                src={src}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </RCarousel>
      </article>
    </section>
  );
};
