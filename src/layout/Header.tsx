import Navigator from "@/components/Navigator";
import { Separator } from "@/components/ui/separator";
// import { Outlet } from "react-router";
import picNum01 from "../assets/pic_num01.png";
import picNum02 from "../assets/pic_num02.png";
const Header = () => {
  return (
    <>
      <header className="flex flex-row items-stretch">
        <div className="flex flex-col w-2/3">
          <div className="flex justify-between my-2">
            <p className="text-xl">Business & Marketing</p>
            <p className="text-xl">Website Exclusive</p>
          </div>
          <div className="mb-2">
            <h1 className="text-5xl lowercase text-center font-bold">new blog post</h1>
          </div>
          <Separator
            orientation="horizontal"
            className="text-black w-1 h-1"
          />
          <div className="mb-2">
            <p className="text-sm font-light text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              repellendus, modi autem unde deleniti, placeat, facere excepturi
              sunt illo necessitatibus iste iure saepe doloremque tempore qui.
              Cupiditate, veniam consequatur! Laudantium.
            </p>
          </div>
          <img src={picNum01} alt="" className="w-full min-h-28" width="420" height="100"/>
        </div>
        <div className="w-1/3 flex flex-col items-center mt-4">
          <img src={picNum02} alt="" className="h-full" width="120" height="250" />
          <p className="text-center text-sm font-light">Vol No. 25</p>
        </div>
      </header>
      <Navigator />
      <Separator className="my-4 bg-red-950 h-[1px] w-full"/>
      {/* <Outlet /> */}
    </>
  );
};

export default Header;
