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
  {
    id: "gioi-thieu-1-chut",
    title: "A Little Introduction", // or "Introducing Myself a Little"
    description:
      "I'd like to write a post to introduce this blog, as well as briefly talk about my current health situation. I hope everyone will understand me better through this article.",
    category: ["ke-chuyen"],
    date: "2025-10-27",
    cover: "gioi-thieu-1-chut.jpg",
    privatePost: false,
  },
  {
    id: "cau-cho-to-cai-nay-duoc-khong",
    title: "Hey, can you give me this?", // or "Can you grant me this?"
    description:
      "In this post, I want to express my love to everyone and hope to receive love in return as a huge source of motivation for me to get through the upcoming treatment process.",
    category: ["ke-chuyen", "tam-su"],
    date: "2023-08-07",
    cover: "cau-cho-to-cai-nay-duoc-khong.jpg",
    privatePost: false,
},
];

export const CATEGORY_LABELS_EN: Record<
  CategoryKey,
  { label: string; desc: string }
> = {
  "tam-su": {
    label: "Confessions", // or "Heartfelt Thoughts", "Personal Sharing"
    desc: "Since falling ill, I've become more sensitive about what I express, paying extra attention to how my actions might affect others. I'm uncomfortable with people worrying about me, so I'll write what I want to share here.",
  },
  "an-ui": {
    label: "Encouragement", // or "Comfort"
    desc: "I think you've tried very hard. Everyone gets tired sometimes. I hope my experiences and lessons can help you in some way.",
  },
  "ke-chuyen": {
    label: "Storytelling", // or "Sharing Stories"
    desc: "There are stories I've encountered that carry a certain meaning, or maybe they're just small everyday snippets. I'm very happy to recount my experiences with them.",
  },
  "chuyen-ngoai-le": {
    label: "Side Notes", // or "Miscellaneous", "Off-topic"
    desc: "I'm sure there are many other things I want to write down but don't know how to categorize them. I'll put them here.",
  },
};
