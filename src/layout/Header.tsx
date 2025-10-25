import { Separator } from "@/components/ui/separator";
import Navigator from "@/layout/Navigator";
// import { Outlet } from "react-router";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import picNum01 from "../assets/hor_pic.jpg";
import picNum02 from "../assets/ver_pic.jpg";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const { lang, setLang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const params = useParams();
  const currentLang = (params.lang as "vn" | "en") ?? lang;
  const location = useLocation();

  const onChangeLang = (next: "vn" | "en") => {
    if (next === currentLang) return;
    setLang(next);
    // giữ lại phần path sau /:lang
    const segments = location.pathname.split("/").filter(Boolean); // ["vn","posts","123"]
    if (segments.length === 0) {
      navigate(`/${next}`, { replace: false });
      return;
    }
    // nếu URL bắt đầu có lang (segments[0] là "vn" hoặc "en"), thay segments[0]
    if (segments[0] === "vn" || segments[0] === "en") {
      segments[0] = next;
    } else {
      // ngược lại, chèn lang vào đầu
      segments.unshift(next);
    }
    navigate("/" + segments.join("/"));
    // navigate(`/${next}`);
  };
  return (
    <>
      <header className="lg:flex lg:flex-row lg:items-stretch block w-full mx-auto">
        <div className="flex flex-col lg:w-2/3 w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between my-2 gap-2 sm:gap-0">
            <p className="text-sm sm:text-lg text-center sm:text-left">
              {lang === "vn" ? "blog cá nhân" : "persional blog"}
            </p>
            <p className="text-sm sm:text-lg text-center sm:text-right">
              {lang === "vn" ? "web tui làm" : "website exclusive"}
            </p>
          </div>
          <div className="mb-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl lowercase text-center font-bold">
              {lang === "vn"
                ? "lại trọng minh trường"
                : "lai trong minh truong"}
            </h1>
          </div>

          <div className="mb-2">
            <p className="text-xs sm:text-sm font-light text-justify">
              {lang === "vn"
                ? "tớ viết để ghi lại hành trình của mình — những ngày bình yên xen lẫn bão tố, những câu chuyện nhỏ giúp tớ hiểu hơn về con người, về lòng biết ơn và sự kiên cường. Đây sẽ là nơi tớ giữ lại một phần tĩnh lặng giữa thế giới ồn ào."
                : "i write to record my journey — the peaceful days mixed with the storms, the little stories that help me understand more about people, about gratitude and resilience. this will be where i keep a piece of silence in the noisy world."}
            </p>
          </div>
          <img
            src={picNum01}
            alt="Main article cover"
            className="w-full min-h-20 sm:min-h-28 object-cover"
            width="420"
            height="100"
          />
        </div>
        <div className="w-1/3 lg:flex flex-col items-center mt-4 hidden">
          <img
            src={picNum02}
            alt="Magazine cover side image"
            className="h-full object-cover"
            width="120"
            height="250"
          />
          <p className="text-center text-sm font-light">Md: 10-2025</p>
        </div>
      </header>
      <div className="flex items-stretch justify-between mt-4">
        <Navigator />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="text-sm px-3 py-1 border rounded h-8"
        >
          {isDark
            ? lang === "en"
              ? "Light"
              : "Ngày"
            : lang === "en"
            ? "Dark"
            : "Đêm"}
        </button>
        <div className="ml-2">
          <select
            aria-label="Language selector"
            className="text-sm px-2 py-1 border rounded bg-transparent h-8"
            value={currentLang}
            onChange={(e) => onChangeLang(e.target.value as "vn" | "en")}
          >
            <option value="vn">VN</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
      <Separator className="my-4 bg-[color:var(--border)] h-[1px] w-full" />
    </>
  );
};

export default Header;
