import { Separator } from "@radix-ui/react-separator";
import pictureCenter from "../assets/center_pic.jpg";

const CenterCard = () => {
  return (
    <>
      <div className="flex flex-row  items-stretch gap-4 my-2">
        <div className="flex-1">
          <p className="text-sm font-light text-justify">
            Tôi từng nghĩ những điều mình trải qua chỉ nên giữ cho riêng mình. Nhưng rồi tôi nhận ra, đôi khi chỉ cần một câu chuyện thật lòng cũng có thể chạm đến ai đó đang lặng lẽ chịu đựng. Blog này là nơi tôi viết cho những ai từng yếu đuối, từng đứng giữa ranh giới của sợ hãi và hy vọng.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={pictureCenter}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:block hidden flex-1">
          <p className="text-sm font-light text-justify">
            Mỗi người đều có hành trình chữa lành riêng. Tôi không chắc con đường của mình đã đúng, nhưng tôi tin rằng chỉ cần tiếp tục bước, ánh sáng sẽ xuất hiện ở cuối con dốc. Nếu anh/chị đọc đến đây, cảm ơn vì đã cùng tôi đi một đoạn nhỏ trên hành trình đó.
          </p>
        </div>
      </div>
      <Separator orientation="horizontal" />
    </>
  );
};

export default CenterCard;
