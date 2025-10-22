import { Separator } from "@radix-ui/react-separator";
import { useParams } from "react-router";
import pictureCenter from "../../assets/center_pic.jpg";

const CenterCard = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <>
      <div className="flex flex-row  items-stretch gap-4 my-2">
        <div className="flex-1">
          <p className="text-sm font-light text-justify lowercase">
            {lang === "vn"
              ? "tớ hay nghĩ những điều mình trải qua chỉ nên giữ cho riêng mình, vì ai cũng bận rộn với cuộc sống riêng. nhưng tớ nhận ra, đôi khi chỉ cần một câu chuyện thật lòng cũng có thể chạm đến ai đó đang lặng lẽ chịu đựng. blog này là nơi tớ viết cho những ai từng yếu đuối, từng đứng giữa ranh giới của sợ hãi và hy vọng."
              : "i often think that the things i experience should be kept to myself, because everyone is busy with their own lives. but I realize that sometimes just a sincere story can touch someone who is silently suffering. this blog is where i write for those who have been weak, who have stood between the boundary of fear and hope."}
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
          <p className="text-sm font-light text-justify lowercase">
            {lang === "vn"
              ? "tớ biết mỗi người đều có hành trình chữa lành riêng. tớ không chắc con đường của mình đã đúng, nhưng tớ tin rằng chỉ cần tiếp tục bước, ánh sáng sẽ xuất hiện ở cuối con dốc. nếu cậu đọc đến đây, cảm ơn vì đã cùng đi và dõi theo tớ một đoạn nhỏ trên hành trình đó."
              : "i know everyone has their own healing journey. i’m not sure my path is the right one, but i believe that as long as i keep walking, there will be light at the end of the hill. if you’re reading this, thank you for coming along and following me for a little part of that journey."}
          </p>
        </div>
      </div>
      <Separator orientation="horizontal" />
    </>
  );
};

export default CenterCard;
