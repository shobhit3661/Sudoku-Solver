//get values

var cell = document.getElementsByTagName("td");
var start = document.querySelector("#st");
var restart = document.querySelector("#re");
var solve = document.querySelector("#so");
var reset = document.querySelector("#b4");
//check button calls

start.addEventListener('click',startTheGame);
//start button

function startTheGame()
{
  for(var i=0;i<15;i++)
  {
      cell[i].textContent =  Math.floor((Math.random() * 9)+1);
  }
}
