import { Separator } from "@radix-ui/react-separator";
import DetailsAboutCard from "./DetailsAboutCard";
import ConcludeAboutCard from "./ConcluAboutCard";


const AboutPage = () => {
  return (
    <div className="pb-20">
      <DetailsAboutCard />
      <Separator orientation="horizontal" className="h-[1px] w-full bg-red-950 my-4"/>
      <ConcludeAboutCard />
    </div>
  );
};

export default AboutPage;
