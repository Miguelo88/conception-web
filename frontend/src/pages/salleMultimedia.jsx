import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const SalleMultimedia = () => {
  const navigate = useNavigate();
  return (
    <div className="multimedia">
      <Navbar />
      <div class="page-catalogue">
        <h1 class="titre-page">Catalogue des salles multimedias</h1>
        <div class="catalogue">
          {/* <!-- Exemple de carte --> */}
          <div class="classe-card">
            <img src="classe/info.jpg" alt="Classe A" />
            <h2>salle 1</h2>
            <p>Grande salle équipée, capacité 80 étudiants.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle Multimedia",
            name: "Salle 1",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/info1.jpg" alt="Classe B" />
            <h2>salle 2</h2>
            <p>Salle climatisée, idéale pour examens.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle Multimedia",
            name: "Salle 2",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/info3.jpg" alt="Classe C" />
            <h2>salle 3</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle Multimedia",
            name: "Salle 3",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SalleMultimedia;
