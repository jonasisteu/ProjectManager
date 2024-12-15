import axios from "axios";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export interface Project {
  id: number,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  git_url: string,
  Category: Category[],
};

interface Category {
  id: number,
  title: string,
};

export const Project = ({}) => {

  let params = useParams();

  const [project, setCategory] = useState<Project[]>([]);

  useEffect(() => {
    const asyncResponse = async () => {
      const response = await axios.get(`http://localhost:3000/project/${params.name}`);
      setCategory(response.data);
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
          <div>
            {project.map((project) => {
              return(
                <div>
                    <h1 className="project" key={project.name}>{project.name.replace(project.name[0], project.name[0].toUpperCase())}</h1>
                    <h3>{project.description}</h3>
                    <a href={`${project.git_url}`}>
                      <h2>Acéder au repository</h2>
                    </a>
                    <h2>Catégories :</h2>
                  <div>
                    {project.Category.map((category) => {
                      return(
                        <ul key={category.title}>
                          <Link key={category.title} to={`/category/${category.title}`}><li key={category.title}>{category.title.replace(category.title[0], category.title[0].toUpperCase())}</li></Link>
                        </ul>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        
      </div>
      <Footer />
    </div>
  );
};
