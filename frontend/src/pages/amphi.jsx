// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./footer";


// import ModalReservation from "../composants/ModalReservation";
// import ModalReservation from "../composants/ModalReservation";

const Amphi = () => {
  // UTILISATION DU ModalReservation ET QUI FONCTIONNE 
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedAmphi, setSelectedAmphi] = useState("");

  // const openModal = (amphi) => {
  //   setSelectedAmphi(amphi);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  const navigate = useNavigate();
  return (
    <div className="amphi">
      <Navbar />
      <div className="page-catalogue">
        <h1 className="titre-page">Catalogue des Amphis</h1>
        <div className="catalogue">
          {/* <!-- Exemple de carte --> */}
          <div className="classe-card">
            <img src="classe/emfi6.jpg" alt="Classe A" />
            <h2>Amphi 1</h2>
            <p>Grande salle équipée, capacité 80 étudiants.</p>
            

           <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            id: 1,
            type: "Amphi",
            name: "Amphi 1",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div className="classe-card">
            <img src="classe/enfi1.jpg" alt="Classe B" />
            <h2>Amphi 2</h2>
            <p>Salle climatisée, idéale pour examens.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            id: 2,
            type: "Amphi",
            name: "Amphi 2",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div className="classe-card">
            <img src="classe/enfi2.jpg" alt="Classe C" />
            <h2>Amphi 3</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            id: 3,
            type: "Amphi",
            name: "Amphi 3",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>

          <div className="classe-card">
            <img src="classe/enfi3.jpg" alt="Classe C" />
            <h2>Amphi 4</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Amphi",
            name: "Amphi 4",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>
          <div className="classe-card">
            <img src="classe/enfi4.jpg" alt="Classe C" />
            <h2>Amphi 5</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Amphi",
            name: "Amphi 5",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>
          <div className="classe-card">
            <img src="classe/enfi5.jpg" alt="Classe C" />
            <h2>Amphi 6</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Amphi",
            name: "Amphi 6",
          },
        },
      })
    }
      >
        Réserver
      </button>
          </div>
          <div className="classe-card">
            <img src="classe/enfi6.jpg" alt="Classe C" />
            <h2>Amphi 7</h2>
            <p>Salle multifonction avec projecteur.</p>
            <button
        className="btn-reserver"    onClick={() =>
          navigate("/reservation", {
        state: {
          resource: {
            type: "Amphi",
            name: "Amphi 7",
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

export default Amphi;
