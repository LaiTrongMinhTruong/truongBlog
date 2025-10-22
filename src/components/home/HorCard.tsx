import { useParams } from "react-router";
import picture from "../../assets/di_tiep.jpg";
const HorCard = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="flex flex-col items-stretch gap-2">
      <h4 className="text-xl font-bold lowercase text-center">
        {lang === "en" ? "keep going" : "đi tiếp"}
      </h4>
      <img src={picture} alt="" />
      <p className="text-sm font-light text-justify">
        {lang === "vn"
          ? "tớ biết ai cũng đều có những ngày muốn dừng lại. Nhưng tớ tin, nếu ta vẫn giữ trong mình một chút dịu dàng, một chút niềm tin, thì dù con đường có quanh co đến đâu, ta vẫn sẽ tìm thấy động lực để đi tiếp."
          : "I know everyone has days when they want to stop. But I believe, if we still keep a little gentleness, a little faith, then no matter how winding the road is, we will still find the motivation to continue."}
      </p>
    </div>
  );
};

export default HorCard;
