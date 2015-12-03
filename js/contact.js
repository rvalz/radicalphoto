// The Form
var theName = document.getElementById("username");
var theEmail = document.getElementById("email");
var theMessage = document.getElementById("my_message");
var submit_btn = document.getElementById("submit-btn");
var myForm = document.getElementById("myform");
var errorName = document.getElementById("error-name");
var errorEmail = document.getElementById("error-email");
var errorMsg = document.getElementById("error-msg");
var errorWarning = document.getElementById("errors");
var resetBtn = document.getElementById("reset-btn");

myForm.onsubmit = function() {
    var errors = 0;
    var userName = theName.value;
    var userEmail = theEmail.value;
    var userMessage = theMessage.value;

    if (userName == "") {
        theName.style.border = "1px solid #C00";
        theName.style.boxShadow = "0 0 5px #C00";
        theName.style.background = "#FF9";
        errorName.innerHTML = "This field is required";
        errorName.style.color = "#C00";
        errors++;
    } else {
        theName.style.border = "1px solid green";
        theName.style.background = "#FFF";
        theName.style.boxShadow = "none";
        errorName.innerHTML = " ";
    }
    if (userEmail == "") {
        theEmail.style.border = "1px solid #C00";
        theEmail.style.background = "#FF9";
        theEmail.style.boxShadow = "0 0 5px #C00";
        errorEmail.innerHTML = "This field is required";
        errorEmail.style.color = "#C00";
        errors++;
    } else {
        theEmail.style.border = "1px solid green";
        theEmail.style.background = "#FFF";
        theEmail.style.boxShadow = "none";
        errorEmail.innerHTML = " ";
    }

    if (userMessage == "") {
        theMessage.style.border = "1px solid #C00";
        theMessage.style.background = "#FF9";
        theMessage.style.boxShadow = "0 0 5px #C00";
        errorMsg.innerHTML = "This field is required";
        errorMsg.style.color = "#C00";
        errors++;
    } else {
        theMessage.style.border = "1px solid green";
        theMessage.style.background = "#FFF";
        theMessage.style.boxShadow = "none";
        errorMsg.innerHTML = " ";
    }

    if (errors>0) {
        errorWarning.style.display = "block";
        errorWarning.style.color = "#C00";
        return false;
    } 
    else {
        errorWarning.style.display = "none";  
    }
}

resetBtn.onclick = function () {
    myForm.reset();
    theMessage.style.border = "1px solid #333";
    theMessage.style.background = "#FFF";
    theMessage.style.boxShadow = "none";
    errorMsg.innerHTML = " ";
    theEmail.style.border = "1px solid #CCC";
    theEmail.style.background = "#FFF";
    theEmail.style.boxShadow = "none";
    errorEmail.innerHTML = " ";
    theName.style.border = "1px solid #CCC";
    theName.style.background = "#FFF";
    theName.style.boxShadow = "none";
    errorName.innerHTML = " ";
    errorWarning.style.display = "none";
}

//Update copyright date in footer
var copy_year = document.getElementById("copy_year");
var my_date = new Date();
var my_year = my_date.getFullYear();
copy_year.innerHTML = my_year;
