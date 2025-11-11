import { useState } from "react";
import { useParams } from "react-router";

export type ProjectCardProps = {
  title: string;
  desc: string;
  link: string;
  imgUrl?: string;
  privatePrj: boolean;
};

const ProjectCard = ({
  title,
  desc,
  link,
  imgUrl,
  privatePrj,
}: ProjectCardProps) => {
  const params = useParams();
  const lang = (params.lang as "vn" | "en") ?? "vn";
  const [showDesc, setShowDesc] = useState(false);
  const handleShowDesc = () => {
    setShowDesc(!showDesc);
  };
  return (
    <div className="border rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300 w-full">
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <div>
        {imgUrl && showDesc && (
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-auto mb-4 rounded"
          />
        )}
      </div>
      {showDesc && (
        <div className="my-4 p-2 border-y">
          <p className="text-sm">{desc}</p>
        </div>
      )}
      <div className="flex flex-row justify-around">
        <a
          onClick={handleShowDesc}
          className=" hover:underline hover:cursor-pointer"
        >
          {lang === "vn"
            ? showDesc
              ? "ẩn"
              : "mô tả"
            : showDesc
            ? "hide"
            : "description"}
        </a>
        {privatePrj ? null : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline"
          >
            link
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
