const express = require("express");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
// const { default: App } = require("../frontend/src/App");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/register", (req, res) => {
  // console.log("BODY REÇU :", req.body);

  const { nom, role, email, matricule, password } = req.body;

  if (!nom || !role || !email || !matricule || !password) {
    return res.json({ success: false, message: "Champs manquants" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = `
    INSERT INTO etudiant (nom, matricule, email, password, role)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [nom, matricule, email, hashedPassword, role],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({
            success: false,
            message: "Cet email est déjà utilisé",
          });
        }

        console.error("❌ ERREUR SQL :", err);
        return res.status(500).json({
          success: false,
          message: "Erreur serveur",
        });
      }

      console.log("✅ INSERT OK → ID :", result.insertId);
      res.json({ success: true });
    }
  );
});

// COTE LOGIN
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Champs manquants",
    });
  }

  const sql = "SELECT * FROM etudiant WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Erreur serveur",
      });
    }

    // Email inexistant
    if (results.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Email ou mot de passe incorrect",
      });
    }

    const user = results[0];

    // Comparaison mot de passe
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Email ou mot de passe incorrect",
      });
    }

    // Succès
    res.json({
      success: true,
      user: {
        id: user.id,
        nom: user.nom,
        email: user.email,
        role: user.role,
      },
    });
  });
});


app.post("/reservations", (req, res) => {
  console.log("BODY REÇU :", req.body);



  const {
    etudiant_id,
    salle_id,
    dateReservation,
    heureDebut,
    heureFin,
    statut,
  } = req.body;

  const sql = `
    INSERT INTO reservation
    (etudiant_id, salle_id, dateReservation, heureDebut, heureFin, statut)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [etudiant_id, salle_id, dateReservation, heureDebut, heureFin, statut],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: "Réservation enregistrée", id: result.insertId });
    }
  );
});



// Retourne toutes les réservations d'un étudiant
app.get("/reservations/etudiant/:id", (req, res) => {
  const etudiantId = req.params.id;

  const sql = `
    SELECT r.*, s.nom AS salle_name
    FROM reservation r
    JOIN salle s ON r.salle_id = s.id
    WHERE r.etudiant_id = ?
    ORDER BY r.dateReservation ASC, r.heureDebut ASC
  `;

  db.query(sql, [etudiantId], (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", err });
    res.json(results);
  });
});

// Supprime une réservation par son ID
app.delete("/reservations/:id", (req, res) => {
  const reservationId = req.params.id;

  const sql = "DELETE FROM reservation WHERE id = ?";

  db.query(sql, [reservationId], (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur", err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Réservation introuvable" });

    res.json({ message: "Réservation annulée avec succès" });
  });
});



app.listen(8000, () => {
  console.log("Serveur démarré sur http://localhost:8000");
});
