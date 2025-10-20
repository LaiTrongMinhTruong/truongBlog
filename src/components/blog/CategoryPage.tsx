import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOGS_VN, CATEGORY_LABELS_VN, type CategoryKey } from "@/blog/data.vn";
import { BLOGS_EN } from "@/blog/data.en";
import Reveal from "@/components/Reveal";
import BlogInfoCard from "./BlogInfoCard";


const CategoryPage = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  const allPosts = lang === "vn" ? BLOGS_VN : BLOGS_EN;

  const category = params.category as CategoryKey;

  const inCategory = useMemo(() => {
    if (!category) return [];
    return allPosts.filter((p) => p.category.includes(category));
  }, [allPosts, category]);

  return (
    <div className="pb-20">
      <div className="mb-4">
        <Link className="text-sm underline" to={`/${lang}/blog`}>
          {lang === "vn" ? "← Quay lại blog" : "← Back to blog"}
        </Link>
      </div>
      <div className="text-xl font-bold mb-4">
        {lang === "vn" ? "Chuyên mục" : "Category"}: {lang === "vn" ? CATEGORY_LABELS_VN[category].label : CATEGORY_LABELS_VN[category].label}
      </div>
      <div className="mb-4 text-base font-medium">
        <p>{CATEGORY_LABELS_VN[category].desc}</p>
      </div>
      <div className="flex flex-col gap-4">
        {inCategory.map((post) => (
          <Reveal key={post.id}>
            <div className="flex flex-row items-stretch">
              <Link to={`/${lang}/blog/${post.id}`} className="flex-1">
                <BlogInfoCard
                      blogTitle={post.title}
                      blogDescription={post.description}
                      date={post.date}
                      imgUrl={post.cover}
                      category={post.category}
                      privatePost={post.privatePost}
                    />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;


