import { stats } from "@/data";
import StatsCard from "./stats-card";

const StatsSection = () => {
    return (
      <div className="grid grid-cols-2 gap-5 max-w-[30rem]">
        {stats.map((stat, index) => (
          <StatsCard item={stat} key={index} index={index} />
        ))}
      </div>
    );
  };
  
  
export default StatsSection;  