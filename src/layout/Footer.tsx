import { Separator } from "@radix-ui/react-separator";
import { Outlet } from "react-router";

const Footer = () => {
  return (
    <>
      <Outlet />
      <footer className="absolute bottom-0 w-full p-4 left-0">
        <Separator
          orientation="horizontal"
          className="my-4 bg-red-950 h-[1px] w-full"
        />
        <div className="flex flex-row justify-between items-center  bg-opacity-0">
          <Separator
            orientation="horizontal"
            className="my-4 bg-black h-[1px] w-full lg:block hidden"
          />
          <div className="italic font-light text-sm px-4">
            www.reallygreatsite.com
          </div>
          <Separator
            orientation="horizontal"
            className="my-4 bg-black h-[1px] w-full lg:block hidden"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
