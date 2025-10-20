import { Separator } from "@/components/ui/separator";
import HorCard from "./HorCard";
import RightCard from "./RightCard";
import VerCard from "./VerCard";

const Group3Left = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex-1">
        <VerCard />
      </div>
      <Separator
        orientation="vertical"
        className="my-4 bg-[color:var(--border)] w-[1px]"
      />
      <div className="flex flex-col justify-around items-stretch flex-1">
        <RightCard />
        <Separator
          orientation="horizontal"
          className="bg-[color:var(--border)] h-[1px]"
        />
        <HorCard />
      </div>
    </div>
  );
};

export default Group3Left;
