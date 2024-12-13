import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Home = ({}) => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenue sur Project Manager</h1>
      <div></div>
      <p className="instruction">
        Veuillez cliquer sur un des liens pour démarrer
      </p>
      <Footer />
    </div>
  );
};
