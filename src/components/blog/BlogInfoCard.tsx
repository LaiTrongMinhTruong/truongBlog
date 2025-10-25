import { CATEGORY_LABELS_EN } from "@/blog/data.en";
import { CATEGORY_LABELS_VN } from "@/blog/data.vn";
import { useParams } from "react-router";
import type { BlogChildProp } from "../types/BlogChildProp";

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
    <div className="flex flex-col lg:flex-row items-center flex-1 border p-3 sm:p-5 rounded justify-between gap-4 w-full">
      <div className="flex flex-col justify-between items-start px-2 sm:px-8 w-full lg:w-auto">
        <h4 className="text-lg sm:text-xl font-bold lowercase">{blogTitle}</h4>
        <p className="text-xs sm:text-sm font-light text-justify">{blogDescription}</p>
        <p className="text-xs sm:text-sm">
          <span className="italic">{category.length > 1 ? "categories: " : "category: "}</span>
          {category.map((c, i) => (
            <span key={i} className="mr-2 sm:mr-4 italic">
              {lang === "en"
                ? CATEGORY_LABELS_EN[c].label
                : CATEGORY_LABELS_VN[c].label}
            </span>
          ))}
        </p>
        <p className="text-xs opacity-70 mt-1">{date}</p>
      </div>
      <div className="mt-2 lg:mt-0 lg:ml-6 w-full sm:w-48 h-32 flex-shrink-0 lg:mr-8">
        <img
          src={`/blog-covers/${imgUrl}`}
          alt={blogTitle}
          className="w-full sm:w-48 h-32 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default BlogInfoCard;
