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

export const BLOGS_VN: BlogMeta[] = [
  {
    id: "dieu-nho-be",
    title: "Điều nhỏ bé",
    description: "Những điều nhỏ bé trong ngày giúp mình bình an hơn.Những điều nhỏ bé trong ngày giúp mình bình an hơn.Những điều nhỏ bé trong ngày giúp mình bình an hơn.Những điều nhỏ bé trong ngày giúp mình bình an hơn.Những điều nhỏ bé trong ngày giúp mình bình an hơn.Những điều nhỏ bé trong ngày giúp mình bình an hơn.Những điều nhỏ bé trong ngày giúp mình bình an hơn.",
    category: ["tam-su", 'an-ui'],
    date: "2025-09-18",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
  {
    id: "di-tiep",
    title: "Đi tiếp",
    description: "Mệt thì nghỉ, rồi lại bước tiếp — chậm cũng được.",
    category: ["ke-chuyen"],
    date: "2025-09-12",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
  {
    id: "hoa-sen",
    title: "Hoa sen trong bùn",
    description: "Chuyện về sự kiên cường và biết ơn.",
    category: ["an-ui"],
    date: "2025-09-05",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
  {
    id: "chuyen-ngoai-le-01",
    title: "Một chút chuyện ngoài lề",
    description: "Mẩu chuyện nhỏ không đầu không cuối.",
    category: ["chuyen-ngoai-le"],
    date: "2025-08-30",
    cover: "hoa_sen.jpg",
    privatePost: false,
  },
];

export const CATEGORY_LABELS_VN: Record<
  CategoryKey,
  { label: string; desc: string }
> = {
  "tam-su": {
    label: "Tâm sự",
    desc: "Từ khi bị bệnh, tớ nhạy cảm hơn với những gì mình thể hiện, chú ý thêm từng chút hành động của mình liệu ảnh hưởng như nào tới người khác, mình ngại việc có người khác lo lắng cho mình, nên mình sẽ viết những điều muốn tâm sự ở đây.",
  },
  "an-ui": {
    label: "An ủi",
    desc: "Tớ nghĩ cậu đã cố gắng rất nhiều rồi, ai cũng có lúc mệt mỏi cả, mong những trải nghiệm, bài học của tớ có thể giúp gì đó cho cậu.",
  },
  "ke-chuyen": {
    label: "Kể chuyện",
    desc: "Có những câu chuyện tớ gặp, nó mang ý nghĩa nào đó hoặc chỉ là những mẩu chuyện nhỏ xảy ra hằng ngày, tớ rất vui khi kể lại trải nghiệm của mình với chúng.",
  },
  "chuyen-ngoai-le": {
    label: "Chuyện ngoài lề",
    desc: "Tớ chắc chắn còn rất nhiều thứ tớ muốn ghi nhưng không biết nên phân chia thể loại như nào, tớ để vào đây nhé.",
  },
};
