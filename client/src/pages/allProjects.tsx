import axios from "axios";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  url: string;
}

export const Projects = ({}) => {
  const [projects, setProject] = useState<Project[]>([]);

  useEffect(() => {
    const asyncResponse = async () => {
      const response = await axios.get("http://localhost:3000/project/");
      setProject(response.data);
    };
    try {
      asyncResponse();
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Projets</h1>
        <p>Voici tout les projets à disposition :</p>
        <ul className="listnavul">
          {projects.map((project) => {
            return (
              <Link to={`/project/${project.name}`}>
                <li className="listnavli" key={project.name}>
                  {project.name.replace(
                    project.name[0],
                    project.name[0].toUpperCase()
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
