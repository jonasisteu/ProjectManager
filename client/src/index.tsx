import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { Category } from "./pages/allCategories";
import { Error500 } from "./pages/error500";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/error/500" element={<Error500 />} />
    </Routes>
  </BrowserRouter>
);
