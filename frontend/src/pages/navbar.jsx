import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="header">
        <div className="nav-links">
          <NavLink to={"/acceuil"}>Accueil</NavLink>
          <NavLink to={"/login"}>Se connecter</NavLink>
          <NavLink to={"/register"}>Créer un compte</NavLink>
          <NavLink to={"/panier"}>Panier de réservation</NavLink>
        </div>

        <div className="menu-voir">
          <NavLink to={"/acceuil"}>Salle ▾</NavLink>

          <div className="menu-deroulant">
            <NavLink to={"/laboratoire"}>Labo</NavLink>
            <NavLink to={"/amphi"}>Amphi</NavLink>
            <NavLink to={"/salleDeCours"}>Salle de cours</NavLink>
            <NavLink to={"/salleMultimedia"}>Salle multimedia</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
