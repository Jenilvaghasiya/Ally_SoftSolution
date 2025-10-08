// // // document.getElementById("count-el").innerHTML = 5;
// // let a =  5;
// // let b =  6;

// // let count = a + b;

// // console.log(count)

// let myAge = 35
// let humaaDogRatio = 7

// let myDogAge = myAge * humaaDogRatio
// console.log(myDogAge)

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0; 
}