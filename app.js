
var DOB = prompt("Enter your date of birth in YYYY format:");
var date = new Date();
var year = date.getFullYear();
var age = year - DOB;
document.write("Your age is " + age);
document.write("<br>Your birth year is " + DOB);
