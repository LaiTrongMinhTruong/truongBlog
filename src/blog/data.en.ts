export type CategoryKey = "tam-su" | "an-ui" | "ke-chuyen" | "chuyen-ngoai-le";

export type BlogMeta = {
  id: string;
  title: string;
  description: string;
  category: Array<CategoryKey>;
  date: string;
  cover: string;
  privatePost: boolean;
};

export const BLOGS_EN: BlogMeta[] = [
  {
    id: "nhat-ky-4",
    title: "Diary 4: I Miss My Mom",
    description:
      "I wrote this post to share with those who live far from home. What I write here might help you manage your emotions better, stay positive and loving, reduce the negative impacts of life, and—just a little—reveal something about love.",
    category: ["tam-su", 'ke-chuyen'],
    date: "2023-04-24",
    cover: "nhat-ky-4.jpg",
    privatePost: false,
  },
];

export const CATEGORY_LABELS_EN: Record<
  CategoryKey,
  { label: string; desc: string }
> = {
  "tam-su": { label: "Confessions", desc: "Quiet personal notes." },
  "an-ui": { label: "Comfort", desc: "Words of comfort." },
  "ke-chuyen": { label: "Storytelling", desc: "Small encouragements." },
  "chuyen-ngoai-le": { label: "Side notes", desc: "Misc side stories." },
};
