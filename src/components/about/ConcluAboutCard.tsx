import { useParams } from "react-router";
import about_pic03 from "../../assets/tuonglai.jpg";
const ConcludeAboutCard = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="flex flex-row justify-between items-stretch gap-4">
      <div className="w-full basis-1/2">
        <img src={about_pic03} alt="" className="w-full" />
      </div>
      <div className="flex flex-col justify-start items-stretch basis-1/2">
        <h3 className="lowercase text-2xl font-bold">
          {lang === "vn"
            ? "tớ đi chậm, nên sẽ cố gắng đi xa"
            : "I go slow, so I will try to go far"}
        </h3>
        <p className="text-sm font-light text-justify lowercase">
          {lang === "vn"
            ? "tớ không hoàn hảo, cũng không thể tìm sự hoàn hảo, chỉ mong mỗi ngày mình hiểu đời hơn một chút, hiểu người hơn một chút. Nếu blog này có thể khiến ai đó mỉm cười, bình tâm lại, hay cảm thấy được đồng cảm, thì với tớ, đó đã là một niềm vui trọn vẹn."
            : "I am not perfect, nor can I seek perfection, I just hope that every day I understand life a little more, understand people a little more. If this blog can make someone smile, calm down, or feel sympathy, then for me, that is a complete joy."}
        </p>
      </div>
    </div>
  );
};

export default ConcludeAboutCard;
