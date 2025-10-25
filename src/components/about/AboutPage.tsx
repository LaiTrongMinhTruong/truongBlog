import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "react-router";
import about_pic03 from "../../assets/meo_ngoi_code.jpg";
import Reveal from "../Reveal";
import ConcludeAboutCard from "./ConcluAboutCard";
import DetailsAboutCard from "./DetailsAboutCard";

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
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 lg:gap-8">
          <div className="flex flex-col gap-4 lg:gap-8 items-stretch basis-2/3">
            <h3 className="lowercase text-xl sm:text-2xl font-bold">
              {lang === "vn"? "tạo nên những góc nhỏ trên internet" : "Creating little corners on the internet"}
            </h3>
            <p className="text-xs sm:text-sm font-light text-justify lowercase">
              {lang === "vn"
                ? "tớ thích gọi những trang web mình làm là "những góc nhỏ dễ thương trên internet", nơi người ta có thể ghé qua, thở chậm lại và hấy một chút bình yên. tớ có thể làm những website như blog này, hoặc những web bán hàng, portfolio, hay bất kỳ ý tưởng nào mang dấu ấn riêng của các cậu. nếu các cậu muốn cùng tớ tạo nên một góc nhỏ cho riêng mình, hãy liên hệ với tớ, tớ rất vui được lắng nghe. "
                : "I like to call the websites I make "cute little corners on the internet", where people can come, slow down and find a little peace. I can make websites like this blog, or sales websites, portfolios, or any ideas that carry your own mark. If you want to create your own little corner with me, contact me, I'd love to hear. "}
              <Link to={`/${lang}/contact`} className="font-bold underline">
                {lang === "vn" ? "liên hệ ngay." : "Contact me now."}
              </Link>
            </p>
          </div>
          <div className="w-full lg:basis-1/3">
            <img src={about_pic03} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutPage;
