document.addEventListener('DOMContentLoaded', function () {

var imgArray = new Array(); //CREATE ARRAY

imgArray[0] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
imgArray[0].src = '../images/backgrounds/one.png'; //SET IMAGE SOURCE LOCATION

imgArray[1] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
imgArray[1].src = '../images/backgrounds/two.png'; //SET IMAGE SOURCE LOCATION

imgArray[2] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
imgArray[2].src = '../images/backgrounds/three.png'; //SET IMAGE SOURCE LOCATION

imgArray[3] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
imgArray[3].src = '../images/backgrounds/four.png'; //SET IMAGE SOURCE LOCATION

imgArray[4] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
imgArray[4].src = '../images/backgrounds/five.png'; //SET IMAGE SOURCE LOCATION

imgArray[5] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
imgArray[5].src = '../images/backgrounds/six.png'; //SET IMAGE SOURCE LOCATION

imgArray[6] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
imgArray[6].src = '../images/backgrounds/enviroment.png'; //SET IMAGE SOURCE LOCATION

var rand = imgArray[Math.floor(Math.random() * imgArray.length)];

document.getElementsByTagName("body")[0].style = "background: url('" + rand.src + "');"

    alwaysCalled(44, 44); //FUNCTION CALLED FROM function.js FUNCTION RESPONSIBLE FOR NEAR ENOUGH EVERYTHING
    exits(); //FUNCTION CALLED FROM function.js FUNCTION RESPONSIBLE FOR TRACKING USER LOCATION TO CHECK IF THEY LEAVE THE PAGE

    alert("YOU'RE ABOUT TO EMBARK THROUGH THE MAZE, CHOOSE WISELY"); //DISPLAY MESSAGE AS SOON AS PAGE LOADS

});