import type { PropsWithChildren } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel(props: PropsWithChildren) {
  return (
    <div className="carousel carousel-center w-full">
      <CarouselItem
        imageUrl=""
        nextImageId="image-2"
        prevImageId="image-3"
      />
      <CarouselItem
        imageUrl=""
        nextImageId="image-3"
        prevImageId="image-1"
      />
      <CarouselItem
        imageUrl=""
        nextImageId="image-1"
        prevImageId="image-2"
      />
    </div>
  );
}
