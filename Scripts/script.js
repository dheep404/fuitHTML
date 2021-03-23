"use strict";

//const prompt = require("prompt-sync")({ sigint: true });



const reel1 = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓"];
const reel2 = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓"];
const reel3 = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓"];

let money = 100;



//While there is money, go round. In this instance, 100 times.
function spinReels() {


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

let v = 0

function startReels() {
  requestAnimationFrame(scrollUp)
}



let r = document.getElementsByClassName("reelWindow")

reel1.forEach(f => r[0].innerHTML += f)
reel2.forEach(f => r[1].innerHTML += f)
reel3.forEach(f => r[2].innerHTML += f)


const reelHeight = r[0].scrollHeight

r[0].innerHTML += '🍇 🍈 🍉'
r[1].innerHTML += '🍇 🍈 🍉'
r[2].innerHTML += '🍇 🍈 🍉'

function scrollUp() {

  let a = document.getElementsByClassName("reelWindow")

  a[0].scrollTop = v
  a[1].scrollTop = v
  a[2].scrollTop = v
  v += 9

  if (v > reelHeight) {
    v = 0
  }

  requestAnimationFrame(scrollUp)

}






