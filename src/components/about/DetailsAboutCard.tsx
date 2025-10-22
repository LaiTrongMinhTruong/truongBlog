import { useParams } from "react-router";
import about_pic1 from "../../assets/about_pic01.png";
import about_pic2 from "../../assets/about_pic02.png";
const DetailsAboutCard = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="flex flex-row justify-between items-stretch gap-4 ">
      <div className="flex flex-col justify-between items-stretch basis-1/3">
        <div className="object-cover mb-2 w-full">
          <img src={about_pic1} alt="" className="w-full" />
        </div>
        <h4 className="text-xl lowercase font-bold">
          {lang === "vn"
            ? "mang theo bản sắc, không phải lớp vỏ"
            : "carry identity, not shell"}
        </h4>
        <p className="text-sm font-light text-justify mt-2 lowercase">
          {lang === "vn"
            ? "tớ tin rằng mỗi người đều có câu chuyện riêng, không cần cố gắng giống ai, chỉ cần trung thực và tin tưởng vào chính mình. Với tớ, vẻ đẹp không nằm ở bề ngoài, mà ở sự chân thành và cách ta nhìn thế giới. tớ chọn cảm nhận và viết, vì đó là cách tôi đối thoại với bản thân, và cũng là cách tôi học cách yêu thương con người hơn."
            : "I believe that everyone has their own story, no need to try to be like anyone else, just be honest and trust yourself. For me, beauty is not in appearance, but in sincerity and how we see the world. I choose to feel and write, because that is how I dialogue with myself, and it is also how I learn to love people more."}
        </p>
      </div>
      <div className="flex flex-col justify-around items-stretch basis-2/3">
        <h3 className="text-2xl font-bold mb-2 lowercase">
          {lang === "vn"
            ? "viết để sống thật, không để gây ấn tượng"
            : "write to live, not to impress"}
        </h3>
        <p className="text-sm font-light text-justify lowercase">
          {lang === "vn"
            ? "tớ không lập blog này để ai đó ngưỡng mộ mình, mà để lưu lại những gì từng khiến tớ thay đổi, những khoảnh khắc nhỏ, những suy nghĩ không kịp xuất bản, và những câu chuyện có thể chạm đến người khác theo cách giản dị nhất."
            : "I didn't set up this blog for anyone to admire me, but to keep what once changed me, small moments, thoughts that couldn't be published in time, and stories that could touch others in the simplest way."}
        </p>
        <div className="object-cover flex-1 w-full mt-2">
          <img src={about_pic2} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default DetailsAboutCard;
