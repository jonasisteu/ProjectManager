import axios from "axios";
import trash from "../assets/trash.svg";
import { useParams } from "react-router";

export const DeleteProject = ({}) => {

  let params = useParams();

  const deleteProject = () => {
    const protocol = async () => {
      await axios.delete(
        `http://localhost:3000/project/${params.name}/`
      );
    };

    try {
      protocol();
      alert(`Projet supprimé avec succès.`);
      return window.location.assign("http://localhost:5173/project");
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }

  }

  return (
    <div>
      <img
        src={trash}
        alt="logo de poubelle pour supression"
        onClick={deleteProject}
      />
    </div>
  );
};

export const DeleteCategory = ({}) => {

  let params = useParams();

  const deleteCategory = () => {
    const protocol = async () => {
      await axios.delete(
        `http://localhost:3000/category/${params.name}/`
      );
    };

    try {
      protocol();
      alert(`Catégorie supprimée avec succès.`);
      return window.location.assign("http://localhost:5173/project");
    } catch {
      return window.location.assign("http://localhost:5173/error/500/");
    }

  }

  return (
    <div>
      <img
        src={trash}
        alt="logo de poubelle pour supression"
        onClick={deleteCategory}
      />
    </div>
  );
};
