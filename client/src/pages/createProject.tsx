import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";

interface Category {
  id: number;
  title: string;
}

export const CreateProject = ({}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setGit] = useState('');
  const [title, setTitle] = useState('');

  const [categories, setCategory] = useState<Category[]>([]);

  const postForm = (e: React.FormEvent<EventTarget>) => {

    e.preventDefault();
    
    // const form: HTMLFormElement = e.target as HTMLFormElement;<
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('git_url', url);
    formData.append('title', title)


    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    const asyncResponse = async () => {
      await axios.post("http://localhost:3000/project", formJson);
    };

    try {
      asyncResponse();
      alert(`Le projet ${formJson.name} a été créé avec succès.`);
      return window.location.assign("http://localhost:5173/project");

    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }
  };


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
      <h1>Créer un projet</h1>
      <form method="post">
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom du projet"
            value={name}
            onChange={e=> setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="description">
          <textarea
            id="description"
            name="description"
            placeholder="Description du projet"
            value={description}
            onChange={e=> setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="git_url">
          Lien du dépôt git : <br />
          <input
            type="text"
            id="git_url"
            name="git_url"
            placeholder="API de Gestion de Projets"
            value={url}
            onChange={e=> setGit(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="title">
          Le lier à une catégorie : <br />
          <select name="title" id="title" value={title} onChange={e => setTitle(e.target.value)}required>
            <option value="">Choisir une catégorie à connecter au projet</option>
            {categories.map((category) => {
              return(
                <option value={category.title}>{category.title}</option>                
              )
            })}
          </select>
        </label>
        <br />
        <button type="button" onClick={() => {
          setName('');
          setDescription('');
          setGit('');
          setTitle('');
        }}>Effacer</button>
        <button type="button" onClick={postForm}>
          Créer le projet
        </button>
      </form>
      <Footer />
    </div>
  );
};
