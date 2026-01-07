import { NavLink } from "react-router-dom";
import Footer from "./footer";
// import videoV1 from "../classe/v1.mp4"

const Home = () => {
  return (
    <div className="home">
      <video autoplay muted loop id="bg-video">
        <source src="classe/v1.mp4"  type="video/mp4" />
      </video>
   
      {/* <!-- Présentation --> */}
      <section id="presentation1">
        <h1>Bienvenue sur le portail de réservation</h1>
        <p>
          Réservez vos salles de cours, séminaires et événements en quelques
          clics.
        </p>
        {/* <a href="reservation.html" class="button big">
          Commencer
        </a> */}

        <NavLink to={"/login"} className="button big">
    
          Commencer
        </NavLink>

        <NavLink to={"/acceuil"} className="button big">
        
          aller a l'acceuil !!!
        </NavLink>
      </section>

      {/* <!-- Pourquoi nous choisir --> */}
      <section id="why-us">
        <div class="presentation2">
          <h2>Pourquoi nous choisir ?</h2>
          <div class="flex flex-3">
            <div class="card">
              <i class="fas fa-bolt fa-2x"></i>
              <h3>Rapidité</h3>
              <p>
                Plus besoin de chercher une salle libre au dernier moment : tout
                est centralisé et visible en ligne.
              </p>
            </div>

            <div class="card">
              <i class="fas fa-mouse-pointer fa-2x"></i>
              <h3>Simplicité</h3>
              <p>
                La réservation se fait en quelques clics, sans passer par des
                démarches administratives longues.
              </p>
            </div>

            <div class="card">
              <i class="fas fa-chalkboard fa-2x"></i>
              <h3>Équipements adaptés</h3>
              <p>
                Les salles peuvent être équipées (tableaux, projecteurs, Wi-Fi)
                pour favoriser l'efficacité collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Nos services --> */}
      <section id="services">
        <div class="inner">
          <h2>Nos services</h2>
          <div class="flex flex-4">
            <div class="card">
              <i class="fas fa-calendar-check fa-2x"></i>
              <h3>Suivi et flexibilité</h3>
              <p>
                Tu peux gérer tes réservations, les modifier ou les annuler
                facilement.
              </p>
            </div>

            <div class="card">
              <i class="fas fa-tasks fa-2x"></i>
              <h3>Organisation optimale</h3>
              <p>
                Planifie tes sessions de travail à l'avance et évite les
                imprévus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA --> */}
      {/* <section id="cta">
        <a href="reservation.html" class="button big">
          Réservez maintenant
        </a>
      </section> */}

      <Footer/>
    </div>
  );
};

export default Home;
