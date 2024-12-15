import axios from "axios";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
        <p>Voici toutes les catégories de projets à disposition :</p>
        <ul className="listnavul">
          {categories.map((category) => {
            return (
              <Link key={category.title} to={`/category/${category.title}`}>
                <li className="listnavli" key={category.title}>
                  {category.title.replace(
                    category.title[0],
                    category.title[0].toUpperCase()
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
