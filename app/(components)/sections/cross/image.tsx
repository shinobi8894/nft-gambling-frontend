"use client";

import { scaleIn } from "@/animations/headline";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CrossSectionImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      scaleIn(imageRef.current, true);
    }
  }, []);

  return (
    <div ref={imageRef} className="relative">
      <div className="absolute hidden md:flex left-0 w-full h-full max-w-[200px] bg-gradient-to-r from-[#111318] to-[rgba(17, 19, 24, 0)]" />
      <div className="absolute flex md:hidden top-0 w-full h-full max-h-[100px] bg-gradient-to-b from-[#111318] to-[rgba(17, 19, 24, 0)]" />
      <Image
        src={"https://i.postimg.cc/7YT4S1LB/Rectangle-59.png"}
        width={800}
        height={650}
        alt="casino"
      />
    </div>
  );
};

export default CrossSectionImage;
