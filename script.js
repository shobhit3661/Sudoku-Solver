//get values

var cell = document.getElementsByTagName("td");

for(var i=0;i<15;i++)
{
    cell[Math.floor((Math.random() * cell.length))].textContent =  Math.floor((Math.random() * 9)+1);
}
