import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const SalleDeCours = () => {
  const navigate = useNavigate();
  return (
    <div className="salleDeCours">
      <Navbar />
      <div class="page-catalogue">
        <h1 class="titre-page">Catalogue des Classes</h1>
        <div class="catalogue">
          {/* <!-- Exemple de carte --> */}
          <div class="classe-card">
            <img src="classe/c1.jpg" alt="Classe A" />
            <h2>Classe A</h2>
            <p>Grande salle équipée, capacité 80 étudiants.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe A",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/c.jpg" alt="Classe B" />
            <h2>Classe B</h2>
            <p>Salle climatisée, idéale pour examens.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe B",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/c2.jpg" alt="Classe C" />
            <h2>Classe C</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe C",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/c3.jpg" alt="Classe C" />
            <h2>Classe D</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe D",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/c4.jpg" alt="Classe C" />
            <h2>Classe E</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "SalSalle De Cours",
            name: "classe E",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/c5.jpg" alt="Classe C" />
            <h2>Classe F</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe F",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/c6.jpg" alt="Classe C" />
            <h2>Classe G</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe G",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/c7.jpg" alt="Classe C" />
            <h2>Classe H</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe H",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div class="classe-card">
            <img src="classe/s8.jpg" alt="Classe C" />
            <h2>Classe I</h2>
            <p>Salle multifonction avec projecteur.</p>
           <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe I",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>
          <div class="classe-card">
            <img src="classe/c9.jpg" alt="Classe C" />
            <h2>Classe J</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Salle De Cours",
            name: "classe J",
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

export default SalleDeCours;



