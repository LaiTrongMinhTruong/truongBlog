import picture from "../assets/di_tiep.jpg";
const HorCard = () => {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <h4 className="text-xl font-bold lowercase text-center">đi tiếp</h4>
      <img src={picture} alt="" />
      <p className="text-sm font-light text-justify">
        Mỗi người đều có những ngày muốn dừng lại. Nhưng tôi tin, nếu ta vẫn giữ trong mình một chút dịu dàng, một chút niềm tin, thì dù con đường có quanh co đến đâu, ta vẫn sẽ tìm thấy ánh sáng của chính mình.
      </p>
    </div>
  );
};

export default HorCard;
