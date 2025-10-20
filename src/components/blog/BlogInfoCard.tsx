import { useParams } from "react-router";
import type { BlogChildProp } from "../types/BlogChildProp";
import { CATEGORY_LABELS_EN } from "@/blog/data.en";
import { CATEGORY_LABELS_VN } from "@/blog/data.vn";

const BlogInfoCard = ({
  blogTitle,
  blogDescription,
  category,
  date,
  imgUrl,
}: BlogChildProp) => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";

  return (
    <div className="flex lg:flex-row items-center flex-1 flex-col border p-5 rounded justify-between gap-4 w-full">
      <div className="flex flex-col justify-between items-start px-8">
        <h4 className="text-xl font-bold lowercase">{blogTitle}</h4>
        <p className="text-sm font-light text-justify">{blogDescription}</p>
        <p>
          {category.map((c, i) => (
            <span key={i} className="mr-4 italic">
              {lang === "en" ? CATEGORY_LABELS_EN[c].label : CATEGORY_LABELS_VN[c].label}
            </span> 
          ))}
        </p>
        <p className="text-xs opacity-70 mt-1">{date}</p>
      </div>
      <div className="mt-4 lg:mt-0 lg:ml-6 w-48 h-32 flex-shrink-0 mr-8">
        <img
          src={`/blog-covers/${imgUrl}`}
          alt={blogTitle}
          className="w-48 h-32 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default BlogInfoCard;
