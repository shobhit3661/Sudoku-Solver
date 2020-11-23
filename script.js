//get values

var cell = document.getElementsByTagName("td");
var start = document.querySelector("#st");
var restart = document.querySelector("#re");
var solve = document.querySelector("#so");
var reset = document.querySelector("#b4");
var initialMatrix;
var clicked = true;
//check button calls
start.addEventListener('click',startTheGame);
reset.addEventListener('click',resetTable);
restart.addEventListener('click',startNewGame);
//debug section
function debug()
{
  for(var i=0;i<cell.length;i++)
  {
    console.log(cell[i].textContent);
  }
}

//restart new Game
function startNewGame()
{
  clicked = true;
  for(var i=0;i<cell.length;i++)
  {
    cell[i].textContent = "";
  }
  startTheGame();
}

//reset button reset the table
function resetTable()
{
    for(var i=0;i<initialMatrix.length;i++)
    {
      console.log(initialMatrix[i].textContent);
    }
    for(var i=0;i<initialMatrix.length;i++)
    {
      cell[i].textContent = initialMatrix[i].textContent;
    }
}

//start button
function startTheGame()
{
  if(clicked==true)
  {
    for(var i=0;i<38;i++)
    {
        cell[Math.floor((Math.random() * cell.length))].textContent =  Math.floor((Math.random()*9)+1);
    }
    debug();
    initialMatrix = cell;
    clicked = false;
    return;
  }

  if(clicked==false)
  {
    alert("Game is already started");
  }
}
