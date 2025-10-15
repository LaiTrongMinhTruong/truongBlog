
import BlogInfoCard from "./BlogInfoCard";
import blog_num1 from "../assets/blog_num01.png";
import blog_num2 from "../assets/blog_num02.png";
import blog_num3 from "../assets/blog_num03.png";
import Reveal from "./Reveal";
const posts = [
  {
    id: 1,
    title: "logo and visual identity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit obcaecati, quidem maxime ex illo nemo similique voluptas odit. Natus culpa esse, aliquam quasi ipsa aperiam porro laborum veniam praesentium.",
    image: blog_num1,
    imageAlt: "Logo and brand identity concept",
    reverse: false,
  },
  {
    id: 2,
    title: "document brand guidelines",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit obcaecati, quidem maxime ex illo nemo similique voluptas odit. Natus culpa esse, aliquam quasi ipsa aperiam porro laborum veniam praesentium.",
    image: blog_num2,
    imageAlt: "Brand guidelines document preview",
    reverse: true,
  },
  {
    id: 3,
    title: "design the website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit obcaecati, quidem maxime ex illo nemo similique voluptas odit. Natus culpa esse, aliquam quasi ipsa aperiam porro laborum veniam praesentium.",
    image: blog_num3,
    imageAlt: "Website design mockup",
    reverse: false,
  },
];

const BlogPage = () => {
  return (
    <div className="pb-20">
      {posts.map((post) => (
        <Reveal key={post.id} className="my-4">
        <div className="flex flex-row items-stretch">
          {post.reverse ? (
            <>
              <div className="flex-1">
                <img src={post.image} alt={post.imageAlt} className="object-cover px-2"/>
              </div>
              <BlogInfoCard blogTitle={post.title} blogDescription={post.description} />
            </>
          ) : (
            <>
              <BlogInfoCard blogTitle={post.title} blogDescription={post.description} />
              <div className="flex-1">
                <img src={post.image} alt={post.imageAlt} className="object-cover px-2"/>
              </div>
            </>
          )}
        </div>
        </Reveal>
      ))}
    </div>
  );
};

export default BlogPage;
