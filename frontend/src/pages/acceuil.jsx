// import Home from "./home";
import Navbar from "./navbar";
import Footer from "./footer";

const Acceuil = () => {
  return (
    <div className="acceuil">
      <Navbar />
      {/* <Home /> */}
      
      <section id="spaces">
        <h2>Nos Espaces</h2>  
        <div class="flex flex-4">
          <div class="space-card">
            <img src="classe/p1.jpg" alt="Salle 1" />
            <h3>Salle de cours</h3>
            <p>capacite moyenne</p>
          </div>
          <div class="space-card">
            <img src="classe/p2.jpg" alt="Salle 2" />
            <h3>Salle 2</h3>
            <p>suivez l'Exemple</p>
          </div>
          <div class="space-card">
            <img src="classe/p3.jpg" alt="Salle 3" />
            <h3>salle multimedia</h3>
          </div>
          <div class="space-card">
            <img src="classe/p4.jpg" alt="Salle 4" />
            <h3>Amphi</h3>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Acceuil;
