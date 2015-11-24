//Gallery functionality
var galleryAnchorList = document.getElementById("gallery").getElementsByTagName("a");

for (i = 0; i < galleryAnchorList.length; i++) {
  galleryAnchorList[i].onmouseover = updateBigPic;
}

function updateBigPic () {
	var bigPic = this.href;
	document.getElementById("showcase").src = bigPic;	
}

//Update copyright date
var copy_year = document.getElementById("copy_year");
var today_is = document.getElementById("today_is");
var my_date = new Date();
var my_year = my_date.getFullYear();
var my_day = my_date.getDate();
var my_month = my_date.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today_date = months[my_month] + " " + my_day + ", " + my_year;
copy_year.innerHTML = my_year;