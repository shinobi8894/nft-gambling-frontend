"use client";

import { scaleIn } from "@/animations/headline";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ImageGallery = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      scaleIn(imageRef.current, true);
    }
  }, []);
  return (
    <div
      ref={imageRef}
      className="flex gap-2 min-w-[0px] order-2 md:order-1 lg:min-w-[580px]"
    >
      <div className="flex">
        <Image
          src="https://i.postimg.cc/PxtQRtGF/Frame-38.png"
          alt="poker"
          width={288}
          height={288}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Image
          src="https://i.postimg.cc/mZ1yppK4/coin-flip.png"
          alt="coin flip"
          width={288}
          height={288}
        />
        <Image
          src="https://i.postimg.cc/B62JY1b2/coin-flip.png"
          alt="coin flip"
          width={288}
          height={288}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
