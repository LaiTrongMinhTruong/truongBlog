import picture from "../../assets/hoa_sen.jpg";
const VerCard = () => {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <h4 className="text-xl font-bold lowercase text-center">hồi sinh</h4>
      <img src={picture} alt="" />
      <p className="block text-sm font-light text-justify">
        Tôi đã từng nghĩ sự sống chỉ là nhịp tim còn đập. Nhưng sau một lần đi qua vực sâu, tôi nhận ra: sống là khi ta cảm nhận được từng ánh sáng nhỏ len qua kẽ lá, từng người vẫn ở lại bên ta dù chẳng hứa hẹn gì. Sự hồi sinh không đến từ phép màu — nó đến từ lòng can đảm muốn tiếp tục.
      </p>
    </div>
  );
};

export default VerCard;
