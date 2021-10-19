/*
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView()
{
  for (i = 0; i < elements.length; i++)
   {
    elements[i].style.width = "100%";
   }
}

// Grid View
function gridView() 
{
  for (i = 0; i < elements.length; i++)
   {

    elements[i].style.width = "25%";
   }
}
/* Optional: Add active class to the current button (highlight it) 
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "wwww");
    this.className += " active";
  });
}

*/

$(document).ready(function() {
  $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
  $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});