const Footer = () => {
    return (  
        <div className="footer">
            
    <div className="footer-container">

      {/* <!-- Logo / Nom de l’université --> */}
      <div className="footer-brand">
        <h2>Université adventiste</h2>
        <p>Portail de réservation des salles et espaces universitaires.</p>
      </div>

      {/* <!-- Liens rapides --> */}
      {/* <div className="footer-links">
        <h3>Liens rapides</h3>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="voir reservation.html">Réserver une salle</a></li>
          <li><a href="login.html">Se connecter</a></li>
        </ul>
      </div> */}

      {/* <!-- Réseaux sociaux --> */}
      <div className="footer-social">
        <h3>Suivez-nous</h3>
        <a href="{}"><i className="fab fa-facebook-f"></i></a>
        <a href="{}"><i className="fab fa-twitter"></i></a>
        <a href="{}"><i className="fab fa-linkedin-in"></i></a>
        <a href="{}"><i className="fab fa-instagram"></i></a>
      </div>

    </div>

    {/* <!-- Mentions légales / copyright --> */}
    <div className="footer-bottom">
      <p>&copy; 2025 Université adventiste cosendai. Tous droits réservés. 
        <a href="mentions.html">Mentions légales</a>
      </p>
    </div>
  
        </div>
    );
}
 
export default Footer;