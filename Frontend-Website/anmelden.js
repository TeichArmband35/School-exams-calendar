// Bringing everything into normal mode
document.getElementById("ErrorAlert").style.visibility = "hidden";
document.getElementById("myBar").style.visibility = "hidden";
document.getElementById("myProgress").style.visibility = "hidden";
document.getElementById("ErrorAlert").style.zIndex = "10";
document.getElementById("fname").style.border = "1px solid black";
document.getElementById("kuerzel").style.border = "1px solid black";
document.getElementById("passwort").style.border = "1px solid black";
document.getElementById("ErrorAlert").style.backgroundColor = "rgb(246, 99, 88)";
document.getElementById("myBar").style.backgroundColor = "rgb(200, 50, 0)";
document.getElementById("myProgress").style.backgroundColor = "rgb(246, 99, 88)";
document.getElementById("Kont3").style.zIndex = "-2";
document.getElementById("Kont1").style.zIndex = "2";
document.getElementById("Kont3").style.visibility = "hidden";
document.getElementById("Kont4").style.zIndex = "-3";
document.getElementById("Kont4").style.visibility = "hidden";
document.getElementById("Kont5").style.zIndex = "-4";
document.getElementById("Kont5").style.visibility = "hidden";
mitteilung = 0;
cooldown2 = 0;
cooldown3 = 0;
console.log(cooldown2, ":Cooldown");
warnstufeAlteMitteilung = null;
stackOverflowPROT = 0;
COUNTERstackOverflowPROT = 0;
scriptBEENDEN = false;
nameInput = "";
nameInput2 = "";
nameInput3 = "";


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

async function resetAlleInputs() {
    document.getElementById("fname").style.border = "1px solid black";
    document.getElementById("kuerzel").style.border = "1px solid black";
    document.getElementById("passwort").style.border = "1px solid black";
}

// Alert box function

function alertBoxVISIBLE() {
    document.getElementById("ErrorAlert").style.visibility = "visible";
    document.getElementById("myBar").style.visibility = "visible";
    document.getElementById("myProgress").style.visibility = "hidden"; 
    loggingINFO()
}

// Alert box coloring

function backgroundCOLOR(){
    document.getElementById("ErrorAlert").style.backgroundColor = "rgb(246, 99, 88)";
    document.getElementById("myBar").style.backgroundColor = "rgb(200, 50, 0)";
    document.getElementById("myProgress").style.backgroundColor = "rgb(246, 99, 88)";
    loggingINFO()

}

function backgroundCOLOR2() {
    document.getElementById("ErrorAlert").style.backgroundColor = "rgb(255, 169, 43)";
    document.getElementById("myBar").style.backgroundColor = "rgb(255, 149, 23)";
    document.getElementById("myProgress").style.backgroundColor = "rgb(255, 169, 43)"; 
    loggingINFO()
}

function backgroundCOLOR3() {
    document.getElementById("ErrorAlert").style.backgroundColor = "rgb(46, 184, 134)";
    document.getElementById("myBar").style.backgroundColor = "rgb(46, 150, 100)";
    document.getElementById("myProgress").style.backgroundColor = "rgb(46, 184, 134)"; 
}

// Logging Notifications

