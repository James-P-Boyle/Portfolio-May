import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const LoadProjects = () => {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  };

  const ShowProjects = () => {
    return (
      <>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tech={project.tech}
          />
        ))}
      </>
    );
  };

  return (
    <div className="md:w-4/5 h-full">
      {loading ? <LoadProjects /> : <ShowProjects />}
    </div>
  );
}
