import type { CategoryKey } from "@/blog/data.vn";

export type BlogChildProp = {
  blogTitle: string;
  blogDescription: string;
  date: string;
  imgUrl: string;
  category: Array<CategoryKey>;
  privatePost?: boolean;
};