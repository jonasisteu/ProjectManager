import { Link } from "react-router";
import projectManager from "../assets/projectmanager.svg";

export const Navbar = ({}) => {
  return (
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
  );
};
