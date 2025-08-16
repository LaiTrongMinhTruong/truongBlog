import { Separator } from "@radix-ui/react-separator";
import CenterCard from "./CenterCard";
import Group3Left from "./Group3Left";

const WelcomePage = () => {
  return (
    <div className="pb-11">
      <CenterCard />
      <Separator orientation="horizontal" className="my-4 bg-red-950 h-[1px]" />
      <Group3Left />
      <Separator orientation="horizontal" className="my-4 bg-red-950 h-[1px]" />
    </div>
  );
};

export default WelcomePage;
