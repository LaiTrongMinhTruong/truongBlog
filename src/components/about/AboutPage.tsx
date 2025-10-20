import { Separator } from "@/components/ui/separator";
import about_pic03 from "../../assets/meo_ngoi_code.jpg";
import Reveal from "../Reveal";
import ConcludeAboutCard from "./ConcluAboutCard";
import DetailsAboutCard from "./DetailsAboutCard";
import { Link, useParams } from "react-router";

const AboutPage = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="pb-20">
      <Reveal>
        <DetailsAboutCard />
      </Reveal>
      <Separator
        orientation="horizontal"
        className="h-[1px] w-full bg-[color:var(--border)] my-4"
      />
      <Reveal>
        <ConcludeAboutCard />
      </Reveal>
      <Reveal>
        <Separator
          orientation="horizontal"
          className="h-[1px] w-full bg-[color:var(--border)] my-4"
        />
      </Reveal>
      <Reveal>
        <div className="flex flex-row justify-between items-stretch gap-8">
          <div className="flex flex-col gap-8 items-stretch basis-2/3">
            <h3 className="lowercase text-2xl font-bold">
              tạo nên những góc nhỏ trên internet
            </h3>
            <p className="text-sm font-light text-justify lowercase">
              tớ thích gọi những trang web mình làm là “những góc nhỏ dễ thương
              trên internet” — nơi người ta có thể ghé qua, thở chậm lại và thấy
              một chút bình yên. tớ có thể làm những website như blog này, hoặc
              những web bán hàng, portfolio, hay bất kỳ ý tưởng nào mang dấu ấn
              riêng của các cậu. nếu các cậu muốn cùng tớ tạo nên một góc nhỏ
              cho riêng mình, hãy nhấn vào <Link to={`/${lang}/contact`} className="font-bold underline">đây</Link> để liên hệ nhé — tớ rất vui
              được lắng nghe.
            </p>
          </div>
          <div className="w-full basis-1/3">
            <img src={about_pic03} alt="" className="w-full" />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutPage;
