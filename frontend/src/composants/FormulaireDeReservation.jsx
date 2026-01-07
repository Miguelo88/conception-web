// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "../pages/navbar";
// import Footer from "../pages/footer";

// const FormulaireDeReservation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const amphi = location.state?.amphi || "";

//   const [formData, setFormData] = useState({
//     jour: "",
//     dateDebut: "",
//     dateFin: "",
//     statut: "En attente",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Réservation :", {
//       amphi,
//       ...formData,
//     });

//     alert("Réservation enregistrée !");
//     navigate("/amphi");
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="form-container">
//         <h2>Réserver {amphi}</h2>

//         <form onSubmit={handleSubmit} className="reservation-form">
//           <label>Jour</label>
//           <input
//             type="text"
//             name="jour"
//             placeholder="Ex: Lundi"
//             value={formData.jour}
//             onChange={handleChange}
//             required
//           />

//           <label>Date de début</label>
//           <input
//             type="date"
//             name="dateDebut"
//             value={formData.dateDebut}
//             onChange={handleChange}
//             required
//           />

//           <label>Date de fin</label>
//           <input
//             type="date"
//             name="dateFin"
//             value={formData.dateFin}
//             onChange={handleChange}
//             required
//           />

//           <label>Statut</label>
//           <select
//             name="statut"
//             value={formData.statut}
//             onChange={handleChange}
//           >
//             <option>En attente</option>
//             <option>Confirmé</option>
//           </select>

//           <button type="submit" className="btn-reserver">
//             Confirmer la réservation
//           </button>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default FormulaireDeReservation;
