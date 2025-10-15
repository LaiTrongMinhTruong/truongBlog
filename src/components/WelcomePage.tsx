import { Separator } from "@/components/ui/separator";
import CenterCard from "./CenterCard";
import Group3Left from "./Group3Left";
import Reveal from "./Reveal";

const WelcomePage = () => {
  return (
    <div className="pb-20">
      <Reveal>
        <CenterCard />
      </Reveal>
      <Separator orientation="horizontal" className="my-4 bg-[color:var(--border)] h-[1px]" />
      <Reveal>
        <Group3Left />
      </Reveal>
    </div>
  );
};

export default WelcomePage;
