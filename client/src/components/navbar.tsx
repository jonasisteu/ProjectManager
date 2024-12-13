import { Link } from "react-router";
import projectManager from "../assets/projectmanager.svg";

export const Navbar = ({}) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={'/'}>
          <img
            src={projectManager}
            className="logo project"
            alt="Project Manager logo"
          />
          <h1 className="name">Project Manager</h1>
        </Link>
      </div>
      <ul>
        <Link to={'/project'}><li>Projets</li></Link>
        <Link to={'/category'}><li>Categories</li></Link>
      </ul>
    </div>
  );
};
