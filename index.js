function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function generate_and_return_SillyNumber() {
let sillynumber = getRandomInt(1, 999);
console.log("this webpage (temporary) silly number is:");

console.log("#-------#");
console.log("|  " + sillynumber + "  |");
console.log("#-------#");

document.getElementById("sillynumber").innerHTML = sillynumber;
}

function clock() {
var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();
document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
setInterval(clock, 1000);
}

function sillybutton() {
  for (let i = 0; i < 50; i++) {
  let randomNum = Math.floor(Math.random() * 11);
    if (randomNum === 1) {
    alert("hi");
} else if (randomNum === 2) {
    alert("h");
}
else if (randomNum === 3) {
    alert("allo");
}
else if (randomNum === 4) {
    alert("hey");
}
else if (randomNum === 5) {
    alert("sup");
}
else if (randomNum === 6) {
    alert("hello");
}
else if (randomNum === 7) {
    alert("yellow");
}
else if (randomNum === 8) {
    alert("moin");
}
else if (randomNum === 9) {
    alert("hewwo");
}
else if (randomNum === 10) {
    alert("hola");
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generate_and_return_SillyNumber();
  clock();
});