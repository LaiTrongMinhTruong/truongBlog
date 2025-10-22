import { useParams } from "react-router";
import picture from "../../assets/hoa_sen.jpg";
const VerCard = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="flex flex-col items-stretch gap-2">
      <h4 className="text-xl font-bold lowercase text-center">life - revive</h4>
      <img src={picture} alt="" />
      <p className="block text-sm font-light text-justify">
        {lang === "vn" ? "tớ đã từng nghĩ sự sống chỉ là nhịp tim còn đập. nhưng sau nhiều lần đi viện đều đặn, tớ nhận ra: sống là khi ta cảm nhận được từng ánh sáng nhỏ len qua kẽ lá, từng người vẫn ở lại bên ta dù chẳng hứa hẹn gì. sự hồi sinh không đến từ phép màu mà nó đến từ lòng can đảm muốn tiếp tục." : "I used to think life was just a heartbeat. But after many regular hospital visits, I realized: life is when we feel each small ray of light filtering through the leaves, each person still staying by our side even though no promises are made. Revival doesn’t come from miracles, it comes from the courage to continue."}
      </p>
    </div>
  );
};

export default VerCard;
