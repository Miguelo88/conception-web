import "./App.css";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Acceuil from "./pages/acceuil";
// import FormulaireDeReservation from "./composants/FormulaireDeReservation";
import Laboratoire from "./pages/laboratoire";
import Amphi from "./pages/amphi";
import SalleDeCours from "./pages/salleDeCours";
import SalleMultimedia from "./pages/salleMultimedia";
import Reservation from "./pages/reservation";
import PanierReservations from "./pages/panierReservations";

// import FormulaireDeReservation from "./pages/formulaireReservation";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/acceuil" element={<Acceuil />} />
        <Route path="/reservation" element={<Reservation />} />
        {/* <Route path="/reservation" element={<FormulaireDeReservation />} /> */}

        {/* <Route path="/voirReservations" element={<Reservation />} /> */}
        <Route path="/laboratoire" element={<Laboratoire />} />
        <Route path="/amphi" element={<Amphi />} />
        <Route path="/panier" element={<PanierReservations />} />
        <Route path="/salleDeCours" element={<SalleDeCours />} />
        
        <Route path="/salleMultimedia" element={<SalleMultimedia />} />
        
        {/* <Route path="/formulaireReservation" element={<FormulaireDeReservation />} /> */}
        
      </Routes>

    </div>
  );
}

export default App;
