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
  Category: Category[];
}

interface Category {
  id: number;
  title: string;
  Project: Project[];
}

export const EditProject = ({}) => {
  let params = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setGit] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");

  const [project, setProject] = useState<Project[]>([]);
  const [categories, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const asyncResponse = async () => {
      const response = await axios.get(
        `http://localhost:3000/project/${params.name}`
      );
      setProject(response.data);
      setName(project[0].name);
      setDescription(project[0].description);
      setGit(project[0].git_url);
    };

    const asyncResponseAll = async () => {
      const responseAll = await axios.get("http://localhost:3000/category/");
      setCategory(responseAll.data);
    };
    try {
      asyncResponse();
      asyncResponseAll();
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }
  }, []);

  const postForm = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("git_url", url);

    
    const formJsonEdit = Object.fromEntries(formData.entries());
    console.log(formJsonEdit);
    
    const asyncResponseEdit = async () => {
      await axios.put(`http://localhost:3000/project/${params.name}`, formJsonEdit);
    };
    
    const formDataConnect = new FormData();
    formDataConnect.append("title", title1);
    
    const formJsonConnect = Object.fromEntries(formDataConnect.entries());
    console.log(formJsonConnect);

    const asyncResponseConnect = async () => {
      await axios.put(`http://localhost:3000/project/${params.name}/connect`, formJsonConnect);
    };

    const formDataDisconnect = new FormData();
    formDataDisconnect.append("title", title2);
    
    const formJsonDisconnect = Object.fromEntries(formDataDisconnect.entries());
    console.log(formJsonDisconnect);

    const asyncResponseDisconnect = async () => {
      await axios.put(`http://localhost:3000/project/${params.name}/disconnect`, formJsonDisconnect);
    };

    try {
      asyncResponseEdit();
      asyncResponseConnect();
      asyncResponseDisconnect();
      alert(
        `Le projet ${params.name} (maintenant ${formJsonEdit.name}) a été modifié avec succès.`
      );
      return window.location.assign(`http://localhost:5173/project/${formJsonEdit.name}`);
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Modifier le projet</h1>
      <form method="post">
        <label htmlFor="name">
          Nom : <br /><br />
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label htmlFor="description">
          Description : <br />
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label htmlFor="git_url">
          Lien du dépôt git : <br /><br />
          <input
            type="text"
            id="git_url"
            name="git_url"
            defaultValue={url}
            onChange={(e) => setGit(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label htmlFor="connect">
          Catégorie à lier au projet : 
          <br /><br />
          <select name="title" id="title" value={title1} onChange={e => setTitle1(e.target.value)}required>
            <option value="">Choisir une catégorie à connecter au projet</option>
            {categories.map((category) => {
              return(
                <option value={category.title}>{category.title}</option>                
              )
            })}
          </select>
        </label>
        <br /><br />
        <label htmlFor="disconnect">
          Catégorie à séparer du projet : 
          <br /><br />
          <select name="title" id="title2" value={title2} onChange={e => setTitle2(e.target.value)}required>
            <option value="">Choisir une catégorie à connecter au projet</option>
            {categories.map((category) => {
              return(
                <option value={category.title}>{category.title}</option>                
              )
            })}
          </select>
        </label>
        <br /><br />
        <button
          type="button"
          onClick={() => {
            setName("");
            setDescription("");
            setGit("");
            setTitle1("");
            setTitle2("");
          }}
        >
          Effacer
        </button>
        <button type="button" onClick={postForm}>
          Confirmer
        </button>
      </form>
      <Footer />
    </div>
  );
};
