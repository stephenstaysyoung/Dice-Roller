var dieRoll4,
    dieRoll6,
    dieRoll8,
    dieRoll10,
    dieRoll12,
    dieRoll20,
    dieRoll100,
    d6;


function getDieRoll4 () {
  dieRoll4 = Math.floor(Math.random() * 4)+1;
}

var d6 = document.getElementById('d6');
d6.onclick = function () {getDieRoll6()};
function getDieRoll6 () {
  dieRoll6 = Math.floor(Math.random() * 6)+1;
  document.write("<p>" + dieRoll6 + "</p>");
}

function getDieRoll8 () {
  dieRoll8 = Math.floor(Math.random() * 8)+1;
}

function getDieRoll10 () {
  dieRoll10 = Math.floor(Math.random() * 10)+1;
}

function getDieRoll12 () {
  dieRoll12 = Math.floor(Math.random() * 12)+1;
}

function getDieRoll20 () {
  dieRoll20 = Math.floor(Math.random() * 20)+1;
}

function getDieRoll100 () {
  dieRoll100 = Math.floor(Math.random() * 100)+1;
}
