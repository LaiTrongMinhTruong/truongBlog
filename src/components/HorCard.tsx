import picture from "../assets/pic_num06.png";
const HorCard = () => {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <img src={picture} alt="" />
      <p className="text-sm font-light text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nemo
        dolor, tenetur eligendi quae laudantium, earum at aspernatur blanditiis,
        aut nobis optio itaque excepturi fuga. Reiciendis vero hic fuga
        architecto?
      </p>
    </div>
  );
};

export default HorCard;
