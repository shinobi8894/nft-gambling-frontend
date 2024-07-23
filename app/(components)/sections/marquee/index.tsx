import { coinImages } from "@/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CoinImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} width={64} height={64} alt={alt} />
);

const MarqueeSection = () => {
  return (
    <section className="bg-primary pt-5 pb-5 mb-20">
      <Marquee>
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex gap-5 mr-5">
            {coinImages.map((coin) => (
              <CoinImage key={coin.src} src={coin.src} alt={coin.alt} />
            ))}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
