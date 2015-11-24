//Update date info variables and functions
var copy_year = document.getElementById("copy_year");
var today_is = document.getElementById("today_is");
var my_date = new Date();
var my_year = my_date.getFullYear();
var my_day = my_date.getDate();
var my_month = my_date.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today_date = months[my_month] + " " + my_day + ", " + my_year;
copy_year.innerHTML = my_year; // update copyright year in footer
today_is.innerHTML = today_date; // update today's date

//Show pics of team members
var sheila = document.getElementById("sheila");
var frank = document.getElementById("frank");
var joanne = document.getElementById("joanne");
var bio = document.getElementById("bio");
var img = new Image();
img.onload = function() {
    bio.appendChild(img);
}
function showFrank() {
    bio.style.display = "block";
    img.src = "images/bio3-frank.jpg";
}
function showJoanne() {
    bio.style.display = "block";
    img.src = "images/bio2-joanne.jpg";
}
function showSheila() {
    bio.style.display = "block";
    img.src = "images/bio1-sheila.jpg";
}
function hideFrank() {
    bio.style.display = "none";
}
function hideSheila() {
    bio.style.display = "none";
}
function hideJoanne() {
    bio.style.display = "none";
}
sheila.onmouseover = showSheila;
frank.onmouseover = showFrank;
joanne.onmouseover = showJoanne;
sheila.onmouseout = hideSheila;
frank.onmouseout = hideFrank;
joanne.onmouseout = hideJoanne;