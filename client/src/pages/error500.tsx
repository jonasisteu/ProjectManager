import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export const Error500 = ({}) => {
    return(
        <div>
            <Navbar />
            <h1>Oops ! (Erreur 500)</h1>
            <p>Il semblerait qu'il y ait une erreur du serveur !</p>
            <Footer />
        </div>
    );
};