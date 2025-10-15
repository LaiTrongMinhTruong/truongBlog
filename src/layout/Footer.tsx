import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <>
      <footer className="w-full p-4">
        <Separator
          orientation="horizontal"
          className="my-4 bg-[color:var(--border)] h-[1px] w-full"
        />
        <div className="w-full flex flex-row items-center justify-center">
          <div className="italic font-light text-sm px-4 text-center">
            blog-cua-truong.vercel.app/
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
