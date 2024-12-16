import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { Categories } from "./pages/allCategories";
import { Error500 } from "./pages/error500";
import { Projects } from "./pages/allProjects";
import { Category } from "./pages/category";
import { Project } from "./pages/project";
import { CreateCategory } from "./pages/createCategory";
import { CreateProject } from "./pages/createProject";
import { EditCategory } from "./pages/editCategory";
import { EditProject } from "./pages/editProject";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/category/create" element={<CreateCategory />} />
      <Route path="/category/:name" element={<Category />} />
      <Route path="/category/:name/edit" element={<EditCategory />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/project/create" element={<CreateProject />} />
      <Route path="/project/:name" element={<Project />} />
      <Route path="/project/:name/edit" element={<EditProject />} />
      <Route path="/error/500" element={<Error500 />} />
    </Routes>
  </BrowserRouter>
);
