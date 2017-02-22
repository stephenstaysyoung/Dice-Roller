var dieRoll4,
    dieRoll6,
    dieRoll8,
    dieRoll10,
    dieRoll12,
    dieRoll20,
    dieRoll100;


function getDieRoll4 () {
  dieRoll4 = math.floor(math.random() * 4)+1;
}

function getDieRoll6 () {
  dieRoll6 = math.floor(math.random() * 6)+1;
  document.write("<p>" + dieRoll6 + "</p>");
}

function getDieRoll8 () {
  dieRoll8 = math.floor(math.random() * 8)+1;
}

function getDieRoll10 () {
  dieRoll10 = math.floor(math.random() * 10)+1;
}

function getDieRoll12 () {
  dieRoll12 = math.floor(math.random() * 12)+1;
}

function getDieRoll20 () {
  dieRoll20 = math.floor(math.random() * 20)+1;
}

function getDieRoll100 () {
  dieRoll100 = math.floor(math.random() * 100)+1;
}
