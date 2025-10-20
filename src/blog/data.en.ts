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
    id: "little-things",
    title: "Little things",
    description: "Small moments that make the day calmer.",
    category: ["tam-su"],
    date: "2025-09-18",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
  {
    id: "keep-going",
    title: "Keep going",
    description: "Rest if needed, then keep moving — slowly is fine.",
    category: ["ke-chuyen"],
    date: "2025-09-12",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
  {
    id: "lotus",
    title: "Lotus in the mud",
    description: "A note about resilience and gratitude.",
    category: ["an-ui"],
    date: "2025-09-05",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
  {
    id: "side-note-01",
    title: "A little side note",
    description: "A small story with no beginning or end.",
    category: ["chuyen-ngoai-le"],
    date: "2025-08-30",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
];

export const CATEGORY_LABELS_EN: Record<CategoryKey, { label: string; desc: string }> = {
  "tam-su": { label: "Confessions", desc: "Quiet personal notes." },
  "an-ui": { label: "Comfort", desc: "Words of comfort." },
  "ke-chuyen": { label: "Storytelling", desc: "Small encouragements." },
  "chuyen-ngoai-le": { label: "Side notes", desc: "Misc side stories." },
};


