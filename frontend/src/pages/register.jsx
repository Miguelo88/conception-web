import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    matricule: "",
    email: "",
    role: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        // Remplacez par votre URL API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Inscription réussie, redirection vers accueil
        navigate("/acceuil"); // ou '/accueil'
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Erreur lors de l'inscription");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="page-login">
        <div className="wrapper">
          <form className="neon-form" onSubmit={handleSubmit}>
            <h2>Créer un compte</h2>

            {error && <div className="error-message">{error}</div>}
            <div className="input-group">
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Entrez votre nom"
                required
              />
            </div>

            <div className="input-group">
              <label>Matricule</label>
              <input
                type="password"
                name="matricule"
                value={formData.matricule}
                onChange={handleChange}
                placeholder="Votre Matricule"
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Entrez votre email"
                required
              />
            </div>

            <div className="input-group">
              <label>Mot de passe</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Votre mot de passe"
                required
              />
            </div>

            <div className="input-group">
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="quel est votre statut?"
                required
              />
            </div>

            <input
              type="submit"
              className="btn"
              value={loading ? "Enregistrement..." : "Créer le compte"}
              disabled={loading}
            />

            <p>
              vous avez deja un compte ?{" "}
              <NavLink to={"/login"} className="go">
                {" "}
                Revenir à la page connexion
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Register;
