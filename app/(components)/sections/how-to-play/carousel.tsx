import React from "react";
import { images } from "@/data";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="max-w-[300px] lg-mid:max-w-[560px]" ref={ref}>
      <Swiper
        modules={[Navigation]}
        loop
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        centeredSlides={true}
        spaceBetween={15}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="max-w-[560px] w-full h-auto">
            <Image
              src={src}
              width={560}
              height={520}
              alt={`gamblify-${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

CarouselSection.displayName = "CarouselSection";

export default CarouselSection;