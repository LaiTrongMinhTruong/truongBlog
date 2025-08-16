import picture from "../assets/pic_num04.png";
const VerCard = () => {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <h4 className="text-xl font-bold lowercase text-center">taylor</h4>
      <img src={picture} alt="" />
      <p className="block text-sm font-light text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt
        laboriosam maiores quia necessitatibus nemo nostrum quaerat, esse earum
        ducimus magnam quidem, ea non sequi quo rerum obcaecati facilis ipsam!
      </p>
    </div>
  );
};

export default VerCard;
