// // import { NavLink, useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [error, setError] = useState("");

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const res = await axios.post("http://localhost:8000/api/login", {
//   //       email,
//   //       password
//   //     });

//   //     if (res.data.success) {
//   //       console.log("Utilisateur connecté :", res.data.user);

//   //       // (plus tard) sauvegarde session
//   //       localStorage.setItem("user", JSON.stringify(res.data.user));

//   //       navigate("/acceuil"); // ou autre page
//   //     }
//   //   } catch (err) {
//   //     setError(err.response?.data?.message || "Erreur de connexion");
//   //   }
//   // };

//   const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//       const res = await fetch("http://localhost:8000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || "Erreur de connexion");
//         return;
//       }

//       // Stocke l'utilisateur complet dans localStorage, y compris l'ID
//       localStorage.setItem("etudiant", JSON.stringify({
//         id: data.id,
//         nom: data.nom,
//         email: data.email,
//         role: data.role
//       }));

//       navigate("/dashboard"); // redirige vers le dashboard ou page d'accueil
//     } catch (err) {
//       console.error(err);
//       alert("Erreur serveur");
//     }
//   };

//   return (
//     <div className="login">
//       <div className="page-login">
//         <div className="wrapper">
//           <form className="neon-form" onSubmit={handleLogin}>
//             <h2>Connexion</h2>

//             {error && <p style={{ color: "red" }}>{error}</p>}

//             <div className="input-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Entrez votre email"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label>Mot de passe</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Entrez votre mot de passe"
//                 required
//               />
//             </div>

//             <input type="submit" className="btn" value="Se connecter" />

//             <p>
//               Pas de compte ?{" "}
//               <NavLink to="/register" className="go">
//                 Créer un compte
//               </NavLink>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // import { NavLink } from "react-router-dom";
// // // import Footer from "./footer";

// // const Login = () => {
// //   return (
// //     <div className="login">
// //       <div className="page-login">
// //         <div className="wrapper">
// //           {/* <!-- Formulaire --> */}
// //           <form className="neon-form">
// //             <h2>Connexion</h2>

// //             <div className="input-group">
// //               <label>Email</label>
// //               <input type="email" placeholder="Entrez votre email" required />
// //             </div>

// //             <div className="input-group">
// //               <label>Mot de passe</label>
// //               <input
// //                 type="password"
// //                 placeholder="Entrez votre mot de passe"
// //                 required
// //               />
// //             </div>

// //             <input type="submit" className="btn" value="Se connecter" />
// //             <p>
// //               Pas de compte ?{" "}
// //               {/* <a href="register.html" className="go">
// //                 Créer un compte
// //               </a> */}

// //                 <NavLink to={"/register"} className="go" >  Créer un compte</NavLink>

// //             </p>
// //           </form>
// //         </div>
// //       </div>
// //       {/* <Footer/> */}
// //     </div>
// //   );
// // };

// // export default Login;

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/acceuil";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur de connexion");
        return;
      }

      // Stocke l'utilisateur complet dans localStorage, y compris l'ID
      localStorage.setItem(
        "etudiant",
        JSON.stringify({
          id: data.id,
          nom: data.nom,
          email: data.email,
          role: data.role,
        })
      );

      // Redirige vers la page d'origine ou la page d'accueil
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      alert("Erreur serveur");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
