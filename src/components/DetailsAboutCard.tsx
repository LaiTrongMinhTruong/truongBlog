import about_pic1 from "../assets/about_pic01.png";
import about_pic2 from "../assets/about_pic02.png";
const DetailsAboutCard = () => {
  return (
    <div className="flex flex-row justify-between items-stretch gap-4 ">
      <div className="flex flex-col justify-between items-stretch basis-1/3">
        <div className="object-cover mb-2 w-full">
          <img src={about_pic1} alt="" className="w-full"/>
        </div>
        <h4 className="text-xl lowercase font-bold">Wear your personality, not just your clothers.</h4>
        <p className="text-sm font-light text-justify mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          dolorem numquam sequi et eaque blanditiis eum, iusto velit, laborum incidunt qui assumenda sit eos recusandae accusantium architecto vero
          provident? Harum!
        </p>
      </div>
      <div className="flex flex-col justify-around items-stretch basis-2/3">
        <h3 className="text-2xl lowercase font-bold mb-2">dress to express not to impress!</h3>
        <p className="text-sm font-light text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error
          beatae accusantium id quam saepe rerum voluptatibus esse iusto
          temporibus, provident illum numquam itaque! Iste assumenda aperiam
          magnam ab quod? ncidunt qui assumenda sit eos recusandae accusantium architecto vero
          provident? Harum!
        </p>
        <div className="object-cover flex-1 w-full mt-2">
          <img src={about_pic2} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default DetailsAboutCard;
