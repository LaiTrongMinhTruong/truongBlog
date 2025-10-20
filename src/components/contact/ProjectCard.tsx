import { useParams } from "react-router";

export type ProjectCardProps = {
  title: string;
  desc: string;
  link: string;
  imgUrl?: string;
}; 

const ProjectCard = ({title, desc, link}: ProjectCardProps) => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  return (
    <div className="border rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {lang === "en" ? "Visit Project" : "Xem dự án"}
      </a>
    </div>
  );
};

export default ProjectCard;
