import axios from "axios";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import pencil from "../assets/pencil.svg";

interface Category {
  id: number;
  title: string;
}

export const Categories = ({}) => {
  const [categories, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const asyncResponse = async () => {
      const response = await axios.get("http://localhost:3000/category/");
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
        <Link to="/category/create"><p>Créer une catégorie</p></Link>
        <p>Voici toutes les catégories de projets à disposition :</p>
        <ul className="listnavul">
          {categories.map((category) => {
            return (
              <div>
                <Link key={category.title} to={`/category/${category.title}`}>
                  <li className="listnavli" key={category.title}>
                    {category.title}
                  </li>
                </Link>
                <Link to={`/category/${category.title}/edit`}>
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
