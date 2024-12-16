import axios from "axios";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import pencil from "../assets/pencil.svg";

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
        <Link to="/project/create"><p>Créer un projet</p></Link>
        <p>Voici tout les projets à disposition :</p>
        <ul className="listnavul">
          {projects.map((project) => {
            return (
              <div>
                <Link to={`/project/${project.name}`}>
                  <li className="listnavli" key={project.name}>
                    {project.name}
                  </li>
                </Link>
                <Link to={`/project/${project.name}/edit`}>
                  <img src={pencil} alt="logo d'édition" />
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
