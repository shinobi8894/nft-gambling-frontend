import { fadeInUp } from "@/animations/headline";
import Button from "@/components/basic/button";
import { useEffect, useRef } from "react";

interface LiveBettingInfoProps {
  title: string;
  description: string;
}

const LiveBettingInfo: React.FC<LiveBettingInfoProps> = ({
  title,
  description,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current;

    if (element) {
      fadeInUp(element, true);
    }
  }, []);

  return (
    <div
      ref={contentRef}
      className="relative flex flex-col items-center md:items-start mb-10 max-w-[520px]"
    >
      <h1 className="z-10 text-white font-bold mb-5 text-3xl text-center md:text-start lg:text-6xl md:text-5xl sm:text-3xl">
        {title}
      </h1>
      <p className="z-10 text-white mb-5 text-center md:text-start">
        {description}
      </p>
      <Button className="z-10">Connect Wallet</Button>
      <div className="absolute right-10 w-full max-w-[250px] h-full max-h-[250px] blur-2xl opacity-30 rounded-full z-0 bg-primary" />
    </div>
  );
};

export default LiveBettingInfo;
