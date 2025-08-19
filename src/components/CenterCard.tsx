import { Separator } from "@radix-ui/react-separator";
import pictureCenter from "../assets/pic_num03.png";

const CenterCard = () => {
  return (
    <>
      <div className="flex flex-row  items-stretch gap-4 my-2">
        <div className="flex-1">
          <p className="text-sm font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repellat numquam veritatis reprehenderit adipisci enim possimus
            dignissimos consequuntur sunt officia repellendus eveniet
            distinctio, quaerat ex repudiandae fugit quae, harum voluptate.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={pictureCenter}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:block hidden flex-1">
          <p className="text-sm font-light text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            ipsum, ullam nostrum laudantium alias, modi quaerat eveniet ex error
            nihil atque debitis esse quasi magni voluptates nemo? Natus, iusto
            voluptatem.
          </p>
        </div>
      </div>
      <Separator orientation="horizontal" />
    </>
  );
};

export default CenterCard;
