import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { Categories } from "./pages/allCategories";
import { Error500 } from "./pages/error500";
import { Projects } from "./pages/allProjects";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/category/:name" element={<Categories />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/error/500" element={<Error500 />} />
    </Routes>
  </BrowserRouter>
);
