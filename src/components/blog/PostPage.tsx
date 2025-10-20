import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";

type PostMeta = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  category?: string;
};

type MdxModule = {
  default: React.ComponentType;
  meta?: PostMeta;
};

const modulesVN = import.meta.glob("@/blog/vn/*.mdx", { eager: true }) as Record<string, MdxModule>;
const modulesEN = import.meta.glob("@/blog/en/*.mdx", { eager: true }) as Record<string, MdxModule>;

function pickById(mods: Record<string, MdxModule>, id: string): MdxModule | null {
  for (const [path, mod] of Object.entries(mods)) {
    const metaId = mod.meta?.id || path.split("/").pop()?.replace(/\.mdx$/, "");
    if (metaId === id) return mod;
  }
  return null;
}

const PostPage = () => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  const id = params.id as string | undefined;

  const mod = useMemo(() => {
    if (!id) return null;
    return lang === "vn" ? pickById(modulesVN, id) : pickById(modulesEN, id);
  }, [lang, id]);

  if (!id) return <Navigate to={`/${lang}/blog`} replace />;
  if (!mod) return <div className="py-6">Post not found.</div>;

  const Mdx = mod.default;
  const meta = mod.meta;

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-4">
        <Link className="text-sm underline" to={`/${lang}/blog`}>
          {lang === "vn" ? "← Quay lại blog" : "← Back to blog"}
        </Link>
      </div>
      {meta?.title && <h1 className="font-fuzzy text-2xl font-bold">{meta.title}</h1>}
      {meta?.description && <p className="font-fuzzy text-xl font-medium">{meta.description}</p>}
      <div className="font-fuzzy mt-12">
      <Mdx />
      </div>
    </article>
  );
};

export default PostPage;


