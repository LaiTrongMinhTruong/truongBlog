import { useParams } from "react-router";

export type ProjectCardProps = {
  title: string;
  desc: string;
  link: string;
  imgUrl?: string;
}; 

const ProjectCard = ({title, desc, link, imgUrl}: ProjectCardProps) => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="border rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>
        {imgUrl && <img src={imgUrl} alt={title} className="w-full h-auto mb-4 rounded" />}
      </div>
      <p className="text-sm mb-4">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:underline"
      >
        {lang === "en" ? "Visit Project Link" : "Xem liên kết của dự án"}
      </a>
    </div>
  );
};

export default ProjectCard;
