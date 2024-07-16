/* Components that*/
import { Image } from "semantic-ui-react";
import { Carousel as RCarousel } from "react-responsive-carousel";

/* Interfaces */
import { ILatest } from "../../../interfaces";

export const Latest = ({ products }: { products: ILatest[] }) => {
  return (
    <RCarousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      {products!.map((product) => (
        <div key={product.id}>
          <Image
            className="m-0 carousel__image w-100"
            size="medium"
            rounded
            src={`${import.meta.env.VITE_API_URL}/${product.image}`}
          />
        </div>
      ))}
    </RCarousel>
  );
};
