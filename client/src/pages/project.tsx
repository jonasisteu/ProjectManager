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
  url: string,
};

interface Category {
  id: number,
  title: string,
  Project: Project[],
};

export const Project = ({}) => {

  let params = useParams();

  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const asyncResponse = async () => {
      const response = await axios.get(`http://localhost:3000/category/${params.name}/projects`);
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
            {category.map((category) => {
              return(
                <div>
                  <div>
                    {category.Project.map((project) => {
                      return(
                        <ul key={project.name}>
                          <Link key={project.name} to={`/project/${project.name}`}><li key={project.name}>{project.name}</li></Link>
                        </ul>
                      )
                    })}
                  </div>
                    <h1 className="category" key={category.title}>{category.title.replace(category.title[0], category.title[0].toUpperCase())}</h1>
                    <h2>Projets liés :</h2>
                </div>
              );
            })}
          </div>
        
      </div>
      <Footer />
    </div>
  );
};
