import { useEffect, useState } from "react";
import "./panierReservations.css";
import Navbar from "./navbar";
import Footer from "./footer";

const PanierReservations = () => {
  const [reservations, setReservations] = useState([]);
  const etudiant = JSON.parse(localStorage.getItem("etudiant"));

  useEffect(() => {
    if (!etudiant) return;

    const fetchReservations = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/reservations/etudiant/${etudiant.id}`
        );
        if (!res.ok) throw new Error("Impossible de récupérer les réservations");
        const data = await res.json();
        setReservations(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReservations();
  }, [etudiant]);

  if (!etudiant) return <p>Veuillez vous connecter pour voir vos réservations.</p>;

   // Fonction pour annuler une réservation
  const handleCancel = async (reservationId) => {
    if (!window.confirm("Voulez-vous vraiment annuler cette réservation ?")) return;

    try {
      const res = await fetch(
        `http://localhost:8000/reservations/${reservationId}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error("Erreur lors de l'annulation");

      // Met à jour l'état pour enlever la réservation annulée
      setReservations(reservations.filter((r) => r.id !== reservationId));
      alert("Réservation annulée !");
    } catch (err) {
      console.error(err);
      alert("Impossible d'annuler la réservation");
    }
  };


  return (
    <div className="panier-container">
        <Navbar />
      <h2>Mes Réservations</h2>
      {reservations.length === 0 ? (
        <p>Aucune réservation pour le moment.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Salle</th>
              <th>Date</th>
              <th>Heure début</th>
              <th>Heure fin</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.id} className={r.statut === "Confirmé" ? "confirmé" : "en-attente"}>
                <td>{r.salle_name}</td>
                <td>{r.dateReservation}</td>
                <td>{r.heureDebut}</td>
                <td>{r.heureFin}</td>
                <td>{r.statut}</td>
                 <td>
                  <button onClick={() => handleCancel(r.id)}>Annuler</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer />
    </div>
  );
};

export default PanierReservations;
