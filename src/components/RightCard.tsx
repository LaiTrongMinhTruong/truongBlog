import picture from "../assets/dieu_nho_be.jpg";
const RightCard = () => {
  return (
    <div className="flex flex-row items-stretch my-2">
      <div className="basis-1/2">
        <p className="text-sm font-light text-justify">
          Một buổi sáng chậm lại, một tách trà ấm, vài dòng chữ đẹp, một ánh mắt hiểu mình — đôi khi hạnh phúc chỉ giản đơn như thế. Ta không cần tìm bình yên ở nơi xa, vì chính trong những điều nhỏ bé, ta đã có cả bầu trời.
        </p>
      </div>
      <div className="lg:flex flex-col items-center basis-1/2 ml-4 hidden">
        <div>
          <img src={picture} alt="" />
        </div>
        <h4 className="text-xl font-bold lowercase text-center">điều nhỏ bé</h4>
      </div>
    </div>
  );
};

export default RightCard;