// import React from "react";

// const ModalReservation = ({ isOpen, onClose, amphi }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Réserver {amphi}</h2>

//         <form className="reservation-form">
//           <label>Jour</label>
//           <input type="text" placeholder="Ex: Lundi" />

//           <label>Date de début</label>
//           <input type="date" />

//           <label>Date de fin</label>
//           <input type="date" />

//           <label>Statut</label>
//           <select>
//             <option>En attente</option>
//             <option>Confirmé</option>
//           </select>

//           <div className="modal-actions">
//             <button type="submit" className="btn-confirm">
//               Confirmer
//             </button>

//             <button
//               type="button"
//               className="btn-cancel"
//               onClick={onClose}
//             >
//               Annuler
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalReservation;
