import { Separator } from "@radix-ui/react-separator";
import BlogInfoCard from "./BlogInfoCard";
import blog_num1 from "../assets/blog_num01.png";
import blog_num2 from "../assets/blog_num02.png";
import blog_num3 from "../assets/blog_num03.png";

const BlogPage = () => {
  return (
    <div className="pb-11">
      <div className="my-4 flex flex-row items-stretch">
        <BlogInfoCard
          blogTitle="logo and visual identity"
          blogDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit obcaecati, quidem maxime ex illo nemo similique voluptas odit. Natus culpa esse, aliquam quasi ipsa aperiam porro laborum veniam praesentium."
        />
        <div className="flex-1">
          <img src={blog_num1} alt="" className="object-cover ml-2"/>
        </div>
      </div>
      <Separator orientation="horizontal" className="h-[1px] w-full bg-red-950 mb-2" />


      <div className="my-4 flex flex-row items-stretch">
        <div className="flex-1">
          <img src={blog_num2} alt="" className="object-cover ml-2"/>
        </div>
        <BlogInfoCard
          blogTitle="document brand guidelines"
          blogDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit obcaecati, quidem maxime ex illo nemo similique voluptas odit. Natus culpa esse, aliquam quasi ipsa aperiam porro laborum veniam praesentium."
        />
      </div>
      <Separator orientation="horizontal" className="h-[1px] w-full bg-red-950 mb-2"/>


      <div className="my-4 flex flex-row items-stretch">
        <BlogInfoCard
          blogTitle="design the website"
          blogDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit obcaecati, quidem maxime ex illo nemo similique voluptas odit. Natus culpa esse, aliquam quasi ipsa aperiam porro laborum veniam praesentium."
        />
        <div className="flex-1">
          <img src={blog_num3} alt="" className="object-cover ml-2"/>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
