import axios from "axios";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { DeleteCategory } from "../components/delete";

interface Project {
  id: number,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  git_url: string,
};

interface Category {
  id: number,
  title: string,
  Project: Project[],
};

export const Category = ({}) => {

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
        <h1>Catégories</h1>
          <div>
            {category.map((category) => {
              return(
                <div>
                  <div>
                    <h1 className="category" key={category.title}>{category.title}</h1>
                    <DeleteCategory />
                  </div>
                  <h2>Projets liés :</h2>
                  <div>
                    {category.Project.map((project) => {
                      return(
                        <ul key={project.name}>
                          <Link key={project.name} to={`/project/${project.name}`}><li key={project.name}>{project.name}</li></Link>
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
