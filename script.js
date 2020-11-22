//get values

var cell = document.getElementsByTagName("td");

//check for a solution



//check 



//fill random values
for(var i=0;i<15;i++)
{
    cell[i].textContent =  Math.floor((Math.random() * 9)+1);
}
