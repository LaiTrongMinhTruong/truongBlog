import picture from "../assets/pic_num05.png";
const RightCard = () => {
  return (
    <div className="flex flex-row items-stretch my-2">
      <div className="basis-2/3">
        <p className="text-sm font-light text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam iure
          odio, perspiciatis deserunt ullam praesentium sed quibusdam saepe!
          Voluptate, ratione quas? Expedita deleniti incidunt possimus explicabo
          natus eum est reiciendis.
        </p>
      </div>
      <div className="flex flex-col items-center basis-1/3 ml-4">
        <div>
          <img src={picture} alt="" />
        </div>
        <h4 className="text-xl font-bold lowercase">chad</h4>
      </div>
    </div>
  );
};

export default RightCard;
