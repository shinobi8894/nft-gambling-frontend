import { logos } from "@/data";
import Image from "next/image";

const BlockchainLogos = () => {
  return (
    <div className="flex flex-row justify-between md:flex-col">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          width={60}
          height={60}
          alt={logo.alt}
          className="min-w-[60px]"
        />
      ))}
    </div>
  );
};

export default BlockchainLogos;