function loggingINFO() {

    if (scriptBEENDEN === true) {
        scriptBEENDEN = false;
        return;
    }

    if (stackOverflowPROT === 0 && cooldown2 === 0) {
        cooldown2 = 1;
        document.getElementById("infoICON").src = "infoICONred.png";
        setTimeout(() => {
            document.getElementById("infoICON").src = "infoICONgrey.png";
            setTimeout(() => {
            cooldown2 = 0;
            COUNTERstackOverflowPROT = COUNTERstackOverflowPROT+1
            console.log("counter", COUNTERstackOverflowPROT);

            if (COUNTERstackOverflowPROT >= 30) {
                stackOverflowPROT = 1;
                document.getElementById("infoICON").src = "infoICONgrey.png";

            }
            if (scriptBEENDEN !== true) {
                loggingINFO();

            }
            else if (scriptBEENDEN == true) {
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




document.getElementById("ErrAnzeiger").style.border = "0px";
let validINPUT = "FALSE";

function deleteChecker() {
console.error("Function not found")
}

// Getting entered login details
document.getElementById("fname").addEventListener("keyup", function(event) {
    meineFunktion()

    if (event.key === "Delete") {
    deleteChecker()
    }
    function meineFunktion() {
        let nameInput = document.getElementById("fname").value;
        let nameInput2 = document.getElementById("passwort").value;
        let nameInput3 = document.getElementById("kuerzel").value;
        if (nameInput !== "") {
            let validINPUT = "VAILID";
            console.log("InputOfBENUTZERNAME="+validINPUT);
        if (nameInput2 !== "") {
            let validINPUT = "VALID";
            console.log("INPUTOfPASSWORT="+validINPUT);
            if (nameInput3 !== "") {
                let validINPUT = "VALID";
                console.log("INPUTOfKUERZEL="+validINPUT);
                document.getElementById("submit1").style.background = "rgb(0, 237, 100)"
            }
}}}
}); 

document.getElementById("passwort").addEventListener("keyup", function(event) {

if (event.key === "Delete") {
deleteChecker()
}

let validINPUT = "FALSE";
console.log("InputOfBENUTZERNAME="+validINPUT);
meineFunktion()
    function meineFunktion() {
        if (event.key === "Delete") {
        deleteChecker()
        }
        let nameInput = document.getElementById("fname").value;
        let nameInput2 = document.getElementById("passwort").value;
        let nameInput3 = document.getElementById("kuerzel").value;
        if (nameInput2 !== "") {
            let validINPUT = "VAILID";
            console.log("InputOfPASSWORT="+validINPUT);
        if (nameInput !== "") {
            let validINPUT = "VALID";
            console.log("INPUTOfBENUTZERNAME="+validINPUT);
            if (nameInput3 !== "") {
                let validINPUT = "VALID";
                console.log("INPUTOfKUERZEL="+validINPUT);
                document.getElementById("submit1").style.background = "rgb(0, 237, 100)";
            }
        
}}}});

document.getElementById("kuerzel").addEventListener("keyup", function(event) {

if (event.key === "Delete") {
deleteChecker()
}

let validINPUT = "FALSE";
console.log("InputOfBENUTZERNAME="+validINPUT);
meineFunktion()
    function meineFunktion() {
        if (event.key === "Delete") {
        deleteChecker()
        }
        let nameInput = document.getElementById("fname").value;
        let nameInput2 = document.getElementById("passwort").value;
        let nameInput3 = document.getElementById("kuerzel").value;
        if (nameInput3 !== "") {
            let validINPUT = "VAILID";
            console.log("InputOfKUERZEL="+validINPUT);
        if (nameInput !== "") {
            let validINPUT = "VALID";
            console.log("INPUTOfBENUTZERNAME="+validINPUT);
            if (nameInput2 !== "") {
                let validINPUT = "VALID";
                console.log("INPUTOfPASSWORT="+validINPUT);
                document.getElementById("submit1").style.background = "rgb(0, 237, 100)";
            }
        
}}
}}); 

function check() {

        // Checking abbreviations on frontend
        document.getElementById("kuerzel").style.border = "1px solid black";    
        document.getElementById("passwort").style.border = "1px solid black"; 
        document.getElementById("fname").style.border = "1px solid black"; 
    if (nameInput3 !== ""){
        document.getElementById("kuerzel").style.border = "1px solid red";    
        document.getElementById("passwort").style.border = "1px solid black"; 
        document.getElementById("fname").style.border = "1px solid black"; 
        keineDatenAngegebenKUERZEL() 
    }
    else if (nameInput3 == "") {
        check2()
    }

}

function check2(){
// Checking if everything is filled out
let nameInput = document.getElementById("fname").value;
console.log(nameInput);
let nameInput2 = document.getElementById("passwort").value;
console.log(nameInput2);
let nameInput3 = document.getElementById("kuerzel").value;
console.log(nameInput3);
check3()
}


// Checking if everything is filled out V2
function check3() {

var ErrAnzeige1 = "";
var ErrAnzeige2 = "";
var ErrAnzeige3 = "";

let nameInput = document.getElementById("fname").value;
console.log(nameInput);
let nameInput2 = document.getElementById("passwort").value;
console.log(nameInput2);
let nameInput3 = document.getElementById("kuerzel").value;
console.log(nameInput3);

if (nameInput == "") {

    console.log("NAME INPUT for="+nameInput);
    var ErrAnzeige1 = "Benutzername";
    console.log(ErrAnzeige1);
    document.getElementById("fname").style.border = "1px solid red" 
    var validINPUT = "FALSE"; 
    keineDatenAngegeben()
}

if (nameInput2 == "") {

    console.log("NAME INPUT for="+nameInput2);
    var ErrAnzeige2 = "Passwort";
    console.log(ErrAnzeige2);
    document.getElementById("passwort").style.border = "1px solid red";  
    var validINPUT = "FALSE"; 
    keineDatenAngegeben()
}

if (nameInput3 == "") {

    console.log("NAME INPUT for="+nameInput3);
    var ErrAnzeige3 = "Kuerzel";
    console.log(ErrAnzeige3);
    document.getElementById("kuerzel").style.border = "1px solid red";  
    var validINPUT = "FALSE"; 
    keineDatenAngegeben()
}

if (ErrAnzeige1 == "") {
    console.log(ErrAnzeige1);
    }
    if (ErrAnzeige2 == "") {
        console.log(ErrAnzeige2);
    }
        if(ErrAnzeige3 == "") {
            document.getElementById("ErrAnzeiger").style.border = "0px";
            document.getElementById("ErrAnzeiger").innerHTML = "";
            document.getElementById("fname").style.border = "1px solid black";
            document.getElementById("kuerzel").style.border = "1px solid black";
            document.getElementById("passwort").style.border = "1px solid black";
            expresstesten();

            }
}

// Testing if MySQL login table is up
function expresstesten() {
fetch('http://localhost:3000/mysql/connection', { headers: { 
    "Content-Type": "/mysql/connection"
    }, 
method: "GET"
})
    .then(response => {
    if (!response.ok) {
      throw new Error('Netzwerk Error');
    }
    return response.json(); 
  })
  .then(data => {
    if (data == "Code 200") {
    console.log("DATA IST OK");
    anmeldeDatenVerschickenPREPARE()
    }
    if (data !== "Code 200") {
        console.log("DATA IST NICHT OK");
        ErrorSQL();
    }
})
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    ErrorServerDOWN()
  });
}

// If SQL is down, display error
function ErrorSQL() {
    console.log("SQL Server DOWN");
    document.getElementById("ErrorAlert").style.visibility = "visible";
    document.getElementById("alertError").innerHTML = "ERROR: 503, Service Unavailable: DATENBANK";
    document.getElementById("myBar").style.visibility = "visible";
    document.getElementById("myProgress").style.visibility = "hidden";
    document.getElementById("ErrorAlert").style.zIndex = "10";
    backgroundCOLOR()
    playAudio()
    move()
    mitteilungINSERT(mittelungGRUND = "Die Datenbank ist nicht erreichbar, jedoch der Hauptserver", warnstufe = "Kritisch");
}


// Play error Audios
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

// Display error if Main Server is dead
function ErrorServerDOWN() {
    console.log("HAUPTServer DOWN");
    document.getElementById("ErrorAlert").style.visibility = "visible";
    document.getElementById("alertError").innerHTML = "ERROR: 503, Service Unavailable: HAUPTSERVER";
    document.getElementById("myBar").style.visibility = "visible";
    document.getElementById("myProgress").style.visibility = "hidden";
    document.getElementById("ErrorAlert").style.zIndex = "10";
    document.getElementById("ErrorAlert").style.zIndex = "10";
    backgroundCOLOR()
    playAudio()
    move()
    mitteilungINSERT(mittelungGRUND = "Der HAUPTSERVER ist nicht Erreichbar", warnstufe = "Kritisch");
}

// Alert box bar
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
      } 
      else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// Preparing to send login details
function anmeldeDatenVerschickenPREPARE() {
    BenutzernameEINGEGEBEN = document.getElementById("fname").value;
    PasswortEINGEGEBEN = document.getElementById("passwort").value;
    KuerzelEINGEGEBEN = document.getElementById("kuerzel").value;
    console.log(BenutzernameEINGEGEBEN, PasswortEINGEGEBEN, KuerzelEINGEGEBEN);
    anmeldeDatenVerschicken();
}

// Sending login details
function anmeldeDatenVerschicken() {
 anmelden = {
    benutzername: BenutzernameEINGEGEBEN,
    passwort: PasswortEINGEGEBEN,
    kuerzel: KuerzelEINGEGEBEN
 };

fetch("http://localhost:3000/mysql/anmelden", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(anmelden)
})
.then(response => {
    if (!response.ok) {
        console.log("Error:"+response);
    }
    return response.json();
})
.then(data => {
    console.log("DATA:", data);
    console.log("Test");
    resetAlleInputs();

    if (data === "Anmeldung Erfolgreich!") {
        anmeldeDatenRichtig()
        console.log("1")
    } 
    if (data === "Anmeldung Fehlgeschlagen!") {
        anmeldeDatenFalsch()
        console.log("2")
    } 
    if (data === "Datenbankfehler") {
        serverERROR()
        console.log("3")
    }
    if (data === "Benutzername ist zu lang!") {
        BenutzernameZuLang()
        console.log("4")
    }
    if (data === "Benutzername ist zu Pflicht!") {
        BenutzernameIstPflicht()
        console.log("5")
    }
    if (data === "Passwort ist zu Lang!") {
        PasswortZuLang()
        console.log("6")
    }
    if (data === "Passwort ist zu Pflicht!") {
        PasswortIstPflicht()
        console.log("7")
    }
    if (data === "Kuerzel ist Pflicht!") {
        kuerzelPFLICHT()
        console.log("8")
    }
    if (data === "Kuerzel ist zu klein!") {
        kuerzelZuKurz()
        console.log("9")
    }
    if (data === "Kuerzel ist zu lang!") {
        kuerzelZuLang()
        console.log("10")
    }
})   
.catch(error => {
    console.error("Fetch Fehler:", error);
});
}


// Login Details wrong
function anmeldeDatenFalsch() {
   document.getElementById("ErrorAlert").style.visibility = "visible";
   document.getElementById("myBar").style.visibility = "visible";
   document.getElementById("alertError").innerHTML = "Anmeldedaten Falsch! Überprüfe das Passwort / den Benutzernamen";
   document.getElementById("ErrorAlert").style.zIndex = "10";
        document.getElementById("kuerzel").style.border = "1px solid black";    
        document.getElementById("passwort").style.border = "1px solid red"; 
        document.getElementById("fname").style.border = "1px solid red"; 
   backgroundCOLOR2()
   move()
   playAudio3()
   mitteilungINSERT(mittelungGRUND = "Anmeldedaten sind Falsch", warnstufe = "Warnung");

}

// Im looking at this and asking myself what im doing here ._.
function serverERROR(){
let nameInput = document.getElementById("fname").value;
console.log(nameInput);
let nameInput2 = document.getElementById("passwort").value;
console.log(nameInput2);
let nameInput3 = document.getElementById("kuerzel").value;
console.log(nameInput3);

if (nameInput == "") {

    console.log("NAME INPUT for="+nameInput);
    var ErrAnzeige1 = "Benutzername";
    console.log(ErrAnzeige1);
    document.getElementById("fname").style.border = "1px solid red" 
    var validINPUT = "FALSE"; 
    keineDatenAngegeben()
    return;
}

if (nameInput2 == "") {

    console.log("NAME INPUT for="+nameInput2);
    var ErrAnzeige2 = "Passwort";
    console.log(ErrAnzeige2);
    document.getElementById("passwort").style.border = "1px solid red";  
    var validINPUT = "FALSE"; 
    keineDatenAngegeben()
    return;
}

if (nameInput3 == "") {

    console.log("NAME INPUT for="+nameInput3);
    var ErrAnzeige3 = "Kuerzel";
    console.log(ErrAnzeige3);
    document.getElementById("kuerzel").style.border = "1px solid red";  
    var validINPUT = "FALSE"; 
    keineDatenAngegeben()
    return;
}


    document.getElementById("ErrorAlert").style.visibility = "visible";
    document.getElementById("myBar").style.visibility = "visible";
    document.getElementById("alertError").innerHTML = "Error 500, Internal Server Error";
    document.getElementById("ErrorAlert").style.zIndex = "10";
    backgroundCOLOR();
    move();
    playAudio();
    mitteilungINSERT(mittelungGRUND = "Error 500, Unbenkannter Server Fehler", warnstufe = "Kritisch");
}


// Functions for Errors / Responses from Server
function anmeldeDatenRichtig(){
    document.getElementById("ErrorAlert").style.visibility = "visible";
    document.getElementById("myBar").style.visibility = "visible";
    document.getElementById("alertError").innerHTML = "Erfolg, Anmeldedaten korrekt! Weiterleitung erfolgt gleich...";
    document.getElementById("ErrorAlert").style.zIndex = "10";
    backgroundCOLOR3();
    move();
    playAudio2();
    anmeldeDatenabspeichern();
}

function keineDatenAngegeben() {
    document.getElementById("ErrorAlert").style.visibility = "visible";
    document.getElementById("myBar").style.visibility = "visible";
    document.getElementById("alertError").innerHTML = "Bitte fülle die makierten Felder aus!";
    document.getElementById("ErrorAlert").style.zIndex = "10";
    backgroundCOLOR2();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Keine Daten Angegeben", warnstufe = "Warnung");
}

function keineDatenAngegebenKUERZEL() {
    document.getElementById("ErrorAlert").style.visibility = "visible";
    document.getElementById("myBar").style.visibility = "visible";
    document.getElementById("alertError").innerHTML = "Falscher Klassenkürzel";
    document.getElementById("ErrorAlert").style.zIndex = "10";
    backgroundCOLOR2();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Keine Kürzel Angegeben", warnstufe = "Warnung");
}

function PasswortIstPflicht() {
    document.getElementById("alertError").innerHTML = "Das Passwort ist Pflicht";
    document.getElementById("passwort").style.border = "1px solid red";
    backgroundCOLOR2();
    alertBoxVISIBLE();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Keine Passwort Angegeben", warnstufe = "Warnung");
}

function PasswortZuLang() {
    document.getElementById("alertError").innerHTML = "Das Passwort ist zu Lang, maximal 40 Buchstaben / Zahlen sind erlaubt";
    document.getElementById("passwort").style.border = "1px solid red";
    backgroundCOLOR2();
    alertBoxVISIBLE();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Passwort ist zu lang!", warnstufe = "Warnung");
}

function BenutzernameIstPflicht() {
    document.getElementById("alertError").innerHTML = "Der Benutzername ist Pflicht";
    document.getElementById("fname").style.border = "1px solid red";
    backgroundCOLOR2();
    alertBoxVISIBLE();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Keinen Benutzernamen Angegeben", warnstufe = "Warnung");
}

function BenutzernameZuLang() {
    document.getElementById("alertError").innerHTML = "Der Benutzername ist zu Lang, maximal 40 Buchstaben / Zahlen sind erlaubt";
    document.getElementById("fname").style.border = "1px solid red";
    backgroundCOLOR2();
    alertBoxVISIBLE();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Benutzername ist zu lang!", warnstufe = "Warnung");
}

function kuerzelPFLICHT() {
    document.getElementById("alertError").innerHTML = "Ein Klassenkürzel ist Pflicht";
    document.getElementById("kuerzel").style.border = "1px solid red";
    backgroundCOLOR2();
    alertBoxVISIBLE();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Kein Kürzel Angegeben", warnstufe = "Warnung");
}

function kuerzelZuLang() {
    document.getElementById("alertError").innerHTML = "Der Kürzel ist zu Lang, maximal 5 Buchstaben / Zahlen sind erlaubt";
    document.getElementById("kuerzel").style.border = "1px solid red";
    backgroundCOLOR2();
    alertBoxVISIBLE();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Kürzel ist zu lang!", warnstufe = "Warnung");
}

function kuerzelZuKurz() {
    document.getElementById("alertError").innerHTML = "Der Kürzel ist zu Kurz, minimum 2 Buchstaben / Zahlen sind erlaubt";
    document.getElementById("kuerzel").style.border = "1px solid red";
    backgroundCOLOR2();
    alertBoxVISIBLE();
    move();
    playAudio3();
    mitteilungINSERT(mittelungGRUND = "Kürzel ist zu kurz!", warnstufe = "Warnung");
}

// Notification Stuff
document.getElementById("infoICON").addEventListener("click", function(event) {
    infoOFalertsHERVOR()
    scriptBEENDEN = true;
})

document.getElementById("exitICON2").addEventListener("click", function(event) {
    infoOFalertsHINWEG()
})

function mitteilungINSERT(mittelungGRUND, warnstufe) {
    loggingINFO();
    console.log("FKT Ausführung: mitteilungINSERT, Mit eingehenden VARS:", mittelungGRUND, warnstufe);
    if (cooldown3 == 0) {
        console.log("kein Cooldown")
        cooldown3 = 1;
        datum = new Date().toLocaleString("de-DE", {
            hour: "2-digit",
            minute: "2-digit"
        });

        m1 = document.getElementById("Mitteilung1");
        m2 = document.getElementById("Mitteilung2");
        mitteilung++;
        console.log("MitteilungsLVL:", mitteilung, "M1 Var:", m1, "M2 Var:", m2, "Datum:", datum);
        
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
                console.log("gelber Hintergrund")
            }
            if (warnstufe == "Kritisch") {
                m1.style.backgroundColor = "red";
                console.log("roter Hintergrund")
            }
            else if (warnstufe !== "Warnung") {
                m1.style.backgroundColor = "rgb(234, 234, 234)"
                console.log("standard Hintergrund")
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
                console.log("gelber Hintergrund")
            }
            if (warnstufe == "Kritisch") {
                m1.style.backgroundColor = "red";
                console.log("roter Hintergrund")
            }
            else if (warnstufe !== "Warnung") {
                m1.style.backgroundColor = "rgb(234, 234, 234)"
                console.log("standard Hintergrund")
            }
            mitteilung = 0;
        }
        setTimeout(() =>{
            cooldown3 = 0;
        }, 2000)

    }
    if (cooldown3 == 1) {
        console.log("Cooldown, Cooldown2 VAR:", cooldown3);
        return;
    }
}
