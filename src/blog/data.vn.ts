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
    id: "nhat-ky-4",
    title: "nhật ký 4: mình nhớ mẹ",
    description: "Mình viết bài này để tâm sự với những bạn sống xa nhà, những điều mình viết sẽ giúp ích cho các bạn trong việc kiểm soát cảm xúc, trở nên năng lượng và yêu thương hơn, giảm thiểu tác động tiêu cực từ cuộc sống, và một chút bật mí tình yêuu.",
    category: ["tam-su", 'ke-chuyen'],
    date: "2023-04-24",
    cover: "nhat-ky-4.jpg",
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
