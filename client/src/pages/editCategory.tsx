import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  git_url: string;
}

interface Category {
  id: number;
  title: string;
  Project: Project[];
}

export const EditCategory = ({}) => {
  let params = useParams();

  const [category, setCategory] = useState<Category[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const asyncResponse = async () => {
      const response = await axios.get(
        `http://localhost:3000/category/${params.name}`
      );
      setCategory(response.data);
      setTitle(category[0].title);
    };
    try {
      asyncResponse();
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }
  }, []);

  const postForm = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    // const form: HTMLFormElement = e.target as HTMLFormElement;<
    const formData = new FormData();
    formData.append("title", title);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    const asyncResponse = async () => {
      await axios.put(
        `http://localhost:3000/category/${params.name}`,
        formJson
      );
      console.log(title);
    };

    try {
      asyncResponse();
      alert(
        `La catégorie ${params.name} (maintenant ${formJson.title}) a été modifiée avec succès.`
      );
      return window.location.assign("http://localhost:5173/category");
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Modifier la catégorie</h1>
      <form method="post">
        <label htmlFor="title">
          Nom :
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <button type="button" onClick={() => setTitle("")}>
          Effacer
        </button>
        <br />
        <button type="button" onClick={postForm}>
          Confirmer
        </button>
      </form>
      <Footer />
    </div>
  );
};
