// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Reservation = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const resource = state?.resource;

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [formData, setFormData] = useState({
//     dateReservation: "",
//     heureDebut: "",
//     heureFin: "",
//     statut: "En attente",
//   });

//   useEffect(() => {
//     if (!resource) {
//       navigate("/");
//     }
//   }, [resource, navigate]);

//   if (!resource) {
//     return <p>Ressource non définie</p>;
//   }

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const reservation = {
//       etudiant_id: 1,
//       salle_id: resource.id,
//       dateReservation: formData.dateReservation,
//       heureDebut: formData.heureDebut,
//       heureFin: formData.heureFin,
//       statut: formData.statut,
//     };

//     const res = await fetch("http://localhost:8000/reservations", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(reservation),
//   });

//   if (!res.ok) {
//     alert("Erreur lors de l'enregistrement");
//     return;
//   }

//   alert("Réservation enregistrée !");
//   navigate(-1);
// };

//   const handleClose = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       <div className="form-container">
//         <h2>
//           Réservation : {resource.type} – {resource.name}
//         </h2>

//         <form onSubmit={handleSubmit} className="reservation-form">
//           <label>Date</label>
//           <input
//             type="date"
//             name="dateReservation"
//             value={formData.dateReservation}
//             onChange={handleChange}
//             required
//           />

//           <label>Heure début</label>
//           <input
//             type="time"
//             name="heureDebut"
//             value={formData.heureDebut}
//             onChange={handleChange}
//             required
//           />

//           <label>Heure fin</label>
//           <input
//             type="time"
//             name="heureFin"
//             value={formData.heureFin}
//             onChange={handleChange}
//             required
//           />

//           <label>Statut</label>
//           <select name="statut" value={formData.statut} onChange={handleChange}>
//             <option>En attente</option>
//             <option>Confirmé</option>
//           </select>

//           <button type="submit" className="btn-reserver">
//             Confirmer
//           </button>
//           <button type="button" className="btn-reserver" onClick={handleClose}>
//             Annuler
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Reservation;

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Reservation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const resource = state?.resource;

  const [formData, setFormData] = useState({
    dateReservation: "",
    heureDebut: "",
    heureFin: "",
    statut: "En attente",
  });

  useEffect(() => {
    if (!resource) {
      navigate("/acceuil");
    }
  }, [resource, navigate]);

  if (!resource) return <p>Ressource non définie</p>;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récupère l'utilisateur connecté depuis localStorage
    const etudiant = JSON.parse(localStorage.getItem("etudiant"));

    if (!etudiant) {
      alert("Utilisateur non connecté");
      // Redirige vers login et passe la page actuelle comme "from"
      navigate("/login", { state: { from: "/reservation" } });
      return;
    }

    if (!etudiant.id) {
      alert("Impossible de récupérer votre identifiant, reconnectez-vous.");
      navigate("/login");
      return;
    }

    const reservation = {
      etudiant_id: etudiant.id,
      salle_id: resource.id,
      dateReservation: formData.dateReservation,
      heureDebut: formData.heureDebut,
      heureFin: formData.heureFin,
      statut: formData.statut,
    };

    try {
      const res = await fetch("http://localhost:8000/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservation),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Erreur serveur :", errorData);
        alert("Erreur lors de l'enregistrement");
        return;
      }

      alert("Réservation enregistrée !");
      navigate("/panier"); // retourne à la page d'accueil après réservation
    } catch (err) {
      console.error(err);
      alert("Erreur réseau");
    }
  };

  const handleClose = () => navigate(-1);

  return (
    <div className="form-container">
      <h2>
        Réservation : {resource.type} – {resource.name}
      </h2>

      <form onSubmit={handleSubmit} className="reservation-form">
        <label>Date</label>
        <input
          type="date"
          name="dateReservation"
          value={formData.dateReservation}
          onChange={handleChange}
          required
        />

        <label>Heure début</label>
        <input
          type="time"
          name="heureDebut"
          value={formData.heureDebut}
          onChange={handleChange}
          required
        />

        <label>Heure fin</label>
        <input
          type="time"
          name="heureFin"
          value={formData.heureFin}
          onChange={handleChange}
          required
        />

        <label>Statut</label>
        <select name="statut" value={formData.statut} onChange={handleChange}>
          <option>En attente</option>
          <option>Confirmé</option>
        </select>

        <button type="submit">Confirmer</button>
        <button type="button" onClick={handleClose}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default Reservation;
