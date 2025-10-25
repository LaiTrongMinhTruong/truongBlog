import { useParams } from "react-router";
import picture from "../../assets/dieu_nho_be.jpg";
const RightCard = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="flex flex-col lg:flex-row items-stretch my-2">
      <div className="basis-1/2">
        <p className="text-xs sm:text-sm font-light text-justify">
          {lang === "vn"
            ? "mỗi buổi sáng, tớ bắt đầu bằng những điều nhỏ bé, tập thể dục, phơi nắng, chăm cây. sống chậm lại, cảm nhận nhiều hơn, đôi khi cậu sẽ thấy hạnh phúc ở đâu đó. ta không cần tìm bình yên ở nơi xa, cả bầu trời có khi cũng chỉ ở trong những điều nhỏ bé."
            : "Every morning, I start with small things: exercise, sunbathing, and taking care of plants. Slow down, feel more, and sometimes you will find happiness somewhere. We don't need to find peace far away, the whole sky can sometimes be found in small things."}
        </p>
      </div>
      <div className="lg:flex flex-col items-center basis-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0 hidden">
        <div>
          <img src={picture} alt="" className="w-full h-auto" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold lowercase text-center">
          {lang === "vn" ? "điều nhỏ bé" : "little things"}
        </h4>
      </div>
    </div>
  );
};

export default RightCard;
