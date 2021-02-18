"use strict";

//const prompt = require("prompt-sync")({ sigint: true });

const a = "Apple";
const b = "Banana";
const m = "Mango";
const d = "Diamond";
const l = "Lychee";
const k = "Kiwi";
const s = "Strawberry";

const reel1 = [a, b, m, d, a, b, m, d, l, b, k, s];
const reel2 = [a, d, m, b, b, m, a, b, l, m, k, s];
const reel3 = [m, b, m, a, a, b, d, l, m, b, k, s];

let money = 100;


//While there is money, go round. In this instance, 100 times.
function spinReels (){


//while (money) {
  console.log("You have £" + money);
  prompt("Press enter to spin the wheels");

  money--; //Can use "money -1" to decrement by 1.

  let p1 = Math.floor(Math.random() * 10);
  let p2 = Math.floor(Math.random() * 10);
  let p3 = Math.floor(Math.random() * 10);

  console.log(reel1[p1] + " " + reel2[p2] + " " + reel3[p3]);

  if (reel1[p1] == reel2[p2] && reel2[p2] == reel3[p3]) {
    console.log("You win :)");

    if (reel1[p1] == "Apple") {
      money = money + 20;
      console.log("£20");
    } else if (reel1[p1] == "Banana") {
      money = money + 30;
      console.log("£30");
    } else if (reel1[p1] == "Mango") {
      money = money + 40;
      console.log("£40");
    } else if (reel1[p1] == "Diamond") {
      money = money + 50;
      console.log("£50");
    } else if (reel1[p1] == "Lychee") {
      money = money + 70;
      console.log("£70");
    }
  }
}

function makeRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

let v=0

function scrollUp(){

  let a = document.getElementsByClassName("window")
  a[0].scrollTop=v
  v+=10
  
}






