import Image from "next/image";

interface StepProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  ref: any;
}

const Step: React.FC<StepProps> = ({ Icon, title, description, ref }) => (
  <div className="flex flex-col mb-5" ref={ref}>
    <div className="flex items-start gap-5 mb-5">
      <div className="min-w-[25px]">
        <Icon className="w-full h-auto" />
      </div>
      <div className="text-white">
        <h2 className="font-semibold text-base mb-2">{title}</h2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
    <Image
      src={"https://i.postimg.cc/Y9qNW5Gc/Image.png"}
      width={560}
      height={520}
      alt="gamblify"
      className="w-full h-auto"
    />
  </div>
);

export default Step;