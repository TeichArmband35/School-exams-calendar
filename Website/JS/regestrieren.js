// Variablen auf Standart bringen:
var timer = 1;
regestrierenDARF = 0;
linkEHRE = 0;
mitteilung = 0;
cooldown2 = 0;
cooldown3 = 0;
warnstufeAlteMitteilung = null;
stackOverflowPROT = 0;
COUNTERstackOverflowPROT = 0;
scriptBEENDEN = false;

// Zindex Richtig Stellen:
document.getElementById("Kont3").style.zIndex = "-2";
document.getElementById("Kont1").style.zIndex = "2";
document.getElementById("Kont3").style.visibility = "hidden";
document.getElementById("Kont4").style.zIndex = "-3";
document.getElementById("Kont4").style.visibility = "hidden";
document.getElementById("Kont5").style.zIndex = "-4";
document.getElementById("Kont5").style.visibility = "hidden";

// Zindex Funktionen:
function infoOFalertsHERVOR() {
  document.getElementById("Kont3").style.zIndex = "2";
  document.getElementById("Kont2").style.zIndex = "-2";
  document.getElementById("Kont3").style.visibility = "visible";
  document.getElementById("Kont4").style.zIndex = "3";
  document.getElementById("Kont4").style.visibility = "visible";
  document.getElementById("Kont5").style.zIndex = "4";
  document.getElementById("Kont5").style.visibility = "visible";
  scriptBEENDEN = true;
}

function infoOFalertsHINWEG() {
  document.getElementById("Kont3").style.zIndex = "-2";
  document.getElementById("Kont1").style.zIndex = "2";
  document.getElementById("Kont3").style.visibility = "hidden";
  document.getElementById("Kont4").style.zIndex = "-3";
  document.getElementById("Kont4").style.visibility = "hidden";
  document.getElementById("Kont5").style.zIndex = "-4";
  document.getElementById("Kont5").style.visibility = "hidden";
}

// Notification Timer bei Email RESET
function timerreset() {
  timer = 1;
}

// Error Alert Box: ROT für Errors
backgroundCOLOR();
function backgroundCOLOR() {
  document.getElementById("ErrorAlert").style.backgroundColor =
    "rgb(246, 99, 88)";
  document.getElementById("myBar").style.backgroundColor = "rgb(200, 50, 0)";
  document.getElementById("myProgress").style.backgroundColor =
    "rgb(246, 99, 88)";
}
// Error Alert Box: Gelb für Warnung
function backgroundCOLOR2() {
  document.getElementById("ErrorAlert").style.backgroundColor =
    "rgb(255, 169, 43)";
  document.getElementById("myBar").style.backgroundColor = "rgb(255, 149, 23)";
  document.getElementById("myProgress").style.backgroundColor =
    "rgb(255, 169, 43)";
}
// Error Alert Box: Grün für succsess
function backgroundCOLOR3() {
  document.getElementById("ErrorAlert").style.backgroundColor =
    "rgb(46, 184, 134)";
  document.getElementById("myBar").style.backgroundColor = "rgb(46, 150, 100)";
  document.getElementById("myProgress").style.backgroundColor =
    "rgb(46, 184, 134)";
}
// Error Alert Box: Blau für Info
function backgroundCOLOR4() {
  document.getElementById("ErrorAlert").style.backgroundColor =
    "rgb(70, 168, 245)";
  document.getElementById("myBar").style.backgroundColor = "rgb(70, 140, 220)";
  document.getElementById("myProgress").style.backgroundColor =
    "rgb(70, 168, 245)";
}

// Alert Box unsichtbar machen

document.getElementById("ErrorAlert").style.visibility = "hidden";
document.getElementById("myBar").style.visibility = "hidden";
document.getElementById("myProgress").style.visibility = "hidden";

// Alert Box sichtbar machen

function alertBoxVISIBLE() {
  document.getElementById("ErrorAlert").style.visibility = "visible";
  document.getElementById("myBar").style.visibility = "visible";
  document.getElementById("myProgress").style.visibility = "hidden";
}

// Reset All Borders

function borderRESET() {
  document.getElementById("fname").style.border = "1px solid black";
  document.getElementById("passwort").style.border = "1px solid black";
  document.getElementById("passwortWDH").style.border = "1px solid black";
  document.getElementById("kuerzel").style.border = "1px solid black";
}

// Kucken ob alles ausgefüllt ist:

document.getElementById("fname").addEventListener("keyup", function (event) {
  InputFelderAusgefuelltChecker();
});

