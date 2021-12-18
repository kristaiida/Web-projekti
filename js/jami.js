// Luodaan randomnumber generaattorilla jokaiselle tehtävälle eri luvut. 
var a001 = Math.floor(Math.random() * 10);
var a002 = Math.floor(Math.random() * 10);
var a003 = a001 + a002;

var b001 = Math.floor(Math.random() * 10);
var b002 = Math.floor(Math.random() * 10);
var b003 = b001 - b002;

var c001 = Math.floor(Math.random() * 10);
var c002 = Math.floor(Math.random() * 10);
var c003 = c001 * c002;

var d001 = Math.floor(Math.random() * 10);
var d002 = Math.floor(Math.random() * 10);
var d003 = d001 / d002;

var j001 = Math.floor(Math.random() * 10);
var j002 = Math.floor(Math.random() * 10);
var j003 = j001 + j002;

var z = 0;
z++;
var y = 0;
y++;

// Funktio kun painetaan aloita nappia
function begin001() {
  number001.innerHTML = y++;
  disappear001.innerHTML = "";
  message001.innerHTML = a001 + " + " + a002 + "<br />" + "__________";
  message002.innerHTML = "<input type=text id=input001 /> <button onclick=submit001()>Tarkista</button>";
}

// Funktio kun painetaan Tarkista nappia
function submit001() {
  var answer001 = input001.value;
  show001.innerHTML = "Sinun vastauksesi: " + answer001;
  if (answer001 == a003) {
    z++;
    // Jos vastaus on oikein nämä tulostetaan!
    message003.innerHTML = "Oikein! :)";
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question002()>Seuraava</button>";
  }
  else {

    // Jos vastaus on väärin nämä tulostetaan!
    message003.innerHTML = "Väärin! Oikea vastaus: " + a003;
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question002()>Seuraava</button>";
  }
}

function question002() {
  // Tulostetaan oikea vastaus kun painetaan nappia tarkista
  number001.innerHTML = y++;
  message001.innerHTML = b001 + " - " + b002 + "<br />" + "__________";
  message002.innerHTML = "<input type=text id=input002 /> <button onclick=submit002()>Tarkista</button>";

  // Kenttien tyhjennys aina kun painetaan nappia
  message003.innerHTML = "";
  show001.innerHTML = "";
  message004.innerHTML = "";
}

function submit002() {
  var answer001 = input002.value;
  show001.innerHTML = "Sinun vastauksesi: " + answer001;
  if (answer001 == b003) {
    z++;
    message003.innerHTML = "Oikein! :)";
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question003()>Seuraava</button>";
  }
  else {
    message003.innerHTML = "Väärin! Oikea vastaus: " + b003;
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question003()>Seuraava</button>";
  }
}

function question003() {
  number001.innerHTML = y++;
  message001.innerHTML = c001 + " x " + c002 + "<br />" + "__________";
  message002.innerHTML = "<input type=text id=input003 /> <button onclick=submit003()>Tarkista</button>";
  message003.innerHTML = "";
  show001.innerHTML = "";
  message004.innerHTML = "";
}

function submit003() {
  var answer001 = input003.value;
  show001.innerHTML =  "Sinun vastauksesi: " + answer001;
  if (answer001 == c003) {
    z++;
    message003.innerHTML = "Oikein! :)";
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question004()>Seuraava</button>";
  }
  else {
    message003.innerHTML = "Väärin! Oikea vastaus: " + c003;
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question004()>Seuraava</button>";
  }
}

function question004() {
  number001.innerHTML = y++;
  message001.innerHTML = d001 + " / " + d002 + "<br />" + "__________";
  message002.innerHTML = "<input type=text id=input004 /> <button onclick=submit004()>Tarkista</button>";
  message003.innerHTML = "";
  show001.innerHTML = "";
  message004.innerHTML = "";
}

function submit004() {
  var answer001 = input004.value;
  show001.innerHTML =  "Sinun vastauksesi: " + answer001;
  if (answer001 == d003) {
    z++;
    message003.innerHTML = "Oikein! :)";
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question010()>Seuraava</button>";
  }
  else {
    message003.innerHTML = "Väärin! Oikea vastaus: " + d003;
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=question010()>Seuraava</button>";
  }
}

function question010() {
  number001.innerHTML = y++;
  message001.innerHTML = j001 + " + " + j002 + "<br />" + "__________";
  message002.innerHTML = "<input type=text id=input010 /> <button onclick=submit010()>Tarkista</button>";
  message003.innerHTML = "";
  show001.innerHTML = "";
  message004.innerHTML = "";
}

function submit010() {
  var answer001 = input010.value;
  show001.innerHTML =  "Sinun vastauksesi: " + answer001;
  if (answer001 == j003) {
    z++;
    message003.innerHTML = "Oikein! :)";
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=end001()>Lopeta tentti</button>";
  }
  else {
    message003.innerHTML = "Väärin! Oikea vastaus: " + j003;
    message002.innerHTML = "";
    message004.innerHTML = "<button onclick=end001()>Lopeta tentti</button>";
  }
}

// Funktio joka näyttää lopputuleman kun visa päätetään
function end001() {
  message001.innerHTML = "Lopputulos";
  message002.innerHTML = "Sinä sait " + (z - 1) + " oikein 5:sta";
  message003.innerHTML = "Kiitos että teit testin! :)";
  show001.innerHTML = "";
  message004.innerHTML = "<button onclick=repeat001()>Uudestaan</button>";
}

// Kun sivu päivitetään alkaa visa alusta
function repeat001() {
  location.reload();
}