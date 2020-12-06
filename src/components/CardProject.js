import React from "react";
import { motion } from "framer-motion";

export function CardProject({ project }) {
  console.log(project.project_images[0]);
  const images = Object.values(project.project_images[0]).map((img) => img.url);
  console.log(images);
  return (
    <div className="project">
      <a
        href={project?.link.url}
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="project-name">{project?.name[0]?.text}</h1>
        <p className="project-description">{project?.description[0]?.text}</p>
      </a>
    </div>
  );
}
