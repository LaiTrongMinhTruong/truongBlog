import { Separator } from "@radix-ui/react-separator";
import HorCard from "./HorCard";
import RightCard from "./RightCard";
import VerCard from "./VerCard";

const Group3Left = () => {
  return (
    <div className="flex flex-row gap-4">
      <VerCard />
      <Separator orientation="vertical" className="my-4 bg-red-950 w-[1px]"/>
      <div className="flex flex-col justify-around items-stretch">
        <RightCard />
        <Separator orientation="horizontal" className="my-4 bg-red-950 h-[1px]"/>
        <HorCard />
      </div>
    </div>
  );
};

export default Group3Left;
