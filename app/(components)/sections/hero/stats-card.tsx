"use client";

import { fadeInUp } from "@/animations/headline";
import { useEffect, useRef } from "react";

interface StatsCardProps {
  index: number;
  item: any;
}
const StatsCard = ({ index, item }: StatsCardProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      fadeInUp(ref.current, false, index * 0.2 + 1.05);
    }
  });
  return (
    <div key={index} ref={ref} className="flex gap-3 items-center">
      {item.icon}
      <div className="flex flex-col text-white">
        <span className="font-semibold text-xl">{item.value}</span>
        <span>{item.label}</span>
      </div>
    </div>
  );
};

export default StatsCard;
