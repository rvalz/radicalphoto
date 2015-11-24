//Image slider
var thePic = 0;
var imgPath = new Array("images/slider_cow.jpg","images/slider_turtle.jpg","images/slider_alligator.jpg","images/slider_ladybug.jpg");
var slidePic = document.getElementById("slide-pic");
var rotateTime;
var slider = document.getElementById("slider");
var slogan = document.getElementById("slogan");
var sloganTimer;

function slideImages() {
    slidePic.src = imgPath[thePic];
    rotate();
}

function rotate() {
    thePic++;
    if (thePic === imgPath.length) {
        thePic = 0;
    }
    slidePic.src = imgPath[thePic];
    rotateTime = setTimeout(rotate, 2500);
    if (thePic === 2) {
        slogan.innerHTML = "Capturing Nature";
        slogan.style.fontSize = ("250%");
        slider.style.background = "#8aba32";
    }
    else {
        slogan.innerHTML = "Award-Winning Photography";
        slogan.style.fontSize = ("100%");
        slider.style.background = "#333";
    }
}

//Update copyright date in footer
var copy_year = document.getElementById("copy_year");
var today_is = document.getElementById("today_is");
var my_date = new Date();
var my_year = my_date.getFullYear();
var my_day = my_date.getDate();
var my_month = my_date.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today_date = months[my_month] + " " + my_day + ", " + my_year;
copy_year.innerHTML = my_year;

window.onload = slideImages;