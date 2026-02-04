const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const Joi = require('joi');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
mySQLConnection = "ERROR 503";
kalenderDatenbankConection = "ERROR 503";

// CONFIGRUATION THAT IS NEEDED THAT THIS WORKS //

// SQL Details
const SQLtable = "[Enter here the Table name where Login Details are stored]";
const SQLtable2 = "[Enter here the Table name where Calender Details are stored]"
var con = mysql.createConnection({
  host: "[Enter the host name, standard is: localhost]",
  user: "[Enter the username, standard is: root | Its not recommended to use root due to security reasons]",
  password: "[Enter the password of the user]",
  database: "[Enter the database which you will be using]"
});

const gueltigeKuerzel = ["9a", "9b", "9c", "9d"]; // <- Enter here the Class abbreviations, a given example is entered.

// Connecting to SQL table //

con.connect(function(err) {
  if (err) throw (err);
  if (err) {console.error("ConnectionError"); mySQLConnection = "ERROR 500 / ERROR 503"; kalenderDatenbankConection = "ERROR 500 / ERROR 503"
  }
  console.log("Connected!");
  mySQLConnection = "Code 200";
  kalenderDatenbankConection = "Code 200";
});


app.use(cors());
app.use(express.json());

// Connection check for SQL Database

app.get('/mysql/connection', (req, res) =>{
    var method = req.method;
    if (method == "GET") {
    console.log(mySQLConnection);
    res.json(mySQLConnection);
    }
    if (method !== "GET") {
      console.log(method+" =False Method 405");
      res.status(405).json("Error 405, Method Not Allowed");
    return;
    }
}); 

// Register a new Account //