document.getElementById("passwort").addEventListener("keyup", function (event) {
  InputFelderAusgefuelltChecker();
});

document
  .getElementById("passwortWDH")
  .addEventListener("keyup", function (event) {
    InputFelderAusgefuelltChecker();
  });

document.getElementById("kuerzel").addEventListener("keyup", function (event) {
  InputFelderAusgefuelltChecker();
});

document.getElementById("email").addEventListener("keyup", function (event) {
  InputFelderAusgefuelltChecker();
  noticeINPUTemail();
});

// Überprüfen ob Klassenkürzel richtig ist:

function check() {
  var kuerzelINPUT = document.getElementById("kuerzel").value;

  if (kuerzelINPUT.length >= 2) {
    check4();
  } else {
    return kuerzelINPUTfalsch();
  }
}

// Überprüfen ob alles ausgefüllt ist:

function InputFelderAusgefuelltChecker() {
  var benutzernameINPUT = document.getElementById("fname").value;
  var passwortINPUT = document.getElementById("passwort").value;
  var passwortINPUTwdh = document.getElementById("passwortWDH").value;
  var kuerzelINPUT = document.getElementById("kuerzel").value;
  if (
    benutzernameINPUT.length !== 0 &&
    passwortINPUT.length !== 0 &&
    passwortINPUTwdh.length !== 0 &&
    kuerzelINPUT.length !== 0
  ) {
    regestrierenDARF = 1;
    document.getElementById("submit1").style.backgroundColor =
      "rgb(0, 237, 100)";
  } else {
    regestrierenDARF = 0;
    document.getElementById("submit1").style.backgroundColor =
      "rgb(99, 99, 99)";
  }
}

function check3() {
  var benutzernameINPUT = document.getElementById("fname").value;
  var passwortINPUT = document.getElementById("passwort").value;
  var passwortINPUTwdh = document.getElementById("passwortWDH").value;
  var kuerzelINPUT = document.getElementById("kuerzel").value;
  document.getElementById("email").style.border = "1px solid black";

  if (benutzernameINPUT.length == 0) {
    document.getElementById("fname").style.border = "1px solid red";
  }
  if (passwortINPUT.length == 0) {
    document.getElementById("passwort").style.border = "1px solid red";
  }
  if (
    passwortINPUTwdh.length == passwortINPUT.length ||
    passwortINPUTwdh.length == 0
  ) {
    document.getElementById("passwortWDH").style.border = "1px solid red";
    document.getElementById("passwort").style.border = "1px solid red";
  }
  if (kuerzelINPUT.length <= 1) {
    document.getElementById("kuerzel").style.border = "1px solid red";
  }
  if (
    benutzernameINPUT.length == 0 ||
    passwortINPUT.length == 0 ||
    passwortINPUTwdh.length == 0 ||
    kuerzelINPUT.length == 0
  ) {
    nichtAusgefuellt();
  }
  if (benutzernameINPUT.length !== 0) {
    document.getElementById("fname").style.border = "1px solid black";
  }
  if (passwortINPUT.length !== 0) {
    document.getElementById("passwort").style.border = "1px solid black";
  }
  if (
    passwortINPUTwdh.length == passwortINPUT.length &&
    passwortINPUTwdh.length !== 0
  ) {
    document.getElementById("passwortWDH").style.border = "1px solid black";
  }
  if (kuerzelINPUT.length !== 0) {
    document.getElementById("kuerzel").style.border = "1px solid black";
  }
  if (regestrierenDARF == 1) {
    check();
  }
}

// Überprüfen ob datenbank da ist / Hauptserver
function check4() {
  fetch("http://localhost:3000/mysql/connection", {
    headers: {
      "Content-Type": "/mysql/connection",
    },
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netzwerk Error");
      }
      return response.json();
    })
    .then((data) => {
      if (data == "Code 200") {
        console.log("DATA IST OK");
        regestrierenVERSCHICKEN();
      }
      if (data !== "Code 200") {
        console.log("DATA IST NICHT OK");
        ErrorSQLDatenbankDOWN();
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      ErrorServerDOWN();
    });
}

// Verschiedene Alert Box Errors

function kuerzelINPUTfalsch() {
  document.getElementById("alertError").innerHTML = "Falscher Klassenkürzel";
  document.getElementById("kuerzel").style.border = "1px solid red";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Falscher Klassenkürzel"),
    (warnstufe = "Warnung"),
  );
}

