// Variablen auf Standart bringen:
var timer = 1;
kuerzelINPUTrichtigf = 0;
mitteilung = 0;
cooldown2 = 0;
cooldown3 = 0;
warnstufeAlteMitteilung = null;
stackOverflowPROT = 0;
COUNTERstackOverflowPROT = 0;
scriptBEENDEN = false;
errorCon = false;
conTrue = false;
cooldown4 = 0;
cooldown5 = 0;
cooldown6 = 0;
serverState = "connecting";
overlayHide();

function overlayHide() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay").style.zIndex = "-5";
}

function overlayShow() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").style.zIndex = "5";
}

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
  document.getElementById("Kont3").style.zIndex = "6";
  document.getElementById("Kont2").style.zIndex = "-2";
  document.getElementById("Kont3").style.visibility = "visible";
  document.getElementById("Kont4").style.zIndex = "7";
  document.getElementById("Kont4").style.visibility = "visible";
  document.getElementById("Kont5").style.zIndex = "8";
  document.getElementById("Kont5").style.visibility = "visible";
  scriptBEENDEN = true;
}

function infoOFalertsHERVOR2() {
  document.getElementById("Kon7").style.zIndex = "6";
  document.getElementById("Kont2").style.zIndex = "-2";
  document.getElementById("Kon7").style.visibility = "visible";
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
infoOFalertsHINWEG2();
function infoOFalertsHINWEG2() {
  document.getElementById("Kon7").style.zIndex = "-2";
  document.getElementById("Kont1").style.zIndex = "2";
  document.getElementById("Kon7").style.visibility = "hidden";
  document.getElementById("Kont6").style.zIndex = "4";
  document.getElementById("Kont6").style.visibility = "visible";
}

// Notification Timer bei Email RESET
function timerreset() {
  timer = 1;
}

// Verbindungs Icon:
// Nicht Verbunden
function HserverConErr() {
  document.getElementById("H:Server").src = "PNGs/Xicon.png";
  HsqlConErr();
}

function HsqlConErr() {
  document.getElementById("H:Datenbank").src = "PNGs/Xicon.png";
  NsqlConErr();
}

function NsqlConErr() {
  document.getElementById("N:Datenbank").src = "PNGs/Xicon.png";
}
// Verbunden
function HserverCon() {
  document.getElementById("H:Server").src = "PNGs/GrünerHaken2.png";
}

function HsqlCon() {
  document.getElementById("H:Datenbank").src = "PNGs/GrünerHaken2.png";
}

function NsqlCon() {
  document.getElementById("N:Datenbank").src = "PNGs/GrünerHaken2.png";
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

// Verschiedene Alert Box Errors

function ErrorServerDOWN() {
  if (cooldown4 == 0) {
    cooldown4 = 1;
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
    HserverConErr();
    setTimeout(() => {
      cooldown4 = 0;
    }, 60000);
  }
}

function ErrorSQLDatenbankDOWN() {
  if (cooldown5 == 0) {
    cooldown5 = 1;
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
    HsqlConErr();
    setTimeout(() => {
      cooldown5 = 0;
    }, 60000);
  }
}

function DatenbankFehler() {
  if (cooldown6 == 0) {
    cooldown6 = 1;
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
    setTimeout(() => {
      cooldown6 = 0;
    }, 60000);
  }
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
  overlayShow();
});

document
  .getElementById("exitICON2")
  .addEventListener("click", function (event) {
    infoOFalertsHINWEG();
    overlayHide();
  });

document
  .getElementById("exitICON3")
  .addEventListener("click", function (event) {
    infoOFalertsHINWEG2();
    overlayHide();
  });

document
  .getElementById("ServerConnectionVis")
  .addEventListener("click", function (event) {
    infoOFalertsHERVOR2();
    overlayShow();
  });

// Loop um zu kucken ob Server da ist

setInterval(() => {
  ServerConnection();
  updateServerIcon();
}, 10000);

// Icon Blinken lassen bis 1. Connection da ist:

function updateServerIcon() {
  const icon = document.getElementById("ServerConnectionVis");
  const statusmsg = document.getElementById("statusCon");

  if (serverState === "connecting") {
    icon.src = "PNGs/SchwarzerHaken.png";
    statusmsg.innerHTML = "Status: Verbindungsaufbau";
  }

  if (serverState === "ok") {
    icon.src = "PNGs/GrünerHaken.png";
    statusmsg.innerHTML = "Status: Erfolgreiche Verbindug";
  }

  if (serverState === "error") {
    icon.src = "PNGs/Warningsign1.png";
    statusmsg.innerHTML = "Status: Verbindung Fehlgeschlagen";
  }
}

// Überprüfen ob datenbank da ist / Hauptserver

function ServerConnection() {
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
        DatenbankConnection();
        console.log("Datenbank Connection Check call");
        HserverCon();
        HsqlCon();
        updateServerIcon();
      }
      if (data !== "Code 200") {
        ErrorSQLDatenbankDOWN();
        HsqlConErr();
        HserverCon();
        serverState = "error";
        updateServerIcon();
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      ErrorServerDOWN();
      serverState = "error";
      updateServerIcon();
    });
}

// Kalenderdatenbank überprüfen

function DatenbankConnection() {
  fetch("http://localhost:3000/mysql/kalenderdatenbank")
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((data) => {
      if (data.includes("Code 200")) {
        serverState = "ok";
        NsqlCon();
        updateServerIcon();
      } else {
        serverState = "error";
        DatenbankFehler();
        NsqlConErr();
        updateServerIcon();
      }
    })
    .catch(() => {
      serverState = "error";
      ErrorSQLDatenbankDOWN;
      updateServerIcon();
    });
}
