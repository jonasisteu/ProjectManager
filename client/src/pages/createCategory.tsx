import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useState } from "react";
import axios from "axios";

export const CreateCategory = ({}) => {
  const [title, setTitle] = useState('');

  const postForm = (e: React.FormEvent<EventTarget>) => {

    e.preventDefault();
    
    // const form: HTMLFormElement = e.target as HTMLFormElement;<
    const formData = new FormData();
    formData.append('title', title);


    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    
    const asyncResponse = async () => {
      await axios.post("http://localhost:3000/category", formJson);
      console.log(title);
    };

    try {
      asyncResponse();
      alert(`La catégorie ${formJson.title} a été créé avec succès.`);
      return window.location.assign("http://localhost:5173/category");
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Créer une catégorie</h1>
      <form method="post">
        <label htmlFor="title">
          Nom :
          <input
            type="text"
            id="title"
            name="title"
            placeholder="API de Gestion de Projets"
            value={title}
            onChange={e=> setTitle(e.target.value)}
            required
          />
        </label>
        <button type="button" onClick={() => setTitle('')}>Effacer</button>
        <br />
        <button type="button" onClick={postForm}>
          Créer la catégorie
        </button>
      </form>
      <Footer />
    </div>
  );
};
