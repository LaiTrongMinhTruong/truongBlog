import { Separator } from "@/components/ui/separator";
import DetailsAboutCard from "./DetailsAboutCard";
import ConcludeAboutCard from "./ConcluAboutCard";
import Reveal from "./Reveal";


const AboutPage = () => {
  return (
    <div className="pb-20">
      <Reveal>
        <DetailsAboutCard />
      </Reveal>
      <Separator orientation="horizontal" className="h-[1px] w-full bg-[color:var(--border)] my-4"/>
      <Reveal>
        <ConcludeAboutCard />
      </Reveal>
    </div>
  );
};

export default AboutPage;
