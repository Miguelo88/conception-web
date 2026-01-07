import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
const Laboratoire = () => {
  const navigate = useNavigate();
  return (
    <div className="laboratoire">
      <Navbar />

      <div className="page-catalogue">
        <h1 className="titre-page">Catalogue des laboratoires</h1>

        <div className="catalogue">
          <div className="classe-card">
            <img src="classe/labo3.jpg" alt="Lab A" />
            <h2>Lab A</h2>
            <p>Grande salle équipée, capacité 80 étudiants.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Laboratoire",
            name: "lab A",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div className="classe-card">
            <img src="classe/lab1.jpg" alt="Lab B" />
            <h2>Lab B</h2>
            <p>Salle climatisée, idéale pour examens.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Laboratoire",
            name: "lab B",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div className="classe-card">
            <img src="classe/lab4.jpg" alt="Lab C" />
            <h2>Lab C</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Laboratoire",
            name: "lab C",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div className="classe-card">
            <img src="classe/lab5.jpg" alt="Lab D" />
            <h2>Lab D</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Laboratoire",
            name: "lab D",
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

   

      <Footer />
    </div>
  );
};

export default Laboratoire;
