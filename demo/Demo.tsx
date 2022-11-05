import React from "react";
import { Carousel, CarouselItem } from "../src/ts";

const Demo = () => {
  return (
    <Carousel
      numberOfItemsShown={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      carouselItemHeight={400}
      gap={20}
    >
      <CarouselItem onClick={() => null} />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>
  );
};

export default Demo;
