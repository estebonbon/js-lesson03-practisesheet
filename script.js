//var twelveString = "12";
//var twelveNum = 12;

//if (twelveString === twelveNum) {
//console.log("These two variable values and types are the same");
//} else if (twelveString == twelveNum) {
//console.log("These two variable values are the same");
//} else {
//console.log("Error 404");
//}

//var hoursSlept = prompt("Enter the number of hours you slept between 0-12");

//if (hoursSlept > 12) {
//console.log("Nice try. Enter the real number!");
//} else if (hoursSlept >= 8) {
//console.log("Wow, Good job. Sleep is your bestfriend :)");
//} else if (hoursSlept > 5) {
//console.log("Sleep is important, this is your warning!");
//} else {
//console.log("Cancel your plans, you have sleep to do!");
//}

var chocolate = Number(
  prompt("Enter a number between 0-10 for pieces of chocolate desired!")
);

var chocolateLeftover = 10 - chocolate;

if (chocolateLeftover === 10) {
  alert("No chocolate, what are you alergic?");
} else if (chocolateLeftover >= 6) {
  alert(`There are still ${chocolateLeftover} pieces left!`);
} else if (chocolateLeftover >= 1) {
  alert(`There are ${chocolateLeftover} pieces left. Running low!`);
} else {
  alert("Were out of chocolate! but you can buy apples!");
}
