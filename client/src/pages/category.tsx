import axios from "axios";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

interface Project {
  id: number,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  url: string,
};

interface Category {
  id: number,
  name: string,
  project_id: number,
  project: Project[],
};

export const Category = ({}) => {

  let params = useParams();

  const [categories, setCategory] = useState<Category[]>([]);

  console.log(`http://localhost:3000/category/${params.name}/projects`);

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
        {categories.map((category, i) => {
          return(
            <div key={i}>
              <h1 className="category" key={category.name}>{category.name.replace(category.name[0], category.name[0].toUpperCase())}</h1>
              <h2 key={i}>Projets liés :</h2>
                {category.project.map((project) => {
                  return(
                    <Link to={`/project/${project.name}`}><p key={project.name}>{project.name}</p></Link>
                  );
                })
                }
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
