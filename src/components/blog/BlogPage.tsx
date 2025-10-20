import { BLOGS_EN } from "@/blog/data.en";
import { BLOGS_VN, type CategoryKey } from "@/blog/data.vn";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Reveal from "../Reveal";
import BlogInfoCard from "./BlogInfoCard";

const CATEGORY_LABELS: Record<
  CategoryKey,
  { vn: string; en: string; desc: { vn: string; en: string } }
> = {
  "tam-su": {
    vn: "Tâm sự",
    en: "Confessions",
    desc: { vn: "Những trải lòng riêng.", en: "Quiet personal notes." },
  },
  "an-ui": {
    vn: "An ủi",
    en: "Comfort",
    desc: { vn: "Vỗ về và sẻ chia.", en: "Words of comfort." },
  },
  "ke-chuyen": {
    vn: "Kể Chuyện",
    en: "Storytelling",
    desc: { vn: "Khích lệ bản thân.", en: "Small encouragements." },
  },
  "chuyen-ngoai-le": {
    vn: "Chuyện ngoài lề",
    en: "Side notes",
    desc: { vn: "Những chuyện quanh ta.", en: "Misc side stories." },
  },
};

const BlogPage = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | CategoryKey>("all");

  const allPosts = lang === "vn" ? BLOGS_VN : BLOGS_EN;

  const filtered = useMemo(() => {
    return allPosts
      .filter((p) => p.privatePost === false)
      .filter((p) =>
        category === "all" ? true : p.category.includes(category)
      )
      .filter((p) =>
        (p.title + " " + p.description)
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      )
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [allPosts, category, query]);

  const recent = filtered.slice(0, 6);

  return (
    <div className="pb-20">
      <div className="flex flex-col gap-3 my-4">
        <div className="flex flex-row gap-2 items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "vn" ? "Tìm kiếm..." : "Search..."}
            className="px-3 py-2 border rounded w-full h-12"
          />
          <select
            value={category}
            onChange={(e) =>
              setCategory((e.target.value as "all" | CategoryKey) || "all")
            }
            className="px-3 py-2 border rounded h-12"
          >
            <option value="all">{lang === "vn" ? "Tất cả" : "All"}</option>
            {Object.keys(CATEGORY_LABELS).map((key) => {
              const k = key as CategoryKey;
              const label = CATEGORY_LABELS[k][lang];
              return (
                <option key={k} value={k}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(CATEGORY_LABELS).map(([k, info]) => (
            <Link
              key={k}
              to={`/${lang}/blog/category/${k}`}
              className="p-3 border rounded block"
            >
              <div className="text-lg font-semibold">{info[lang]}</div>
              <div className="text-sm opacity-80">{info.desc[lang]}</div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <div className="text-2xl font-extrabold mb-2">
            {lang === "vn" ? "Bài viết gần đây" : "Recent posts"}
          </div>
          <div className="flex flex-col gap-4">
            {recent.map((post, idx) => (
              <Reveal key={post.id + idx} className="my-1">
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

        <div className="mt-8">
          <div className="text-2xl font-extrabold mb-2">
            {lang === "vn" ? "Tất cả bài viết" : "All posts"}
          </div>
          <div className="flex flex-col gap-4">
            {filtered.map((post, idx) => (
              <Reveal key={post.id + idx} className="my-1">
                <div className="flex flex-row items-stretch">
                  <Link to={`/${lang}/blog/${post.id}`} className="flex-1">
                    <BlogInfoCard
                      blogTitle={post.title}
                      blogDescription={post.description}
                      date={post.date}
                      imgUrl={post.cover}
                      category={post.category}
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
