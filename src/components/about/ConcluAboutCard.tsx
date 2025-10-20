import about_pic03 from "../../assets/tuonglai.jpg";
const ConcludeAboutCard = () => {
  return (
    <div className="flex flex-row justify-between items-stretch gap-4">
      <div className="w-full basis-1/2">
        <img src={about_pic03} alt="" className="w-full"/>
      </div>
      <div className="flex flex-col justify-start items-stretch basis-1/2">
        <h3 className="lowercase text-2xl font-bold">
          tôi chọn đi chậm, nhưng đi xa
        </h3>
        <p className="text-sm font-light text-justify lowercase">
          Tôi không tìm sự hoàn hảo, chỉ mong mỗi ngày mình hiểu đời hơn một chút, hiểu người hơn một chút. Nếu blog này có thể khiến ai đó mỉm cười, bình tâm lại, hay cảm thấy được đồng cảm — thì với tôi, đó đã là một niềm vui trọn vẹn.
        </p>
      </div>
    </div>
  );
};

export default ConcludeAboutCard;
