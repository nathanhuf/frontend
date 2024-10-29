import { useEffect, useState } from "react";

async function getProjects() {
  const res = await fetch("http://localhost:8000/projects");
  const projects = await res.json();

  return projects;
}
export default function ProjectList() {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.example}</p>
        </div>
      ))}
    </div>
  );
}
