const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Manya@111",
  database: "portfolio"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.post("/submit-form", (req, res) => {
  const {first_name, surname, phone, email } = req.body;
  console.log("req",req.body);
  const sql = "INSERT INTO contacts (first_name, surname, phone, email) VALUES (?, ?, ?, ?)";
  db.query(sql, [first_name, surname, phone, email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Database insertion failed."});
    } else {
      res.json({ message: "Data inserted successfully!", id: result.insertId });
    }
});
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