function noticeINPUTemail() {
  document.getElementById("alertError").innerHTML =
    "Info: Eine Emal ist optional, jedoch Wichtig bei einer Passwort zurücksetzung";
  if (timer == 1) {
    playAudio4();
    backgroundCOLOR4();
    alertBoxVISIBLE();
    move();
    mitteilungINSERT(
      (mittelungGRUND =
        "Info: Eine Emal ist optional, jedoch Wichtig bei einer Passwort zurücksetzung"),
      (warnstufe = "Information"),
    );
    timer = 0;
    setTimeout(() => {
      timerreset();
    }, 10000);
  }
}

function passwortNichtGleich() {
  borderRESET();
  document.getElementById("alertError").innerHTML = "Passwort ist nicht gleich";
  document.getElementById("passwort").style.border = "1px solid red";
  document.getElementById("passwortWDH").style.border = "1px solid red";

  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Passwörter sind nicht gleich!"),
    (warnstufe = "Warnung"),
  );
}

function nichtAusgefuellt() {
  document.getElementById("alertError").innerHTML =
    "Bitte fülle die makierten Felder aus!";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Nicht alle Registrierdaten ausgefüllt"),
    (warnstufe = "Warnung"),
  );
}

function ErrorServerDOWN() {
  document.getElementById("alertError").innerHTML =
    "Error 503, Service Unavailable: HAUPTSERVER";
  backgroundCOLOR();
  alertBoxVISIBLE();
  move();
  playAudio();
  mitteilungINSERT(
    (mittelungGRUND = "Der HAUPTSERVER ist nicht erreichbar"),
    (warnstufe = "Kritisch"),
  );
}

function ErrorSQLDatenbankDOWN() {
  document.getElementById("alertError").innerHTML =
    "Error 503, Service Unavailable: DATENBANK";
  backgroundCOLOR();
  alertBoxVISIBLE();
  move();
  playAudio();
  mitteilungINSERT(
    (mittelungGRUND =
      "Die Datenbank ist nicht erreichbar, jedoch der Hauptserver"),
    (warnstufe = "Kritisch"),
  );
}

function DatenbankFehler() {
  document.getElementById("alertError").innerHTML =
    "Error 500, Internal Server Error: Datenbankfehler";
  backgroundCOLOR();
  alertBoxVISIBLE();
  move();
  playAudio();
  mitteilungINSERT(
    (mittelungGRUND = "Error 500, Unbekannter Server Datenbankfehler"),
    (warnstufe = "Kritisch"),
  );
}

function BenutzernameExestiertBEREITS() {
  document.getElementById("alertError").innerHTML =
    "Der Benutzername ist bereits vergeben";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Benutzername ist bereits vergeben"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("fname").style.border = "1px solid red";
}

function EmailExestiertBEREITS() {
  document.getElementById("alertError").innerHTML =
    "Die E-Mail ist bereits vergeben";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "E-Mail ist bereits vergeben"),
    (warnstufe = "Warnung"),
  );
}

function PasswortZuKurz() {
  document.getElementById("alertError").innerHTML =
    "Das Passwort ist zu kurz, minimum 8 Buchstaben / Zahlen";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Passwort ist zu kurz!"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("passwort").style.border = "1px solid red";
}

function PasswortIstPflicht() {
  document.getElementById("alertError").innerHTML = "Das Passwort ist Pflicht";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Passwort ist Pflicht"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("passwort").style.border = "1px solid red";
}

function PasswortZuLang() {
  document.getElementById("alertError").innerHTML =
    "Das Passwort ist zu Lang, maximal 40 Zeichen sind erlaubt";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Passwort ist zu lang!"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("passwort").style.border = "1px solid red";
}

function BenutzernameIstPflicht() {
  document.getElementById("alertError").innerHTML =
    "Der Benutzername ist Pflicht";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Benutzername ist Pflicht"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("fname").style.border = "1px solid red";
}

function BenutzernameZuLang() {
  document.getElementById("alertError").innerHTML =
    "Der Benutzername ist zu Lang, maximal 40 Zeichen sind erlaubt";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Benutzername ist zu lang!"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("fname").style.border = "1px solid red";
}

function BenutzernameZuKurz() {
  document.getElementById("alertError").innerHTML =
    "Der Benutzername ist zu kurz, minimum 6 Zeichen";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "Benutzername ist zu lang!"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("fname").style.border = "1px solid red";
}

