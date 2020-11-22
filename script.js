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


//reset button reset the table
function resetTable()
{
    for(var i=0;i<cell.length;i++)
    {
      initialMatrix[i].textContent = cell[i].textContent;
    }
}

//start button
function startTheGame()
{
  if(clicked==true)
  {
    for(var i=0;i<38;i++)
    {
        cell[Math.floor((Math.random() * cell.length))].textContent =  Math.floor((Math.random() * 9)+1);
    }
    initialMatrix = cell;
    clicked = false;
    return;
  }

  if(clicked==false)
  {
    alert("Game is already started");
  }
}
