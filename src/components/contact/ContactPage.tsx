import { useParams } from "react-router";
import avatar from "../../assets/avatarContact.png";
import Reveal from "../Reveal";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const ContactPage = () => {
  const project_en = [
    {
      title: "Personal CV Template No. 1",
      desc: "This is one of the first projects I built with Vite and deployed on Vercel. The website uses Vite + React + TypeScript + Tailwind CSS. The disadvantage is that I haven't implemented a responsive interface for smaller devices (mobile) yet, so the user experience is not optimal. Also, the current interface is quite simple and not very distinctive.",
      link: "https://customer01cv.vercel.app/",
      // imgUrl: "/project-covers/1.jpg", // sample url
      privatePrj: false,
    },
    {
      title: "Personal CV Template No. 2",
      desc: "This website is another exercise I used to practice familiarizing myself with existing tools, as well as learning some new technologies like framer-motion for animation effects. I used Next.js + React + TypeScript + Tailwind CSS + framer-motion for this web. Currently, I also haven't implemented a responsive interface for smaller devices (mobile), so the user experience is not optimal. The interface is also quite simple and doesn't offer a distinctive look or good experience.",
      link: "https://customer02cv.netlify.app/",
      // link: "https://customer02cv.vercel.app/",
      // imgUrl: "/project-covers/1.jpg", // sample url
      privatePrj: false,
    },
    {
      title: "Personal CV Template No. 3",
      desc: "Yet another practice exercise of mine; this time, I decided to create my own CV. Since these three CV templates were all practice exercises built almost simultaneously, there isn't much difference in technology or drawbacks.",
      link: "https://minh-truong-cv.vercel.app/about",
      imgUrl: "",
      privatePrj: false,
    },
    {
      title: "Boundless Web",
      desc: "I focused quite a bit on this project. This website also marked the transition from an interface using only hard-coded data to one using data imported from a JSON file (a small change, but a step). Compared to previous exercises, this website has a better, more modern interface, smooth animations, and is responsive across various devices. However, this project is still only focused on the interface; the data is hard-coded, and it doesn't use a backend or database yet, so the functionality isn't truly complete.",
      link: "https://boundlessofficial.vercel.app/",
      imgUrl: "",
      privatePrj: false,
    },
    {
      title: "Contact List Application No. 1",
      desc: "An exercise I built when starting to familiarize myself with PHP and basic backend logic. For this application, I used PHP (running in a XAMPP environment), MySQL for data storage, and Tailwind CSS for the interface. The application has basic functions like adding, editing, deleting, and searching contacts. Data is temporarily stored in the browser's memory (for a few days). However, the interface is not optimized for smaller devices (mobile), so the experience is not optimal.",
      link: "https://contact-list-demo-lovat.vercel.app/",
      imgUrl: "",
      privatePrj: false,
    },
    {
      title: "Truong's Blog",
      desc: "This is the application you are currently using to read these lines. I spent quite a lot of time on it, from conceptualizing and designing to coding, adding features, and making it responsive. The result is decent, I'd say. The big advantage of this website is that since I wrote it myself, I have the ability to extend it as I wish, and that's also the drawback as I currently don't know what else to extend.",
      link: "https://blog-cua-truong.vercel.app/",
      imgUrl: "",
      privatePrj: true,
    },
    {
      title: "Keansburg Park",
      desc: "I dedicated a lot of time to collaborating with the team and completing this project, from interface design to building complex features like the shopping cart, payment, product management, and an admin page. This website uses Vite + React + TypeScript + Bootstrap, includes both frontend, backend, and a database, communicating via API calls. As of 2025, this product is likely the most polished, complete, and complex one I've been involved in. I learned a lot of cool things from this project about teamwork, the software development process, and new technologies. This product was made to be responsive across multiple devices, combined with smooth, automated animations, greatly enhancing the user experience.",
      link: "https://blog-cua-truong.vercel.app/",
      imgUrl: "",
      privatePrj: false,
    },
  ];

  const project_vn = [
    {
      title: "mẫu cv cá nhân số 1",
      desc: "đây là một trong những dự án đầu mình làm với vite được deploy lên vercel. web dùng vite + react + typescript + tailwindcss. nhược điểm là hiện sản phẩm này mình chưa làm giao diện trên các thiết bị nhỏ hơn (mobile) nên trải nghiệm chưa tốt. đồng thời giao diện còn đang khá đơn giản, chưa đặc sắc lắm.",
      link: "https://customer01cv.vercel.app/",
      // imgUrl: "/project-covers/1.jpg", //url mau
      privatePrj: false,
    },
    {
      title: "mẫu cv cá nhân số 2",
      desc: "website này là một bài tập khác mình dùng để tập luyện khả năng làm quen với các công cụ cũ, cũng như học thêm một số công nghệ mới như framer-motion để làm hiệu ứng chuyển động. web này mình dùng nextjs + react + typescript + tailwindcss + framer-motion. hiện sản phẩm này mình cũng chưa làm giao diện trên các thiết bị nhỏ hơn (mobile) nên trải nghiệm chưa tốt. đồng thời giao diện còn đang khá đơn giản, chưa mang lại nét đặc trưng hay trải nghiệm tốt.",
      link: "https://customer02cv.netlify.app/",
      // link: "https://customer02cv.vercel.app/",
      // imgUrl: "/project-covers/1.jpg", //url mau
      privatePrj: false,
    },
    {
      title: "mẫu cv cá nhân số 3",
      desc: "lại là một bài tập để luyện của mình, lần này mình thử tạo luôn cv của mình, vì 3 mẫu cv này đều là bài tập, được làm gần như cùng lúc nên không có sự khác biệt nhiều về công nghệ hay nhược điểm.",
      link: "https://minh-truong-cv.vercel.app/about",
      imgUrl: "",
      privatePrj: false,
    },
    {
      title: "Boundless web",
      desc: "mình khá tập trung vào dự án này, web này cũng là bước đánh dấu chuyển từ web giao diện chỉ sử dụng dữ liệu cứng sang web sử dụng dữ liệu import từ file json (thay đổi cũng nhỏ). Nhưng so với những bài tập lúc trước thì web này có giao diện đẹp hơn, hiện đại hơn, animation mượt và hỗ trợ trên nhiều thiết bị. tuy nhiên dự án này vẫn chỉ đang dừng lại ở phần giao diện, dữ liệu là dữ liệu cứng, chưa sử dụng backend hay database nên tính năng chưa thực sự hoàn chỉnh.",
      link: "https://boundlessofficial.vercel.app/",
      imgUrl: "",
      privatePrj: false,
    },
    {
      title: "Ứng dụng danh bạ số 1",
      desc: "một bài tập mình làm khi bắt đầu làm quen với php và logic căn bản của backend, ứng dụng này mình sử dụng php (chạy trên môi trường của xampp), mysql để lưu trữ dữ liệu, tailwindcss để làm giao diện. ứng dụng này có các chức năng cơ bản như thêm, sửa, xóa, tìm kiếm liên hệ, dữ liệu được lưu tạm thời ở bộ nhớ của trình duyệt (trong vài ngày). tuy nhiên giao diện chưa được tối ưu cho các thiết bị nhỏ hơn (mobile) nên trải nghiệm chưa tốt.",
      link: "https://contact-list-demo-lovat.vercel.app/",
      imgUrl: "",
      privatePrj: false,
    },
    {
      title: "Blog của Trường",
      desc: "đây là ứng dụng hiện bạn đang sử dụng để đọc những dòng này. mình cũng mất khá nhiều thời gian từ việc lên ý tưởng, thiết kế, code, làm thêm chức năng, responsive, nhưng kết quả cũng gọi là ổn. ưu điểm lớn của web này là do mình tự viết nên mình có khả năng mở rộng theo ý mình, và đó cũng là nhược điểm khi hiện tại mình chưa biết mở rộng thêm cái gì.",
      link: "https://blog-cua-truong.vercel.app/",
      imgUrl: "",
      privatePrj: true,
    },
    {
      title: "keansburg park",
      desc: "mình dành khá nhiều thời gian để tham gia cùng team và hoàn thiện dự án này, từ việc thiết kế giao diện đến xây dựng các tính năng phức tạp như giỏ hàng, thanh toán và quản lý sản phẩm, admin page. web này mình dùng vite + react + typescript + bootstrap, có cả frontend, backend, database, sử dụng api call để giao tiếp với nhau. sản phẩm này tính tới thời điểm năm 2025 có lẽ là sản phẩm chỉnh chu, hoàn chỉnh và phức tạp nhất mà mình tham gia làm, từ dự án này mình học được rất nhiều thứ hay ho về cách làm việc nhóm, quy trình phát triển phần mềm cũng như các công nghệ mới. sản phẩm này đã được làm để thích ứng trên nhiều thiết bị (responsive), kết hợp cùng animation mượt mà, tự động giúp tăng trải nghiệm người dùng rất nhiều.",
      link: "https://blog-cua-truong.vercel.app/",
      imgUrl: "",
      privatePrj: false,
    },
  ];
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="flex flex-col items-center justify-around gap-4 pb-40 pt-15">
      <Reveal>
        <div>
          <img
            src={avatar}
            alt="Lai Trong Minh Truong"
            className="rounded-full"
          />
        </div>
      </Reveal>
      <Reveal>
        <h3 className="text-2xl sm:text-3xl font-bold lowercase">
          {lang === "vn" ? "kết nối với tớ" : "Contact Me Now"}
        </h3>
      </Reveal>
      <Reveal>
        <p className="text-sm sm:text-md font-light text-center">
          {lang === "vn"
            ? "hãy liên hệ nếu có góp ý hay bất cứ mối quan tâm về sự hợp tác với tớ"
            : "please contact me if you have any comments or concerns about working with me."}
        </p>
      </Reveal>
      <Reveal>
        <Button
          className="hover:underline mb-8 bg-transparent"
          variant="outline"
        >
          <a
            href="https://minh-truong-cv.vercel.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit"
          >
            {lang === "vn" ? "view my CV" : "view my CV"}
          </a>
        </Button>
      </Reveal>
      <Reveal>
        <div className="mb-4">
          {lang === "vn"
            ? "các dự án tớ làm/tham gia làm"
            : "projects I do/participate in"}
        </div>
      </Reveal>
      <Reveal className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
          {lang === "vn"
            ? project_vn.map((proj, index) => (
                <ProjectCard
                  key={index}
                  title={proj.title}
                  desc={proj.desc}
                  link={proj.link}
                  imgUrl={proj.imgUrl}
                  privatePrj={proj.privatePrj}
                />
              ))
            : project_en.map((proj, index) => (
                <ProjectCard
                  key={index}
                  title={proj.title}
                  desc={proj.desc}
                  link={proj.link}
                  imgUrl={proj.imgUrl}
                  privatePrj={proj.privatePrj}
                />
              ))}
        </div>
      </Reveal>
      <Reveal>
        <p className="text-sm sm:text-md font-light text-center mb-4">
          {lang === "vn" ? "hoặc liên hệ tớ tại" : "or find me at"}
        </p>
        <ul className="flex flex-col items-start justify-center gap-3 sm:gap-4">
          <li className="flex flex-row items-center gap-4">
            <a href="mailto:mkhang189@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                />
              </svg>
            </a>
            <p>E-mail: mkhang189@gmail.com</p>
          </li>
          <li className="flex flex-row items-center gap-4">
            <a href="tel:+84345564926">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                {/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}
                <path
                  fill="currentColor"
                  d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.65l1.5 2l-2 2c-1.3-1-2.27-2.39-2.72-4c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3 2.72-4l2 2l-1.5 2h-1.65c-.22.63-.35 1.3-.35 2s.13 1.37.35 2"
                />
              </svg>
            </a>
            <p>{lang === "vn" ? "sdt" : "Phone"}: (+84)345 564 926</p>
          </li>
          <li className="flex flex-row items-center gap-4">
            <a
              href="https://www.facebook.com/truong.lai.603812"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                {/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <p>
              facebook:{" "}
              <a
                href="https://www.facebook.com/truong.lai.603812"
                className="hover:underline"
              >
                Lại Trọng Minh Trường
              </a>
            </p>
          </li>
          <li className="flex flex-row items-center gap-4">
            <a
              href="https://www.instagram.com/m.truonq_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                {/* Icon from Unicons Monochrome by Iconscout - https://github.com/Iconscout/unicons/blob/master/LICENSE */}
                <path
                  fill="currentColor"
                  d="M20.936 7.564a6 6 0 0 0-.377-2.039a3.4 3.4 0 0 0-.821-1.263a3.4 3.4 0 0 0-1.263-.82a6.1 6.1 0 0 0-2.039-.378C15.278 3.012 14.931 3 12 3s-3.279.01-4.436.064a6 6 0 0 0-2.039.377a3.4 3.4 0 0 0-1.263.821a3.4 3.4 0 0 0-.82 1.264a6.1 6.1 0 0 0-.378 2.038C3.012 8.723 3 9.07 3 12.001s.01 3.279.064 4.436a6 6 0 0 0 .378 2.039c.175.476.456.908.821 1.261a3.4 3.4 0 0 0 1.263.822c.652.242 1.342.37 2.038.377C8.721 20.99 9.07 21 12 21s3.28-.01 4.436-.064a6 6 0 0 0 2.039-.377a3.64 3.64 0 0 0 2.084-2.083a6.1 6.1 0 0 0 .377-2.04C20.99 15.28 21 14.932 21 12s-.01-3.278-.064-4.436"
                  opacity=".5"
                />
                <path
                  fill="currentColor"
                  d="M17.793 7.618a2.46 2.46 0 0 0-1.41-1.41a4.1 4.1 0 0 0-1.38-.256c-.784-.036-1.02-.044-3.003-.044s-2.218.008-3 .044a4.1 4.1 0 0 0-1.38.255c-.649.25-1.16.762-1.41 1.41c-.164.443-.25.91-.256 1.38c-.036.784-.043 1.019-.043 3.003s.007 2.22.043 3.003c.005.471.092.938.255 1.38a2.46 2.46 0 0 0 1.41 1.41c.443.163.91.25 1.38.255c.783.036 1.018.043 3.002.043s2.22-.007 3.003-.043a4.1 4.1 0 0 0 1.38-.256a2.46 2.46 0 0 0 1.41-1.41c.164-.441.25-.908.256-1.38c.036-.783.043-1.018.043-3.002s-.007-2.219-.043-3.002a4.1 4.1 0 0 0-.256-1.38M12 15.815a3.815 3.815 0 1 1 0-7.63a3.815 3.815 0 0 1 0 7.63m3.966-6.89a.892.892 0 0 1 0-1.783h.001a.892.892 0 0 1 .005 1.783z"
                />
                <path
                  fill="currentColor"
                  d="M12 9.523A2.477 2.477 0 1 0 14.477 12a2.477 2.477 0 0 0-2.476-2.477"
                />
                <path
                  fill="currentColor"
                  d="M21.93 7.07a6.7 6.7 0 0 0-.42-2.264a3.8 3.8 0 0 0-.913-1.403a3.8 3.8 0 0 0-1.403-.913a6.8 6.8 0 0 0-2.265-.42C15.642 2.014 15.257 2 12 2c-3.255 0-3.642.012-4.928.07a6.8 6.8 0 0 0-2.265.42a3.76 3.76 0 0 0-1.403.913a3.8 3.8 0 0 0-.913 1.403a6.8 6.8 0 0 0-.42 2.265C2.014 8.358 2 8.744 2 12.001s.012 3.643.071 4.929c.01.773.151 1.54.42 2.265c.195.53.507 1.01.912 1.402a3.8 3.8 0 0 0 1.403.913a6.7 6.7 0 0 0 2.266.42c1.285.059 1.672.07 4.928.07s3.643-.012 4.93-.07a6.7 6.7 0 0 0 2.264-.42a4.04 4.04 0 0 0 2.316-2.315c.268-.726.41-1.492.42-2.265c.058-1.287.07-1.674.07-4.93c0-3.257-.012-3.642-.07-4.93m-2.545 7.993a5.4 5.4 0 0 1-.345 1.804a3.8 3.8 0 0 1-2.173 2.173a5.5 5.5 0 0 1-1.803.345c-.793.037-1.046.045-3.064.045s-2.27-.009-3.063-.045a5.5 5.5 0 0 1-1.803-.345a3.8 3.8 0 0 1-2.174-2.173a5.5 5.5 0 0 1-.345-1.804C4.58 14.271 4.57 14.018 4.57 12s.009-2.271.045-3.063a5.5 5.5 0 0 1 .345-1.804A3.8 3.8 0 0 1 7.134 4.96a5.5 5.5 0 0 1 1.803-.345c.793-.037 1.047-.045 3.064-.045s2.27.009 3.063.045a5.4 5.4 0 0 1 1.804.345a3.8 3.8 0 0 1 2.172 2.173c.217.578.333 1.187.345 1.804c.036.792.045 1.045.045 3.063s-.009 2.27-.045 3.063"
                />
              </svg>
            </a>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/m.truonq_"
                className="hover:underline"
              >
                m.truonq_
              </a>
            </p>
          </li>
          <li className="flex flex-row items-center gap-4">
            <a href="https://github.com/LaiTrongMinhTruong">
              <img
                src="/github-mark.png"
                alt="github icon"
                className="w-8 h-8"
              />
            </a>
            <p>
              github:{" "}
              <a
                href="https://github.com/LaiTrongMinhTruong"
                className="hover:underline"
              >
                LaiTrongMinhTruong
              </a>
            </p>
          </li>
        </ul>
      </Reveal>
    </div>
  );
};

export default ContactPage;
