import Navigator from "@/components/Navigator";
import { Separator } from "@/components/ui/separator";
// import { Outlet } from "react-router";
import picNum01 from "../assets/hor_pic.jpg";
import picNum02 from "../assets/ver_pic.jpg";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme } : HeaderProps) => {
  
  return (
    <>
      <header className="lg:flex lg:flex-row lg:items-stretch block w-full mx-auto">
        <div className="flex flex-col lg:w-2/3 w-full">
          <div className="flex justify-between my-2">
            <p className="text-lg">blog & giới thiệu</p>
            <p className="text-lg">Website Exclusive</p>
          </div>
          <div className="mb-2">
            <h1 className="text-4xl lowercase text-center font-bold">lại trọng minh trường</h1>
          </div>

          <div className="mb-2">
            <p className="text-sm font-light text-justify">
              Tôi viết để ghi lại hành trình của mình — những ngày bình yên xen lẫn bão tố, những câu chuyện nhỏ giúp tôi hiểu hơn về con người, về lòng biết ơn và sự kiên cường. Đây là nơi tôi giữ lại một phần tĩnh lặng giữa thế giới ồn ào.
            </p>
          </div>
          <img src={picNum01} alt="Main article cover" className="w-full min-h-28" width="420" height="100"/>
        </div>
        <div className="w-1/3 lg:flex flex-col items-center mt-4 hidden">
          <img src={picNum02} alt="Magazine cover side image" className="h-full" width="120" height="250" />
          <p className="text-center text-sm font-light">Vol No. 25</p>
        </div>
      </header>
      <div className="flex items-center justify-between">
        <Navigator />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="text-sm px-3 py-1 border rounded"
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
      <Separator className="my-4 bg-[color:var(--border)] h-[1px] w-full"/>
      {/* <Outlet /> */}
    </>
  );
};

export default Header;