function EmailZuLang() {
  document.getElementById("alertError").innerHTML =
    "Die Email ist zu Lang, maximal 40 Zeichen sind erlaubt";
  backgroundCOLOR2();
  alertBoxVISIBLE();
  move();
  playAudio3();
  mitteilungINSERT(
    (mittelungGRUND = "E-Mail ist zu lang!"),
    (warnstufe = "Warnung"),
  );
  document.getElementById("email").style.border = "1px solid red";
}

function RegestrierungERFOLG() {
  document.getElementById("alertError").innerHTML =
    "Erfolg, Account wurde Registriert! Weiterleitung zur Anmeldung in kürze...";
  linkEHRE = 1;
  backgroundCOLOR3();
  alertBoxVISIBLE();
  move();
  playAudio2();
}

// Regestrieren:

function regestrierenVERSCHICKEN() {
  // Daten in Variable machen:
  if (document.getElementById("email").value == "") {
    var emailINPUT = "";
  } else if (document.getElementById("email").value !== "")
    var emailINPUT = document.getElementById("email").value;

  var RegestrierDaten = {
    benutzername: document.getElementById("fname").value,
    passwort: document.getElementById("passwort").value,
    email: emailINPUT,
    kuerzel: document.getElementById("kuerzel").value,
    passwortWDH: document.getElementById("passwortWDH").value,
  };

  // Daten verschicken:

  fetch("http://localhost:3000/mysql/regestrieren", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(RegestrierDaten),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Netzwerk Fehler");
        console.log(response);
      }
      return response.json();
    })
    .then((data) => {
      console.log("DATA: " + data);
      if (data == "Registrierung erfolgreich!") {
        console.log("Regestriert");
        RegestrierungERFOLG();
        console.log(data);
        return;
      }
      if (data == "Benutzername ist bereits vergeben") {
        console.log("Benutzername ist bereits vergeben");
        BenutzernameExestiertBEREITS();
        return;
      }
      if (data == "Email ist bereits vergeben") {
        console.log("Email ist bereits vergeben");
        EmailExestiertBEREITS();
        return;
      }
      if (data == "Datenbankfehler") {
        DatenbankFehler();
        return;
      }
      if (data == "Passwort ist zu kurz!") {
        PasswortZuKurz();
        return;
      }
      if (data == "Passwort ist Pflicht!") {
        PasswortIstPflicht();
        return;
      }
      if (data == "Passwort ist zu lang!") {
        PasswortZuLang();
        return;
      }
      if (data == "Benutzername ist zu lang!") {
        BenutzernameZuLang();
        return;
      }
      if (data == "Benutzername ist Pflicht!") {
        BenutzernameIstPflicht();
        return;
      }
      if (data == "Email ist zu lang!") {
        EmailZuLang();
        return;
      }
      if (data == "Kürzel ist ungültig!") {
        kuerzelINPUTfalsch();
        return;
      }
      if (data == "Benutzername ist zu kurz!") {
        BenutzernameZuKurz();
        return;
      }
      if (data == "Passwort ist nicht gleich!") {
        passwortNichtGleich();
        return;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
// Verschiedene Functions ob etw Richtig war

function kuerzelINPUTrichtig() {
  document.getElementById("kuerzel").style.border = "1px solid black";
  check2();
}

// Verschiedene Alert Sounds

function playAudio() {
  var x = document.getElementById("errorAudio");
  x.play();
}

function playAudio2() {
  var x = document.getElementById("succsessAudio");
  x.play();
}

function playAudio3() {
  var x = document.getElementById("warningAudio");
  x.play();
}

function playAudio4() {
  var x = document.getElementById("infoAudio");
  x.play();
}

// Alert Box Progressbar

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("ErrorAlert").style.visibility = "hidden";
        document.getElementById("myBar").style.visibility = "hidden";
        document.getElementById("myProgress").style.visibility = "hidden";
        if (linkEHRE == 1) {
          window.location.href = "index.html";
        }
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// InformationsAusrufungzeichen Blinken lassen:
function loggingINFO() {
  if (scriptBEENDEN === true) {
    scriptBEENDEN = false;
    return;
  }

  if (stackOverflowPROT === 0 && cooldown2 === 0) {
    cooldown2 = 1;
    document.getElementById("infoICON").src = "PNGs/infoICONred.png";
    setTimeout(() => {
      document.getElementById("infoICON").src = "PNGs/infoICONgrey.png";
      setTimeout(() => {
        cooldown2 = 0;
        COUNTERstackOverflowPROT = COUNTERstackOverflowPROT + 1;
        console.log("counter", COUNTERstackOverflowPROT);

        if (COUNTERstackOverflowPROT >= 30) {
          stackOverflowPROT = 1;
          document.getElementById("infoICON").src = "PNGs/infoICONgrey.png";
        }
        if (scriptBEENDEN !== true) {
          loggingINFO();
        } else if (scriptBEENDEN == true) {
          return;
        }
      }, 2000);
    }, 2000);
  }

  if (stackOverflowPROT !== 0) {
    setTimeout(() => {
      stackOverflowPROT = 0;
      COUNTERstackOverflowPROT = 0;
    }, 30000);
  }
}

// Mitteilungen Loggen:
function mitteilungINSERT(mittelungGRUND, warnstufe) {
  loggingINFO();
  console.log(
    "FKT Ausführung: mitteilungINSERT, Mit eingehenden VARS:",
    mittelungGRUND,
    warnstufe,
  );
  if (cooldown3 == 0) {
    console.log("kein Cooldown");
    cooldown3 = 1;
    datum = new Date().toLocaleString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    m1 = document.getElementById("Mitteilung1");
    m2 = document.getElementById("Mitteilung2");
    mitteilung++;
    console.log(
      "MitteilungsLVL:",
      mitteilung,
      "M1 Var:",
      m1,
      "M2 Var:",
      m2,
      "Datum:",
      datum,
    );

    if (mitteilung == 1) {
      console.log("Mitteilung1 wird ausgeführt");
      m2.innerHTML = m1.innerHTML;
      console.log("m2.innerHTML:", m2.innerHTML);
      m2.style.backgroundColor = m1.style.backgroundColor;
      console.log("m2.backgroundCOLOR:", m2.style.backgroundColor);
      m1.innerHTML = `${datum}, ${warnstufe}: ${mittelungGRUND}`;
      console.log("m1.innerHTML", m1.innerHTML);
      if (warnstufe == "Warnung") {
        m1.style.backgroundColor = "yellow";
        console.log("gelber Hintergrund");
      }
      if (warnstufe == "Kritisch") {
        m1.style.backgroundColor = "red";
        console.log("roter Hintergrund");
      }
      if (
        warnstufe !== "Warnung" &&
        warnstufe !== "Information" &&
        warnstufe !== "Kritisch"
      ) {
        m1.style.backgroundColor = "rgb(234, 234, 234)";
        console.log("standard Hintergrund");
      }
      if (warnstufe == "Information") {
        m1.style.backgroundColor = "rgba(0, 149, 255, 1)";
        console.log("blauer Hintergrund");
      }
    }
    if (mitteilung == 2) {
      console.log("Mitteilung1 wird ausgeführt");
      m2.innerHTML = m1.innerHTML;
      console.log("m2.innerHTML:", m2.innerHTML);
      m2.style.backgroundColor = m1.style.backgroundColor;
      console.log("m2.backgroundCOLOR:", m2.style.backgroundColor);
      m1.innerHTML = `${datum}, ${warnstufe}: ${mittelungGRUND}`;
      console.log("m1.innerHTML", m1.innerHTML);
      if (warnstufe == "Warnung") {
        m1.style.backgroundColor = "yellow";
        console.log("gelber Hintergrund");
      }
      if (warnstufe == "Kritisch") {
        m1.style.backgroundColor = "red";
        console.log("roter Hintergrund");
      }
      if (
        warnstufe !== "Warnung" &&
        warnstufe !== "Information" &&
        warnstufe !== "Kritisch"
      ) {
        m1.style.backgroundColor = "rgb(234, 234, 234)";
        console.log("standard Hintergrund");
      }
      if (warnstufe == "Information") {
        m1.style.backgroundColor = "rgba(0, 149, 255, 1)";
        console.log("blauer Hintergrund");
      }
      mitteilung = 0;
    }
    setTimeout(() => {
      cooldown3 = 0;
    }, 2000);
  }
  if (cooldown3 == 1) {
    console.log("Cooldown, Cooldown2 VAR:", cooldown3);
    return;
  }
}

// Event Listener für Info Icon und Exit Knopf:

document.getElementById("infoICON").addEventListener("click", function (event) {
  infoOFalertsHERVOR();
  scriptBEENDEN = true;
});

document
  .getElementById("exitICON2")
  .addEventListener("click", function (event) {
    infoOFalertsHINWEG();
  });
