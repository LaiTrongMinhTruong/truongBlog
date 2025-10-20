import { Separator } from "@radix-ui/react-separator";
import pictureCenter from "../../assets/center_pic.jpg";

const CenterCard = () => {
  return (
    <>
      <div className="flex flex-row  items-stretch gap-4 my-2">
        <div className="flex-1">
          <p className="text-sm font-light text-justify">
            tớ hay nghĩ những điều mình trải qua chỉ nên giữ cho riêng mình, vì ai cũng bận rộn với cuộc sống riêng. nhưng tớ nhận ra, đôi khi chỉ cần một câu chuyện thật lòng cũng có thể chạm đến ai đó đang lặng lẽ chịu đựng. blog này là nơi tớ viết cho những ai từng yếu đuối, từng đứng giữa ranh giới của sợ hãi và hy vọng.
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
            tớ biết mỗi người đều có hành trình chữa lành riêng. tớ không chắc con đường của mình đã đúng, nhưng tớ tin rằng chỉ cần tiếp tục bước, ánh sáng sẽ xuất hiện ở cuối con dốc. nếu cậu đọc đến đây, cảm ơn vì đã cùng đi và dõi theo tớ một đoạn nhỏ trên hành trình đó.
          </p>
        </div>
      </div>
      <Separator orientation="horizontal" />
    </>
  );
};

export default CenterCard;
