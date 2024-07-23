import Image from "next/image";
import Marquee from "react-fast-marquee";

const coinImages = [
  {
    src: "https://i.postimg.cc/g2RxCHj5/Ellipse-6.png",
    alt: "coin",
  },
  {
    src: "https://i.postimg.cc/g2RxCHj5/Ellipse-6.png",
    alt: "coin",
  },
  {
    src: "https://i.postimg.cc/g2RxCHj5/Ellipse-6.png",
    alt: "coin",
  },
  {
    src: "https://i.postimg.cc/Gmkp73Sn/Ellipse-9.png",
    alt: "coin",
  },
  {
    src: "https://i.postimg.cc/vm2D9qN4/Ellipse-10.png",
    alt: "coin",
  },
  {
    src: "https://i.postimg.cc/D0PTQmwx/Ellipse-11.png",
    alt: "coin",
  },
  {
    src: "https://i.postimg.cc/Hs3mVJKx/Ellipse-17.png",
    alt: "coin",
  },
];

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
