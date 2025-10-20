import { Separator } from "@radix-ui/react-separator";
import HorCard from "./home/HorCard";
import RightCard from "./home/RightCard";
import VerCard from "./home/VerCard";

const Group3Right = () => {
  return (
    <div>
      <div>
        <HorCard />
        <Separator orientation="horizontal" />
        <RightCard />
      </div>
      <Separator orientation="vertical" />
      <VerCard />
    </div>
  );
};

export default Group3Right;
