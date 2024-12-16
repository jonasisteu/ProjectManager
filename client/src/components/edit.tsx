import { Link } from "react-router";
import pencil from "../assets/pencil.svg";
import { useParams } from "react-router";


export const ButtonEditProject = ({}) => {
  
  let params = useParams();

  return (
    <Link to={`/project/${params.name}/edit`}>
    <img src={pencil} alt="image de crayon pour éditer" />
    </Link>
  )
};

export const ButtonEditCategory = ({}) => {

  let params = useParams();

  return (
    <Link to={`/category/${params.name}/edit`}>
    <img src={pencil} alt="image de crayon pour éditer" />
    </Link>
  )
};
