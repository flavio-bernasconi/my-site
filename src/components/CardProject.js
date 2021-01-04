import React from "react";

export function CardProject({ project }) {
  const images = Object.values(project.project_images[0]).map((img) => img.url);
  console.log(project);
  return (
    <div className="project">
      <a
        href={project?.link.url}
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <img className="project-image" src={project.image.url} alt="project" />
        <div className="project-content">
          <h1 className="project-name">{project?.name[0]?.text}</h1>
          <p className="project-description">{project?.description[0]?.text}</p>
          <p className="w-100">Technologies used:</p>
          <ul className="list-libraries">
            {project.libraries[0].text.split(" - ").map((library) => (
              <li>{library}</li>
            ))}
          </ul>
          <a
            className="link-git"
            href={project.github.url}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </a>
    </div>
  );
}
