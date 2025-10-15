import type { BlogChildProp } from "./types/BlogChildProp";
import { Button } from "./ui/button";

const BlogInfoCard = ({ blogTitle, blogDescription }: BlogChildProp) => {
  return (
    <div className="flex lg:flex-row items-center flex-1 flex-col">
      <div className="flex flex-col justify-start items-start">
        <h4 className="text-md font-bold lowercase">{blogTitle}</h4>
        <p className="text-sm font-light text-justify">{blogDescription}</p>
      </div>
      <Button variant="outline" className="rounded-3xl mx-3 bg-transparent">
        Read
      </Button>
    </div>
  );
};

export default BlogInfoCard;
