import type { PropsWithChildren } from "react";

export default function CarouselItem(
  props: PropsWithChildren<{
    imageUrl: string;
    nextImageId: string;
    prevImageId: string;
  }>
) {
  return (
    <div
      id="image-1"
      className="carousel-item w-full"
    >
      <img
        className="aspect-video w-full h-auto bg-gradient-to-br from-green-50 via-yellow-200 to-green-300"
        src=""
        alt="image-1"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a
          href={`#${props.prevImageId}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#${props.nextImageId}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
}
