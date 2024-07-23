import { fadeInUp } from "@/animations/headline";
import Eth from "@/components/basic/icons/eth";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface CasinoCardProps {
  name: string;
  image: string;
  betVolume: string;
  games: number;
  members: number;
}

const CasinoCard: React.FC<CasinoCardProps> = ({
  name,
  image,
  betVolume,
  games,
  members,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;

    if (element) {
      fadeInUp(element, true);
    }
  }, []);

  return (
    <div ref={cardRef}>
      <Image
        src={image}
        alt="casino"
        width={300}
        height={300}
        className="w-full"
      />
      <div className="text-white p-3 bg-card rounded-b-xl">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="text-placeHolder mb-2">Bet Volume</div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Eth />
            <h3>{betVolume}</h3>
          </div>
          <span>{games} Games</span>
        </div>
        <div>
          <span className="text-placeHolder">{members} Members</span>
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;