import about_pic03 from "../assets/about_pic03.png";
const ConcludeAboutCard = () => {
  return (
    <div className="flex flex-row justify-between items-stretch gap-4">
      <div className="w-full basis-1/3">
        <img src={about_pic03} alt="" className="w-full"/>
      </div>
      <div className="flex flex-col justify-between items-stretch basis-2/3">
        <h3 className="lowercase text-2xl font-bold">
          trendy today, timeless forever
        </h3>
        <p className="text-sm font-light text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          animi! Optio quisquam nihil perferendis delectus eius blanditiis
          officia, alias ipsam expedita tempora vel ex repellendus maxime
          inventore officiis sapiente quibusdam!
        </p>
      </div>
    </div>
  );
};

export default ConcludeAboutCard;
