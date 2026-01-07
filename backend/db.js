const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reserversalle"
});

db.connect(err => {
  if (err) {
    console.log("❌ Erreur MySQL :", err);
  } else {
    console.log("✅ MySQL connecté");
  }
});

module.exports = db;
