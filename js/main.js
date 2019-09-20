//open drop down menu
//clickable images inside dropdown
//cycle through background colors on timer
var ycoord = document.getElementById("balloonFloat").getBoundingClientRect();
document.getElementById("menuImage").addEventListener("click", openMenu); //targets element and says what function to run on clickable
document.getElementById("balloonFloat").addEventListener("click", float);
function float()
{

  while (ycoord.y != 0)
  {
  ycoord.y = (ycoord.y - 3);
  }
  window.setTimeout("float()", 2000);
}
function openMenu()
{
  document.getElementById("dropdown").classList.toggle("active");
  //document.getElementById("menuImage").style.display = "none";
}
