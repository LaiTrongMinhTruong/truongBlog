import { Separator } from "@radix-ui/react-separator";
import HorCard from "./HorCard";
import RightCard from "./RightCard";
import VerCard from "./VerCard";

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
