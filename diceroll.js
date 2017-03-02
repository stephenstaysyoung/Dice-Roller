var dieRoll4,
    d4 = document.getElementById('d4'),
    d4Result = document.getElementById('d4Result'),
    dieRoll6,
    d6 = document.getElementById('d6'),
    d6Result = document.getElementById('d6Result'),
    dieRoll8,
    d8 = document.getElementById('d8'),
    d8Result = document.getElementById('d8Result'),
    dieRoll10,
    d10 = document.getElementById('d10'),
    d10Result = document.getElementById('d10Result'),
    dieRoll12,
    d12 = document.getElementById('d12'),
    d12Result = document.getElementById('d12Result'),
    dieRoll20,
    d20 = document.getElementById('d20'),
    d20Result = document.getElementById('d20Result'),
    dieRoll100;
    d100 = document.getElementById('d100'),
    d100Result = document.getElementById('d100Result'),

d4.onclick = function () {getDieRoll4()};
function getDieRoll4 () {
  dieRoll4 = Math.floor(Math.random() * 4)+1;
  d4Result.innerHTML = dieRoll4;
}

d6.onclick = function () {getDieRoll6()};
function getDieRoll6 () {
  dieRoll6 = Math.floor(Math.random() * 6)+1;
  d6Result.innerHTML = dieRoll6;
}

d8.onclick = function () {getDieRoll8()};
function getDieRoll8 () {
  dieRoll8 = Math.floor(Math.random() * 8)+1;
  d8Result.innerHTML = dieRoll8;
}

d10.onclick = function () {getDieRoll10()};
function getDieRoll10 () {
  dieRoll10 = Math.floor(Math.random() * 10)+1;
  d10Result.innerHTML = dieRoll10;
}

d12.onclick = function () {getDieRoll12()};
function getDieRoll12 () {
  dieRoll12 = Math.floor(Math.random() * 12)+1;
  d12Result.innerHTML = dieRoll12;
}

d20.onclick = function () {getDieRoll20()};
function getDieRoll20 () {
  dieRoll20 = Math.floor(Math.random() * 20)+1;
  d20Result.innerHTML = dieRoll20;
}

d100.onclick = function () {getDieRoll100()};
function getDieRoll100 () {
  dieRoll100 = Math.floor(Math.random() * 100)+1;
  d100Result.innerHTML = dieRoll100;
}