app.post("/mysql/regestrieren", (req, res) => {

  const { benutzername, passwort, email, kuerzel, passwortWDH } = req.body;
  let emailAngegeben = false;

  // Checking Username //

  if (!benutzername || benutzername === "") {
    return res.status(406).json("Benutzername ist Pflicht!"),
    console.log("Benutzername ist Pflicht");
  }

  if (benutzername.length > 40) {
    return res.status(431).json("Benutzername ist zu lang!"),
    console.log("Benutzername ist zu lang!");
  }

  if (benutzername.length < 5) {
    return console.log("Benutzername ist zu Kurz"),
    res.status(431).json("Benutzername ist zu kurz!");
  }

  // Checking Password //

  if (!passwort || passwort === "") {
    return res.status(406).json("Passwort ist Pflicht!"),
    console.log("Passwort ist Pflicht");
  }

  if (passwort.length < 7) {
    return res.status(406).json("Passwort ist zu kurz!"),
    console.log("Passwort ist zu kurz");
  }

  if (passwort.length > 40) {
    return res.status(431).json("Passwort ist zu lang!"),
    console.log("Passwort ist zu lang");
  }

  if (passwort !== passwortWDH) {
    return res.status(431).json("Passwort ist nicht gleich!"),
    console.log("Passwort ist nicht gleich!");
  }

  // Checking email //

  if (email && email !== "") {
    emailAngegeben = true;
    console.log(emailAngegeben);

    if (email.length > 40) {
      return res.status(431).json("Email ist zu lang!"),
      console.log("Email ist zu lang");
    }
  }

  // Checking Class abbreviations

  if (!kuerzel || kuerzel === "") {
    return res.status(406).json("Kürzel ist Pflicht!"),
    console.log("Kuerzel ist Pflicht");
  }

  if (!gueltigeKuerzel.includes(kuerzel)) {
    return res.status(406).json("Kürzel ist ungültig!"),
    console.log("Kuerzel ist ungültig");
  }

  // Checking Username //

  const sqlUser = `SELECT id FROM ${SQLtable} WHERE benutzername = ?`;
  const sqlEmail = `SELECT id FROM ${SQLtable} WHERE email = ?`;
  const sqlInsert = `
    INSERT INTO ${SQLtable}
    (benutzername, passwort, token, ADMINISTRATOR, email, kuerzel)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  con.query(sqlUser, [benutzername], (err, userResult) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Datenbankfehler");
    }

    if (userResult.length > 0) {
      return res.status(409).json("Benutzername ist bereits vergeben"),
      console.log("Benutzername ist bereits vergeben");
    }

    // Checking Email //

    if (emailAngegeben) {
      con.query(sqlEmail, [email], (err, emailResult) => {
        if (err) {
          console.error(err);
          return res.status(500).json("Datenbankfehler");
        }

        if (emailResult.length > 0) {
          return res.status(409).json("Email ist bereits vergeben"),
          console.log("Email ist bereits vergeben");
        }

        kontoErstellen();
      });
    } else {
      kontoErstellen();
    }
  });

  // Creating Account //

  function kontoErstellen() {
    const token = 0;
    const admin = false;

    con.query(
      sqlInsert,
      [benutzername, passwort, token, admin, emailAngegeben ? email : null, kuerzel],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json("Fehler beim Registrieren");
        }

        return res.status(200).json("Registrierung erfolgreich!"),
        console.log("Registrierung erfolgreich");
      }
    );
  }
});


// Sign In //

app.post("/mysql/anmelden", (req, res) =>{
const { benutzername, passwort, kuerzel} = req.body;


// Checking Username
if (benutzername.length > 40) {
  console.log("Benutzername ist zu Lang");
  res.status(431).json("Benutzername ist zu lang!");
  return;
}
if (benutzername.length < 5) {
  console.log("Benutzername ist zu Kurz");
  res.status(431).json("Benutzername ist zu kurz!");
  return;
}
if (benutzername == "") {
  console.log("Benutzername ist Pflicht");
  res.status(406).json("Benutzername ist zu Pflicht!");
  return;
}
// Checking Password
if (passwort.length > 40) {
  console.log("Passwort ist zu Lang");
  res.status(431).json("Passwort ist zu Lang!");
  return;
}
if (passwort == "") {
  console.log("Passwort ist Pflicht");
  res.status(406).json("Passwort ist zu Pflicht!");
  return;
}
// Checking Class abbreviation
if (kuerzel == "") {
  console.log("Kuerzel ist Pflicht");
  res.status(406).json("Kuerzel ist zu Pflicht!");
  return;
}
if (kuerzel.length <= 1) {
  console.log("Kuerzel ist zu klein");
  res.status(406).json("Kuerzel ist zu klein!");
  return;
}
if (kuerzel.length > 5) {
  console.log("Kuerzel ist zu lang");
  res.status(431).json("Kuerzel ist zu lang!");
  return;
}
if (!gueltigeKuerzel.includes(kuerzel)) {
    return res.status(406).json("Kürzel ist ungültig!"),
    console.log("Kuerzel ist ungültig");
  }
// Checking LogIn Details
if (kuerzel.length < 5 && kuerzel.length >= 2 && kuerzel !== "" && passwort !== "" && passwort.length < 40 && benutzername !== "" && benutzername.length < 40) {
  console.log("Alle Infos entsprechen dem vorgegebenen Schema");
  const sql = `SELECT * FROM ${SQLtable} WHERE benutzername = ? AND passwort = ?`;
  con.query(sql, [req.body.benutzername, req.body.passwort], (err, data) =>{
    if (err) {
      console.log("Datenbankfehler");
      res.status(500).json("Datenbankfehler");
      return;
    }
    if (data.length > 0) {
      console.log("Anmeldung Erfolgreich");
      res.status(200).json("Anmeldung Erfolgreich!");
      return;
    }
    else {
      console.log("Anmeldung Fehlgeschlagen");
      res.status(200).json("Anmeldung Fehlgeschlagen!");
      return;
    }
  })
} 
});

// Checking if  Calender Table is up //
app.get("/mysql/kalenderdatenbank", (req, res) =>{

if (kalenderDatenbankConection == "Code 200") {
console.log("Connection Kalender Check anfrage");
const sqlCheckKalender = `SELECT * from ${SQLtable2} WHERE tag = ? and monat = ? and jahr = ? and halbjahr = ? and vollstaendigesdatum = ?`;
const sqlCheckTag = "Servus";
const sqlCheckMonat = "Servus";
const sqlCheckJahr = "Servus";
const sqlCheckHalbjahr = 1;
const sqlCheckVollstaendigesDatum = "Servus.Servus.Servus, Halbjahr: 1";

con.query(sqlCheckKalender, [sqlCheckTag, sqlCheckMonat, sqlCheckJahr, sqlCheckHalbjahr, sqlCheckVollstaendigesDatum], (err, data) =>{
    if (err) {
      console.log("Datenbankfehler, Service Unavailable: 503");
      res.status(200).json("Datenbankfehler, Service Unavailable: 503");
      console.log("Error:",err, "Data:", data);
      return;
    }
    if (data.length > 0) {
      console.log("Server und Datenbank sind erreichbar, Datenbank und Table Kalender sind nicht down");
      res.status(200).json("Code 200, Datenbank und Server sind nicht down");
      return;
    }
    else {
      console.log("Unbekannter Interner Datenbankfehler:", data, err);
      res.status(200).json("Unbekannter Interner Datenbankfehler");
      return;
    }
  })
} else if (kalenderDatenbankConection !== "Code 200" && kalenderDatenbankConection == "ERROR 503" && kalenderDatenbankConection == "Error 503") {
    console.log("Datenbankfehler, Service Unavailable: 503");
      res.status(200).json("Datenbankfehler, Service Unavailable: 503");
      return;
  }
  else {
    console.log("Unbekannter Interner Datenbankfehler");
    res.status(200).json("Unbekannter Interner Datenbankfehler");
    return;
  }
});



// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`SERVER: Belauscht Port ${port}`));


