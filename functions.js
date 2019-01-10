var deadBodyIdNum = 0; //USED IN SETTING UNIQUE ID NUMBER
var enemyIdNum = 0; //USED IN SETTING UNIQUE ID NUMBER
var CoinAmount = 0; //USED TO DISPLAY COINS COLLECTED BY USER
var north = 0; //USED TO FOLLOW USERS DIRECTIONAL MOVEMENTS
var east = 0; //USED TO FOLLOW USERS DIRECTIONAL MOVEMENTS
var south = 0; //USED TO FOLLOW USERS DIRECTIONAL MOVEMENTS
var west = 0; //USED TO FOLLOW USERS DIRECTIONAL MOVEMENTS
var fightEnemy = false; //USED TO START FIGHT

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

var enemyImgArray = new Array(); //CREATE ARRAY

enemyImgArray[0] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
enemyImgArray[0].src = '../images/Enemies/bloodKnight.png'; //SET IMAGE SOURCE LOCATION

enemyImgArray[1] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
enemyImgArray[1].src = '../images/Enemies/FireMonster.png'; //SET IMAGE SOURCE LOCATION

enemyImgArray[2] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
enemyImgArray[2].src = '../images/Enemies/floatyMonster.png'; //SET IMAGE SOURCE LOCATION

enemyImgArray[3] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
enemyImgArray[3].src = '../images/Enemies/hellHound.png'; //SET IMAGE SOURCE LOCATION

enemyImgArray[4] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
enemyImgArray[4].src = '../images/Enemies/knightEnemy.gif'; //SET IMAGE SOURCE LOCATION

enemyImgArray[5] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
enemyImgArray[5].src = '../images/Enemies/skullHead.png'; //SET IMAGE SOURCE LOCATION

enemyImgArray[6] = new Image(); //ARRAY CONTENT IMAGE LOCATIONS
enemyImgArray[6].src = '../images/Enemies/wildfire(enemy).png'; //SET IMAGE SOURCE LOCATION

var myArray = [0, 0, 0, 1, 1, 1, 2, 3, 4]; //ARRAY OF NUMBERS USED TO CHOOSE RANDOM AMOUNT OF COINS DISPLAYED

var myEnemyArray = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]; //ARRAY OF NUMBERS USED TO CHOOSE RANDOM AMOUNT OF ENEMIES DISPLAYED

function alwaysCalled(left, top) { //PARAMETERS USED TO SET CHARACTER INITIAL POSITION

    var cannot = document.createElement("p");
    var cannotText = document.createTextNode("You must defeat all enemies before continuing");
    cannot.appendChild(cannotText);
    cannot.setAttribute("style", "position: absolute; left: 20%; top: 40%; font-size: 22px; color: white; opacity: 0; z-index: 4;");
    cannot.id = "cannot";
    document.body.appendChild(cannot);

    var something = true; //USED IN LATER FUNCTION IN AN IF STATEMENT

    var br = document.createElement("br"); //CREATE HTML BREAK POINTS
    var br1 = document.createElement("br"); //CREATE HTML BREAK POINTS
    var br2 = document.createElement("br"); //CREATE HTML BREAK POINTS
    var br3 = document.createElement("br"); //CREATE HTML BREAK POINTS
    var br4 = document.createElement("br"); //CREATE HTML BREAK POINTS
    var popup = document.createElement("div"); //CREATE HTML DIV 
    var popupTextW = document.createTextNode("W or Up Arrow - UP"); //TEXT CONTENT FOR DIV
    var popupTextA = document.createTextNode("A or Left Arrow - LEFT"); //TEXT CONTENT FOR DIV
    var popupTextS = document.createTextNode("S or Down Arrow - DOWN"); //TEXT CONTENT FOR DIV
    var popupTextD = document.createTextNode("D or Right Arrow - RIGHT"); //TEXT CONTENT FOR DIV
    var popupTextE = document.createTextNode("E - INTERACT"); //TEXT CONTENT FOR DIV
    var popupTextC = document.createTextNode("C - OPEN/CLOSE MENU"); //TEXT CONTENT FOR DIV
    popup.id = "popup"; //SET UNIQUW ID FOR POPUP
    popup.appendChild(popupTextW); //SET TEXT AS TEXT OF POPUP
    popup.appendChild(br); //ADD BREAK POINT TO CREATE LIST EFFECT
    popup.appendChild(popupTextA); //SET TEXT AS TEXT OF POPUP
    popup.appendChild(br1); //ADD BREAK POINT TO CREATE LIST EFFECT
    popup.appendChild(popupTextS); //SET TEXT AS TEXT OF POPUP
    popup.appendChild(br2); //ADD BREAK POINT TO CREATE LIST EFFECT
    popup.appendChild(popupTextD); //SET TEXT AS TEXT OF POPUP
    popup.appendChild(br3); //ADD BREAK POINT TO CREATE LIST EFFECT
    popup.appendChild(popupTextE); //SET TEXT AS TEXT OF POPUP
    popup.appendChild(br4); //ADD BREAK POINT TO CREATE LIST EFFECT
    popup.appendChild(popupTextC); //SET TEXT AS TEXT OF POPUP
    popup.setAttribute("style", "position: absolute; z-index: 2; opacity: 0; background-color: white; left: 35%; top: 35%; font-size: 18px; text-align: center;"); //CSS STYLING FOR POPUP
    document.body.appendChild(popup); //DISPLAY POPUP WITH ABOVE PROPERTIES

    var element = document.createElement("p"); //CREATE A HTML <P> TAG
    var elementText = document.createTextNode("Press C for controls menu"); //CREATE TEXT NODE (CONTENT FOR <P> TAGE)
    element.id = "controls" //SET UNIQUE ID
    element.appendChild(elementText); //SET AS <P> TAG TEXT
    element.setAttribute("style", "position: absolute; right: 2%; top: -10px; font-size: 18px; z-index: 1; color: white;"); //CSS STYLING OF ELEMENT VARIABLE (<P> TAG)
    document.body.appendChild(element); //DISPLAY TEXT WITH ABOVE PROPERTIES

    var op = 0.1;  // INITIAL OPACITY
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 10) { //IF OPACITY IS BIGGER THAN OR EQUAL TO TEN
            while (op > 0.1) { //WHILE ELEMENT OPACITY IS GREATER THAN 0.1 DO THE FOLLOWING
                op = op - 0.1 //DECREASE OPACITY BY 0.1
            }
        }
        element.style.opacity = op; //SET VARIABLE ELEMENT OPACITY TO VARIABLE OP VALUE
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1; //INCREASE OPACITY
    }, 50); //50 MILLISECONDS

    coinCounter();


    var trench = document.createElement("img"); //CREATE HTML IMAGE ELEMENT
    trench.src = "../images/backgrounds/trench.png"; //SET IMAGE SOURCE LOCATION
    trench.id = "trench"; //SET IMAGE ELEMENT UNIQUE ID
    trench.setAttribute("style", "position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: -1;"); //CSS STYLING OF ELEMENT
    document.body.appendChild(trench); //DISPLAY IMG TRENCH (PLAYER WALK WAY)

    var current = 0; //USED TO CHANGE OPACITY OF CHARACTER WHEN BUTTON BEING CLICKED (ILLUSION OF WALKING)

    var slide1 = document.createElement("img"); //CREATE HTML IMAGE ELEMENT                                                                      
    slide1.src = "../images/Character/back1.png"; //SET IMAGE SOURCE LOCATION 
    slide1.id = "slide1"; //SET IMAGE ELEMENT UNIQUE ID                                                                                                           
    slide1.className = "mySlides"; //SET IMAGE ELEMENT CLASS NAME (USED WHEN THE SAME ACTION OR ACTIONS NEED TO BE DONE TO MULTIPLE ELEMENTS)
    slide1.setAttribute("style", "position: absolute; left:" + left + "%; top: " + top + "%; width: 25px; z-index: 1;"); //CSS STYLING OF ELEMENT                                                                                                                 // Set class name (style)
    document.body.appendChild(slide1);  //CHARACTER INITAL STATE (SHOWN)

    var slide2 = document.createElement("img"); //CREATE HTML IMAGE ELEMENT                                                                                                   
    slide2.src = "../images/Character/back2.png"; //SET IMAGE SOURCE LOCATION                                                                                                                 
    slide2.className = "mySlides"; //SET IMAGE ELEMENT CLASS NAME (USED WHEN THE SAME ACTION OR ACTIONS NEED TO BE DONE TO MULTIPLE ELEMENTS)  
    slide2.setAttribute("style", "position: absolute; width: 25px; left: " + left + "%; top: " + top + "%; z-index: 1; opacity: 0;"); //CSS STYLING OF ELEMENT                                                                                                                   // Set class name (style)
    document.body.appendChild(slide2); //CHARACTER INITAL STATE (HIDDEN)

    var slide3 = document.createElement("img"); //CREATE HTML IMAGE ELEMENT                                                                                                 
    slide3.src = "../images/Character/back3.png"; //SET IMAGE SOURCE LOCATION                                                                                                                   
    slide3.className = "mySlides"; //SET IMAGE ELEMENT CLASS NAME (USED WHEN THE SAME ACTION OR ACTIONS NEED TO BE DONE TO MULTIPLE ELEMENTS)
    slide3.setAttribute("style", "position: absolute; width: 25px; left: " + left + "%; top: " + top + "%; z-index: 1; opacity: 0;"); //CSS STYLING OF ELEMENT                                                                                                                       // Set class name (style)
    document.body.appendChild(slide3); //CHARACTER INITAL STATE (HIDDEN)

    var slide4 = document.createElement("img"); //CREATE HTML IMAGE ELEMENT                                                                                                     
    slide4.src = "../images/Character/back4.png"; //SET IMAGE SOURCE LOCATION                                                                                                                    
    slide4.className = "mySlides"; //SET IMAGE ELEMENT CLASS NAME (USED WHEN THE SAME ACTION OR ACTIONS NEED TO BE DONE TO MULTIPLE ELEMENTS)
    slide4.setAttribute("style", "position: absolute; width: 25px; left: " + left + "%; top: " + top + "%; z-index: 1; opacity: 0;"); //CSS STYLING OF ELEMENT                                                                                                                      // Set class name (style)
    document.body.appendChild(slide4); //CHARACTER INITAL STATE (HIDDEN)

    var slides = document.getElementsByClassName('mySlides'); //USED IN CHANGING OPACITY OF IMAGES

    setInterval(move, 75); //EXECUTE FUNCTION EVERY 75 MILLISECONDS
    var keys = {}

    document.body.onkeydown = function (e) {
        keys[e.keyCode] = true; //SAVE WHAT KEY IS BEING PRESSED
    };

    document.body.onkeyup = function (e) {
        delete keys[e.keyCode]; //CLEAR WHAT KEY WAS BEING PRESS RESET TO NO KEY PRESSED
    };

    function move() {
        for (var direction in keys) {
            if (!keys.hasOwnProperty(direction));

            if ((direction == 87 && fightEnemy == false) || (direction == 38 && fightEnemy == false)) { //DIRECTION = "W" KEY OR UP ARROW

                slide1.src = "../images/Character/back1.png"; //SET IMAGES RELEVANT TO DIRECTION
                slide2.src = "../images/Character/back2.png"; //       <---/\
                slide3.src = "../images/Character/back3.png"; //       <---||
                slide4.src = "../images/Character/back4.png"; //       <---|| 

                if (slide1.getBoundingClientRect().top > 251 || (slide1.getBoundingClientRect().left > 360 && slide1.getBoundingClientRect().right < 412)) { //IF CHARACTER LOCATION IS NORTH EXIT

                    for (var i = 0; i < slides.length; i++) { //LOOP THROUGH SLIDES LENGTH (CHARACTER IMAGES 4)                                                                                                    
                        slides[i].style.opacity = 0; //HIDE CHARACTER IMAGES 
                        var top = slides[i].offsetTop; //GET CHARACTER IMAGES TOP POSITION
                        slides[i].style.top = (top - 10) + "px"; //SET TOP POSITION TO 10 PX (CREATES ILLUSION OF WALKING OFF OF SCREEN IN CONTINUOUS MOVEMENT)                                                                                                          
                    }
                    current = (current != slides.length - 1) ? current + 1 : 0; //CHANGE CURRENT TO EQUAL A VALID IMAGE NUMBER (1 - 4)
                    slides[current].style.opacity = 1; //CHANGE OPACITY TO 1 TO SHOW THE NEXT CHARACTER IMAGE 
                }
            }

            if ((direction == 68 && fightEnemy == false) || (direction == 39 && fightEnemy == false)) { //DIRECTION = "D" KEY OR RIGHT ARROW

                slide1.src = "../images/Character/right1.png"; //SET IMAGES RELEVANT TO DIRECTION
                slide2.src = "../images/Character/right2.png"; //       <---/\
                slide3.src = "../images/Character/right3.png"; //       <---||
                slide4.src = "../images/Character/right4.png"; //       <---|| 

                if (slide1.getBoundingClientRect().right < 412 || (slide1.getBoundingClientRect().top > 251 && slide1.getBoundingClientRect().top < 291)) { //IF CHARACTER LOCATION IS EAST EXIT

                    for (var i = 0; i < slides.length; i++) { //LOOP THROUGH SLIDES LENGTH (CHARACTER IMAGES 4)                                                                                         
                        slides[i].style.opacity = 0; //HIDE CHARACTER IMAGES 
                        var left = slides[i].offsetLeft; //GET CHARACTER IMAGES LEFT POSITION
                        slides[i].style.left = (left + 10) + "px"; //SET LEFT POSITION TO 10 PX (CREATES ILLUSION OF WALKING OFF OF SCREEN IN CONTINUOUS MOVEMENT)                                                                                                      

                    }
                    current = (current != slides.length - 1) ? current + 1 : 0; //CHANGE CURRENT TO EQUAL A VALID IMAGE NUMBER (1 - 4)
                    slides[current].style.opacity = 1; //CHANGE OPACITY TO 1 TO SHOW THE NEXT CHARACTER IMAGE                     
                }
            }

            if ((direction == 65 && fightEnemy == false) || (direction == 37 && fightEnemy == false)) { //DIRECTION = "A" KEY OR LEFT ARROW

                slide1.src = "../images/Character/left1.png"; //SET IMAGES RELEVANT TO DIRECTION
                slide2.src = "../images/Character/left2.png"; //       <---/\
                slide3.src = "../images/Character/left3.png"; //       <---||
                slide4.src = "../images/Character/left4.png"; //       <---||

                if (slide1.getBoundingClientRect().left > 360 || (slide1.getBoundingClientRect().top > 251 && slide1.getBoundingClientRect().top < 291)) { //IF CHARACTER LOCATION IS WEST EXIT

                    for (var i = 0; i < slides.length; i++) { //LOOP THROUGH SLIDES LENGTH (CHARACTER IMAGES 4)                                                                                                
                        slides[i].style.opacity = 0; //HIDE CHARACTER IMAGES                                                                                                     
                        var right = slides[i].offsetLeft; //GET CHARACTER IMAGES LEFT POSITION
                        slides[i].style.left = (right - 10) + "px"; //SET RIGHT POSITION TO 10 PX (CREATES ILLUSION OF WALKING OFF OF SCREEN IN CONTINUOUS MOVEMENT) 
                    }
                    current = (current != slides.length - 1) ? current + 1 : 0; //CHANGE CURRENT TO EQUAL A VALID IMAGE NUMBER (1 - 4)
                    slides[current].style.opacity = 1; //CHANGE OPACITY TO 1 TO SHOW THE NEXT CHARACTER IMAGE 
                }
            }

            if ((direction == 83 && fightEnemy == false) || (direction == 40 && fightEnemy == false)) { //DIRECTION = "S" KEY OR DOWN ARROW

                slide1.src = "../images/Character/front1.png"; //SET IMAGES RELEVANT TO DIRECTION
                slide2.src = "../images/Character/front2.png"; //       <---/\
                slide3.src = "../images/Character/front3.png"; //       <---||
                slide4.src = "../images/Character/front4.png"; //       <---||

                if (slide1.getBoundingClientRect().top < 279 || (slide1.getBoundingClientRect().left > 360 && slide1.getBoundingClientRect().right < 412)) { //IF CHARACTER LOCATION IS SOUTH EXIT

                    for (var i = 0; i < slides.length; i++) { //LOOP THROUGH SLIDES LENGTH (CHARACTER IMAGES 4)                                                                                             
                        slides[i].style.opacity = 0; //HIDE CHARACTER IMAGES
                        var top = slides[i].offsetTop; //GET CHARACTER IMAGES TOP POSITION
                        slides[i].style.top = (top + 10) + "px"; //SET TOP POSITION TO 10 PX (CREATES ILLUSION OF WALKING OFF OF SCREEN IN CONTINUOUS MOVEMENT)                                                                                                           
                    }
                    current = (current != slides.length - 1) ? current + 1 : 0; //CHANGE CURRENT TO EQUAL A VALID IMAGE NUMBER (1 - 4)
                    slides[current].style.opacity = 1; //CHANGE OPACITY TO 1 TO SHOW THE NEXT CHARACTER IMAGE 
                }
            }

            if (direction == 67 && fightEnemy == false) { //DIRECTION = "C" KEY

                if (something == true) { //ONLY DO THIS IF POPUP IS NOT SHOWING
                    var op = 0.1;  // INITIAL OPACITY
                    popup.style.display = 'block';

                    var timer = setInterval(function () {
                        if (op >= 1) { //IF SHOWING THEN:
                            clearInterval(timer); //STOP INCREASTING OPACITY
                        }
                        popup.style.opacity = op; //SET OPACITY OF THE POPUP TO THE VALUE OF THE VARIABLE OP
                        popup.style.filter = 'alpha(opacity=' + op * 100 + ")";
                        op += op * 0.1; //INCREASE OPACITY GRADUALLY TO ADD FADE IN EFFECT

                    }, 20); //20 MILLISECONDS

                    something = false; //POPUP IS NOW SHOWING

                } else {

                    popup.setAttribute("style", "position: absolute; z-index: 2; opacity: 0; background-color: white; left: 35%; top: 35%; font-size: 18px; text-align: center;"); //HIDE POPUP
                    something = true; //POPUP IS NOT SHOWING
                }
            }

            if (direction == 69) { //DIRECTION = "E" KEY

                    
                var coins = document.getElementsByClassName("Coins"); //GET COINS DISPLAYED BY CLASS

                 for (var anything = 0; anything < coins.length; anything++) { //FOR AMOUNT OF COINS DISPLAYED

                    var coin = coins[anything].id; //GET DISPLAYED COINS ID

                    if ((document.getElementById(coin).getBoundingClientRect().top - 10 == document.getElementById("slide1").getBoundingClientRect().top) && (document.getElementById(coin).getBoundingClientRect().left == document.getElementById("slide1").getBoundingClientRect().left)) { //IF CHARACTER LOCATION IS EQUAL TO COIN LOCATION

                        document.body.removeChild(document.getElementById("CoinCounter")); //DELETE COIN COUNTER DISPLAY ONCE COLLECTED

                        CoinAmount++; //INCREASE USER COLLECTED COIN TOTAL BY ONE 

                        coinCounter(); //RE-PRINT USER COIN TOTAL WITH NEW VALUE

                        document.body.removeChild(document.getElementById(coin)); //DELETE COIN ELEMENT ONCE COLLECTED                          

                    } else if ((document.getElementById(coin).getBoundingClientRect().top - 5 == document.getElementById("slide1").getBoundingClientRect().top) && (document.getElementById(coin).getBoundingClientRect().left == document.getElementById("slide1").getBoundingClientRect().left)) { //IF CHARACTER LOCATION IS EQUAL TO COIN LOCATION

                        document.body.removeChild(document.getElementById("CoinCounter")); //DELETE COIN COUNTER DISPLAY ONCE COLLECTED

                        CoinAmount++; //INCREASE USER COLLECTED COIN TOTAL BY ONE

                        coinCounter(); //RE-PRINT USER COIN TOTAL WITH NEW VALUE

                        document.body.removeChild(document.getElementById(coin)); //DELETE COIN ELEMENT ONCE COLLECTED                         


                    } else if ((document.getElementById(coin).getBoundingClientRect().top - 6 == document.getElementById("slide1").getBoundingClientRect().top) && (document.getElementById(coin).getBoundingClientRect().left == document.getElementById("slide1").getBoundingClientRect().left)) { //IF CHARACTER LOCATION IS EQUAL TO COIN LOCATION

                        document.body.removeChild(document.getElementById("CoinCounter")); //DELETE COIN COUNTER DISPLAY ONCE COLLECTED

                        CoinAmount++; //INCREASE USER COLLECTED COIN TOTAL BY ONE

                        coinCounter(); //RE-PRINT USER COIN TOTAL WITH NEW VALUE

                        document.body.removeChild(document.getElementById(coin)); //DELETE COIN ELEMENT ONCE COLLECTED                         


                    }

                 }

            }

            if (direction == 70 && (north >= 15 || east >= 15 || south >= 15 || west >= 15)) { //DIRECTION = "F" KEY AND IS AT FINAL PAGE

                fight(); //EXECUTE FUNCTION FIGHT IN WHICH HAS THE REQUIRED CODE FOR THE CORRECT ELEMENTS TO BE DISPLAYED AND WORK CORRECTLY

            
            
            }

            if (direction == 80 && (north >= 15 || east >= 15 || south >= 15 || west >= 15)) { //DIRECTION = "C" KEY AND IS AT FINAL PAGE

                if (CoinAmount < 30) { //IF LESS THAN 30 DUE TO THIS BEING THE AMOUNT NEEDED TO PAY YOUR WAY OUT

                    fight(); //EXECUTE FUNCTION FIGHT IN WHICH HAS THE REQUIRED CODE FOR THE CORRECT ELEMENTS TO BE DISPLAYED AND WORK CORRECTLY

                }
                else {

                    var element = document.getElementsByTagName("div"); //GET ALL DIV ELEMENTS DISPLAYED

                    for (var index = element.length - 1; index >= 0; index--) { //FOR THE AMOUNT OF DIV ELEMENTS
                        element[index].parentNode.removeChild(element[index]); //REMOVE DIV ELEMENTS
                    }

                    var element1 = document.getElementsByTagName("img"); //GET ALL IMG ELEMENTS DISPLAYED

                    for (var index1 = element1.length - 1; index1 >= 0; index1--) { //FOR THE AMOUNT OF IMG ELEMENTS
                        element1[index1].parentNode.removeChild(element1[index1]); //REMOVE IMG ELEMENTS
                    }

                    var element2 = document.getElementsByTagName("p"); //GET ALL P ELEMENTS DISPLAYED

                    for (var index2 = element2.length - 1; index2 >= 0; index2--) { //FOR THE AMOUNT OF P ELEMENTS
                        element2[index2].parentNode.removeChild(element2[index2]); //REMOVE P ELEMENTS
                    }

                    CoinAmount = CoinAmount - 30;

                    var win = document.createElement("p"); //CREATE HTML <P> TAG
                    var winText = document.createTextNode("CONGRATULATIONS, YOU BEAT THE MAZE"); //CREATE TEXT FOR <P> TAG
                    win.appendChild(winText); //SET AS TEXT FOR <P> TAG
                    win.setAttribute("style", "position: absolute; left: 22.5%; top: 15%; color: white; font-size: 22px; text-align: center;"); //CSS STYLING <P> TAG
                    document.body.appendChild(win); //DISPLAY <P> TAG

                    var endScore = document.createElement("p"); //CREATE HTML <P> TAG
                    var endScoreText = document.createTextNode("You Collected: " + CoinAmount + " Coins"); //CREATE TEXT FOR <P> TAG
                    endScore.appendChild(endScoreText); //SET AS TEXT FOR <P> TAG
                    endScore.setAttribute("style", "position: absolute; left: 38%; top: 20%; color: white; font-size: 22px; text-align: center;"); //CSS STYLING <P> TAG
                    document.body.appendChild(endScore); //DISPLAY <P> TAG

                    var treasure = document.createElement("img");
                    treasure.src = "../images/treasure.png";
                    treasure.setAttribute("style", "position: absolute; width: 70%; left: 15%; top: 30%;");
                    document.body.appendChild(treasure);

                }

            }

            if (direction == 13) { //DIRECTION = "ENTER" KEY

                var a = document.getElementById("attack");
                var b = document.getElementById("attack1");
                
                if(a != null){
                    if (document.getElementById("attack").value == "attack") { //IF TEXT FIELD CONTENT EQUALS "attack"

                        document.getElementById("attack").value = ""; //CLEAR TEXT FIELD

                        diceRollAttack(); //RUN FUNCTION THAT ROLLS DICE TO DECIDE WHETHER HIT IS SUCCESSFUL AGAINST ENEMY ARE NOT

                }
            }else if(b != null){

                if (document.getElementById("attack1").value == "attack") { //IF TEXT FIELD CONTENT EQUALS "attack"

                    document.getElementById("attack1").value = ""; //CLEAR TEXT FIELD

                    diceRollAttack1(); //RUN FUNCTION THAT ROLLS DICE TO DECIDE WHETHER HIT IS SUCCESSFUL AGAINST ENEMY ARE NOT

                }
            }

            }

        }
    }

    var uniqueIdNumber = 0; //USED TO GIVE UNIQUE ID NUMBERS
    var uniqueIdNumber1 = 0; //USED TO GIVE UNIQUE ID NUMBERS

    function fight() {

        document.body.removeChild(document.getElementById("choice")); //REMOVE <P> TAG FROM DISPLAY

        enemyHearts = 5; //USED IN DISPLAYING THE HEART IMAGES
        characterHearts = 5; //USED IN DISPLAYING THE HEART IMAGES

        var Character = document.createElement("img"); //CREATE IMAGE ELEMENT
        Character.src = "../images/Character/left3.png"; //SET SOURCE LOCATION FOR IMAGE
        Character.setAttribute("style", "position: absolute; width: 50px; right: 25%; top: 45%;"); //CSS STYLING OF IMAGE
        document.body.appendChild(Character); //DISPLAY IMAGE

        var enemy = document.createElement("img"); //CREATE IMAGE ELEMENT
        enemy.src = "../images/Enemies/LavaMonster.png"; //SET SOURCE LOCATION FOR IMAGE
        enemy.setAttribute("style", "position: absolute; left: 3%; top: 30%; width: 375px;"); //CSS STYLING OF IMAGE
        document.body.appendChild(enemy); //DISPLAY IMAGE

        var enemyInfoBox = document.createElement("div"); //CREATE DIV ELEMENT
        enemyInfoBox.setAttribute("style", "position: absolute; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; height: 80px; width: 220px; top: 10%; left: 10%;"); //CSS STYLING FOR DIV ELEMENT
        var enemyName = document.createElement("p"); //CREATE <P> TAG
        var enemyNameText = document.createTextNode("Enemy Boss"); //CREATE TEXT FOR <P> TAG
        enemyName.appendChild(enemyNameText); //SET TEXT FOR <P> TAG
        enemyName.setAttribute("style", "position: absolute; font-size: 20px; left: 3px; top: -15px;"); //CSS STYLING FOR <P> TAG
        enemyInfoBox.appendChild(enemyName); //<P> TAG IN DIV ELEMENT
        enemyheartCount(enemyHearts, enemyInfoBox); //FUNCTION TO PRINT HEARTS FIRST PARAMETER IS AMOUNT (PRE SET ABOVE TO 5) AND THE OTHER TO WHICH DIV APPENDS THESE IMAGES
        document.body.appendChild(enemyInfoBox); //DISPLAY DIV WITH NAME OF ENEMY AND HEARTS

        var characterInfoBox = document.createElement("div"); //CREATE DIV ELEMENT
        characterInfoBox.setAttribute("style", "position: absolute; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; height: 80px; width: 220px; top: 10%; right: 10%;"); //CSS STYLING FOR DIV ELEMENT
        var Name = document.createElement("p"); //CREATE <P> TAG
        var NameText = document.createTextNode("??????"); //CREATE TEXT FOR <P> TAG
        Name.appendChild(NameText); //SET TEXT FOR <P> TAG
        Name.setAttribute("style", "position: absolute; font-size: 20px; left: 3px; top: -15px;"); //CSS STYLING FOR <P> TAG
        characterInfoBox.appendChild(Name); //<P> TAG IN DIV ELEMENT
        heartCount(characterHearts, characterInfoBox); //FUNCTION TO PRINT HEARTS FIRST PARAMETER IS AMOUNT (PRE SET ABOVE TO 5) AND THE OTHER TO WHICH DIV APPENDS THESE IMAGES
        document.body.appendChild(characterInfoBox); //DISPLAY DIV WITH <P> TAG AND HEARTS

        var options = document.createElement("div"); //CREATE DIV ELEMENT
        options.setAttribute("style", "position: absolute; bottom: 3px; left: 33%; height: 100px; width: 300px; background-color: #e8dea9; border-radius: 8px; border: 3px solid black;"); //CSS STYLING FOR DIV ELEMENT
        var title = document.createElement("p"); //CREATE <P> TAG
        var titleText = document.createTextNode("Type attack to fight:"); //CREATE TEXT FOR <P> TAG
        title.appendChild(titleText); //SET TEXT FOR <P> TAG
        title.setAttribute("style", "position: absolute; top: -15px; left: 55px; font-size: 20px;"); //CSS STYLING <P> TAG
        options.appendChild(title); //<P> TAG IN DIV ELEMENT
        var attack = document.createElement("input"); //CREATE <INPUT> TAG (TEXT BOX)
        attack.setAttribute("style", "position: absolute; bottom: 25px; left: 57px;"); //CSS STYLING TEXT BOX
        attack.id = "attack"; //TEXT BOX UNIQUE ID
        options.appendChild(attack); //TEXT BOX IN DIV
        document.body.appendChild(options); //DISPLAY DIV

        function generateEnemyImage() {

            uniqueIdNumber += 1; //ADD ONE TO uniqueIdNumber

            var heart1 = document.createElement('img'); //CREATE IMG ELEMENT
            heart1.className = "enemyhearts"; //GIVE IMAGE A CLASS NAME
            heart1.id = "enemyheart" + uniqueIdNumber; //IMAGE UNIQUE ID
            heart1.src = "../images/hearts/heart.png"; //SET IMAGE SOURCE LOCATION
            heart1.setAttribute("style", "height: 30px; width: 30px;"); //CSS STYLING FOR IMAGE
            return heart1; //RETURN IMAGE
        }

        function enemyheartCount(Hearts, a) {

            linebreak1 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
            a.appendChild(linebreak1); //ADD BREAKPOINT TO PARAMETER a WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
            linebreak2 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
            a.appendChild(linebreak2); //ADD BREAKPOINT TO PARAMETER a WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES

            for (var i = 0; i < Hearts; i++) { //FOR THE PARAMETER AMOUNT (5)
                a.appendChild(generateEnemyImage()); //EXECUTE FUNCTION THAT CREATES IMAGES WITH UNIQUE ID AND DIPLAY THEM
            }
        }

        function generateImage() {

            uniqueIdNumber1 += 1; //ADD ONE TO uniqueIdNumber

            var heart = document.createElement('img'); //CREATE IMG ELEMENT
            heart.className = "enemyhearts"; //GIVE IMAGE A CLASS NAME
            heart.id = "heart" + uniqueIdNumber1; //IMAGE UNIQUE ID
            heart.src = "../images/hearts/heart.png"; //SET IMAGE SOURCE LOCATION
            heart.setAttribute("style", "height: 30px; width: 30px;"); //CSS STYLING FOR IMAGE
            return heart; //RETURN IMAGE
        }

        function heartCount(z, x) {

            linebreak1 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
            x.appendChild(linebreak1); //ADD BREAKPOINT TO PARAMETER x WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
            linebreak2 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
            x.appendChild(linebreak2); //ADD BREAKPOINT TO PARAMETER x WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES

            for (var i = 0; i < z; i++) { //FOR THE PARAMETER AMOUNT (5)
                x.appendChild(generateImage()); //EXECUTE FUNCTION THAT CREATES IMAGES WITH UNIQUE ID AND DIPLAY THEM
            }
        }

    }
    var dice = {
        sides: 12,
        roll: function () {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1; //CHOOSE RANDOM NUMBER BETWEEN 1 AND 12
            return randomNumber;
        }
    }
    function printNumber(number) {
        var placeholder = document.createElement("div"); //CREATE DIV ELEMENT
        placeholder.setAttribute("style", "position: absolute; right: 20px; bottom: -15px; height: 30px; width: 30px; padding: 30px; margin: 30px auto; border: 1px solid gray; border-radius: 10px; font-size:22px; background-color: white; text-align: center; z-index: 6;"); //CSS STYLING DIV ELEMENT
        placeholder.innerHTML = number; //DISPLAY NUMBER IN DIV
        placeholder.className = "dice"; //SET CLASS NAME
        document.body.appendChild(placeholder); //DISPLAY DIV
    }
    var dice1 = {
        sides1: 12,
        roll: function () {
            var randomNumber1 = Math.floor(Math.random() * this.sides1) + 1; //CHOOSE RANDOM NUMBER BETWEEN 1 AND 12
            return randomNumber1;
        }
    }
    function printNumber1(number1) {
        var placeholder1 = document.createElement("div"); //CREATE DIV ELEMENT
        placeholder1.setAttribute("style", "position: absolute; right: 130px; bottom: -15px; height: 30px; width: 30px; padding: 30px; margin: 30px auto; border: 1px solid gray; border-radius: 10px; font-size:22px; background-color: white; text-align: center; z-index: 6;"); //CSS STYLING DIV ELEMENT
        placeholder1.innerHTML = number1; //DISPLAY NUMBER IN DIV
        placeholder1.className = "dice"; //SET CLASS NAME
        document.body.appendChild(placeholder1); //DISPLAY DIV
    }
    function diceRollAttack() {
    
        var result = dice.roll(); //RANDOMLY CHOOSE NUMBER BETWEEN 1 AND 12
        printNumber(result); //DISPLAY NUMBER IN DIV
    
        var result1 = dice1.roll(); //RANDOMLY CHOOSE NUMBER BETWEEN 1 AND 12
        printNumber1(result1); //DISPLAY NUMBER IN DIV
    
        if (result + result1 >= 14) {
    
            alert("hit");
    
            if (uniqueIdNumber == 0) {
    
                var element = document.getElementsByTagName("div"); //GET ALL DIV ELEMENTS
    
                for (var index = element.length - 1; index >= 0; index--) { //FOR AMOUNT OF DIV ELEMENTS
                    element[index].parentNode.removeChild(element[index]); //REMOVE DIV ELEMENETS
                }
    
                var element1 = document.getElementsByTagName("img"); //GET ALL IMAGE ELEMENTS
    
                for (var index1 = element1.length - 1; index1 >= 0; index1--) { //FOR AMOUNT OF DIV ELEMENTS
                    element1[index1].parentNode.removeChild(element1[index1]); //REMOVE DIV ELEMENETS
                }
    
                var element2 = document.getElementsByTagName("p"); //GET ALL <P> TAGS
    
                for (var index2 = element2.length - 1; index2 >= 0; index2--) { //FOR AMOUNT OF DIV ELEMENTS
                    element2[index2].parentNode.removeChild(element2[index2]); //REMOVE DIV ELEMENETS
                }
    
                var win = document.createElement("p"); //CREATE HTML <P> TAG
                var winText = document.createTextNode("CONGRATULATIONS, YOU BEAT THE MAZE"); //CREATE TEXT FOR <P> TAG
                win.appendChild(winText); //SET AS TEXT FOR <P> TAG
                win.setAttribute("style", "position: absolute; left: 22.5%; top: 15%; color: white; font-size: 22px; text-align: center;"); //CSS STYLING <P> TAG
                document.body.appendChild(win); //DISPLAY <P> TAG
    
                var endScore = document.createElement("p"); //CREATE HTML <P> TAG
                var endScoreText = document.createTextNode("You Collected: " + CoinAmount + " Coins"); //CREATE TEXT FOR <P> TAG
                endScore.appendChild(endScoreText); //SET AS TEXT FOR <P> TAG
                endScore.setAttribute("style", "position: absolute; left: 38%; top: 20%; color: white; font-size: 22px; text-align: center;"); //CSS STYLING <P> TAG
                document.body.appendChild(endScore); //DISPLAY <P> TAG
    
                var treasure = document.createElement("img"); //CREATE IMG ELEMENT
                treasure.src = "../images/treasure.png"; //SET IMAGE SOURCE LOCATION
                treasure.setAttribute("style", "position: absolute; width: 70%; left: 15%; top: 30%;"); //CSS STYLING IMAGE
                document.body.appendChild(treasure); //DISPLAY IMAGE
    
    
            }
    
            var x = document.getElementById("enemyheart" + uniqueIdNumber); //GET IMAGE BY UNIQUE ID
    
            if (x.getAttribute('src') === "../images/hearts/fullHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 
    
                uniqueIdNumber = uniqueIdNumber - 1; //SUBTRACT ONE FROM UNIQUE ID THEREFORE ALLOWING A DIFFERENT IMAGE TO BE CHECKED NEXT
    
                document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
            if (x.getAttribute('src') === "../images/hearts/threeQuarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 
    
                document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/fullHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
            if (x.getAttribute('src') === "../images/hearts/halfHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 
    
                document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/threeQuarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
            if (x.getAttribute('src') === "../images/hearts/quarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 
    
                document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/halfHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
            if (x.getAttribute('src') === "../images/hearts/heart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 
    
                document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
        } else {
    
            alert("Enemy hit successful");
    
            if (uniqueIdNumber1 == 0) {
    
                var element = document.getElementsByTagName("div"); //GET ALL DIV ELEMENTS
    
                for (var index = element.length - 1; index >= 0; index--) { //FOR THE AMOUNT OF DIV ELEMENTS
                    element[index].parentNode.removeChild(element[index]); //DELETE DIV ELEMENTS
                }
    
                var element1 = document.getElementsByTagName("img"); //GET ALL IMAGES
    
                for (var index1 = element1.length - 1; index1 >= 0; index1--) { //FOR THE AMOUNT OF IMAGES
                    element1[index1].parentNode.removeChild(element1[index1]); //DELETE IMAGES
                }
    
                var element2 = document.getElementsByTagName("p"); //GET ALL <P> TAGS
    
                for (var index2 = element2.length - 1; index2 >= 0; index2--) { //FOR AMOUNT OF <P> TAGS
                    element2[index2].parentNode.removeChild(element2[index2]); //DELETE <P> TAGS
                }
    
                var death = document.createElement("p"); //CREATE HTML <P> TAG
                var deathText = document.createTextNode("GAME OVER, BETTER LUCK NEXT TIME"); //CREATE TEXT FOR <P> TAG
                death.appendChild(deathText); //SET AS TEXT FOR <P> TAG
                death.setAttribute("style", "position: absolute; left: 24%; top: 15%; color: white; font-size: 22px; text-align: center;"); //CSS STYLING <P> TAG
                document.body.appendChild(death); //DISPLAY <P> TAG
    
                var skull = document.createElement("img"); //CREATE IMG ELEMENT
                skull.src = "../images/skull.png"; //SET IMAGE SOURCE LOCATION 
                skull.setAttribute("style", "position: absolute; width: 70%; left: 10%; top: 10%;"); //CSS STYLING IMAGE
                document.body.appendChild(skull); //DISPLAY IMAGE
    
    
            }
    
            var x = document.getElementById("heart" + uniqueIdNumber1);
    
            if (x.getAttribute('src') === "../images/hearts/fullHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 
    
                uniqueIdNumber1 = uniqueIdNumber1 - 1; //SUBTRACT ONE FROM UNIQUE ID THEREFORE ALLOWING A DIFFERENT IMAGE TO BE CHECKED NEXT
    
                document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
            if (x.getAttribute('src') === "../images/hearts/threeQuarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO
    
                document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/fullHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
            if (x.getAttribute('src') === "../images/hearts/halfHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO
    
                document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/threeQuarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
            if (x.getAttribute('src') === "../images/hearts/quarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO
    
                document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/halfHeart.png"); //CHANGE IMAGE SOURCE LOCATION
            }
    
            if (x.getAttribute('src') === "../images/hearts/heart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO
    
                document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION
    
            }
    
        }
    
    }

}
function createCoins() { //CREATE IMG TAGS WITH UNIQUE ID'S

    deadBodyIdNum += 1; //USED TO CREATE UNIQUE ID

    var s = document.createElement("img"); //CREATE HTML IMAGE TAGS
    s.src = "../images/deadBody.png" //SET SOURCE LOCATION OF IMAGE 
    s.id = "Coin" + deadBodyIdNum; //CREATE UNIQUE ID FOR IMAGE ELEMENTS
    s.className = "Coins"; //CREATE CLASS NAME FOR IMAGE
    return s;

}
function printCoins(amount) { //PRINTS IMG TAGS CREAETED IN createCoins(), PARAMETER = AMOUNT DISPLAYED, PARAMETER IS RANDOM NUMBER BETWEEN 1 AND 4

    for (var a = 0; a < amount; a++) { //FOR RANDOM NUMBER BETWEEN 1 AND 4 SET IN PARAMETER

        document.body.appendChild(createCoins()); //DISPLAY IMAGE CREATED IN createCoins()

    }

    deadBodyIdNum = 0; //RESET VARIABLE VALUE TO ZERO
}
function createEnemy(){ //CREATE IMG TAGS WITH UNIQUE ID'S

    var randEnemy = enemyImgArray[Math.floor(Math.random() * enemyImgArray.length)]; //CHOOSE RANDOM ELEMENT FROM imgArray

    enemyIdNum += 1; //USED TO CREATE UNIQUE ID

    var s = document.createElement("img"); //CREATE HTML IMAGE TAGS
    s.src = randEnemy.src  //SET SOURCE LOCATION OF IMAGE 
    s.id = "Enemy" + enemyIdNum; //CREATE UNIQUE ID FOR IMAGE ELEMENTS
    s.className = "Enemy";
    return s;

}
function printEnemy(enemyAmount){//PRINTS IMG TAG CREAETED IN createEnemy(), PARAMETER = AMOUNT DISPLAYED, PARAMETER IS RANDOM NUMBER EITHER 0 OR 1

    for (var a = 0; a < enemyAmount; a++) { //FOR RANDOM NUMBER BETWEEN 1 AND 4 SET IN PARAMETER

        document.body.appendChild(createEnemy()); //DISPLAY IMAGE CREATED IN createCoins()

    }

    enemyIdNum = 0; //RESET VARIABLE VALUE TO ZERO

}
function coinCounter() { //DISPLAYS PLAYERS COLLECTED COIN TOTAL

    var CoinCounter = document.createElement("p"); //CREATE HTML <P> TAG
    var CoinCounterText = document.createTextNode("Total Coins Collected: " + CoinAmount); //CREATE <P> TAG TEXT WITH VARIABLE ADDED VALUE FOR AMOUNT OF COINS COLLECTED
    CoinCounter.appendChild(CoinCounterText); //SET ABOVE VARIABLE AS <P> TAG TEXT
    CoinCounter.id = "CoinCounter"; //SET UNIQUE ID FOR <P> TAG
    CoinCounter.setAttribute("style", "position: absolute; right: 2%; top: 12px; font-size: 18px; color: white;"); //CSS STYLING OF <P> TAG
    document.body.appendChild(CoinCounter); //DISPLAY <P> TAG

}

var uniqueIdNumber = 0; //USED TO GIVE UNIQUE ID NUMBERS
var uniqueIdNumber1 = 0; //USED TO GIVE UNIQUE ID NUMBERS

var dice = {
    sides: 12,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1; //CHOOSE RANDOM NUMBER BETWEEN 1 AND 12
        return randomNumber;
    }
}
function printNumber(number) {
    var placeholder = document.createElement("div"); //CREATE DIV ELEMENT
    placeholder.setAttribute("style", "position: absolute; right: 20px; bottom: -15px; height: 30px; width: 30px; padding: 30px; margin: 30px auto; border: 1px solid gray; border-radius: 10px; font-size:22px; background-color: white; text-align: center; z-index: 6;"); //CSS STYLING DIV ELEMENT
    placeholder.innerHTML = number; //DISPLAY NUMBER IN DIV
    placeholder.className = "dice"; //SET CLASS NAME
    document.body.appendChild(placeholder); //DISPLAY DIV
}
var dice1 = {
    sides1: 12,
    roll: function () {
        var randomNumber1 = Math.floor(Math.random() * this.sides1) + 1; //CHOOSE RANDOM NUMBER BETWEEN 1 AND 12
        return randomNumber1;
    }
}
function printNumber1(number1) {
    var placeholder1 = document.createElement("div"); //CREATE DIV ELEMENT
    placeholder1.setAttribute("style", "position: absolute; right: 130px; bottom: -15px; height: 30px; width: 30px; padding: 30px; margin: 30px auto; border: 1px solid gray; border-radius: 10px; font-size:22px; background-color: white; text-align: center; z-index: 6;"); //CSS STYLING DIV ELEMENT
    placeholder1.innerHTML = number1; //DISPLAY NUMBER IN DIV
    placeholder1.className = "dice"; //SET CLASS NAME
    document.body.appendChild(placeholder1); //DISPLAY DIV
}
function diceRollAttack1() {

    var result = dice.roll(); //RANDOMLY CHOOSE NUMBER BETWEEN 1 AND 12
    printNumber(result); //DISPLAY NUMBER IN DIV

    var result1 = dice1.roll(); //RANDOMLY CHOOSE NUMBER BETWEEN 1 AND 12
    printNumber1(result1); //DISPLAY NUMBER IN DIV

    if (result + result1 >= 12) {

        alert("hit");

        if (uniqueIdNumber == 0) {

            var element = document.getElementsByTagName("div"); //GET ALL DIV ELEMENTS

            for (var index = element.length - 1; index >= 0; index--) { //FOR AMOUNT OF DIV ELEMENTS
                element[index].parentNode.removeChild(element[index]); //REMOVE DIV ELEMENETS
            }

            document.body.removeChild(document.getElementById("user")); //REMOVE CHARACTER IMG FROM DISPLAY

            document.body.removeChild(document.getElementById("userEnemy")); //REMOVE ENEMY IMG FROM DISPLAY

            document.body.removeChild(document.getElementById("battleBackground")); //REMOVE BACKGROUND IMG FROM DISPLAY

            uniqueIdNumber = 0;

            fightEnemy = false; //ALLOW CHARACTER TO MOVE AGAIN

        }else {

        var x = document.getElementById("enemyheart" + uniqueIdNumber); //GET IMAGE BY UNIQUE ID

        if (x.getAttribute('src') === "../images/hearts/fullHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 

            uniqueIdNumber = uniqueIdNumber - 1; //SUBTRACT ONE FROM UNIQUE ID THEREFORE ALLOWING A DIFFERENT IMAGE TO BE CHECKED NEXT

            document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

        if (x.getAttribute('src') === "../images/hearts/threeQuarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 

            document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/fullHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

        if (x.getAttribute('src') === "../images/hearts/halfHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 

            document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/threeQuarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

        if (x.getAttribute('src') === "../images/hearts/quarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 

            document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/halfHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

        if (x.getAttribute('src') === "../images/hearts/heart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 

            document.getElementById("enemyheart" + uniqueIdNumber).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }
    }
    } else {

        alert("Enemy hit successful");

        if (uniqueIdNumber1 == 0) {

            var element = document.getElementsByTagName("div"); //GET ALL DIV ELEMENTS

            for (var index = element.length - 1; index >= 0; index--) { //FOR THE AMOUNT OF DIV ELEMENTS
                element[index].parentNode.removeChild(element[index]); //DELETE DIV ELEMENTS
            }

            var element1 = document.getElementsByTagName("img"); //GET ALL IMAGES

            for (var index1 = element1.length - 1; index1 >= 0; index1--) { //FOR THE AMOUNT OF IMAGES
                element1[index1].parentNode.removeChild(element1[index1]); //DELETE IMAGES
            }

            var element2 = document.getElementsByTagName("p"); //GET ALL <P> TAGS

            for (var index2 = element2.length - 1; index2 >= 0; index2--) { //FOR AMOUNT OF <P> TAGS
                element2[index2].parentNode.removeChild(element2[index2]); //DELETE <P> TAGS
            }

            var death = document.createElement("p"); //CREATE HTML <P> TAG
            var deathText = document.createTextNode("GAME OVER, BETTER LUCK NEXT TIME"); //CREATE TEXT FOR <P> TAG
            death.appendChild(deathText); //SET AS TEXT FOR <P> TAG
            death.setAttribute("style", "position: absolute; left: 24%; top: 15%; color: white; font-size: 22px; text-align: center;"); //CSS STYLING <P> TAG
            document.body.appendChild(death); //DISPLAY <P> TAG

            var skull = document.createElement("img"); //CREATE IMG ELEMENT
            skull.src = "../images/skull.png"; //SET IMAGE SOURCE LOCATION 
            skull.setAttribute("style", "position: absolute; width: 70%; left: 10%; top: 10%;"); //CSS STYLING IMAGE
            document.body.appendChild(skull); //DISPLAY IMAGE


        }

        var x = document.getElementById("heart" + uniqueIdNumber1);

        if (x.getAttribute('src') === "../images/hearts/fullHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO 

            uniqueIdNumber1 = uniqueIdNumber1 - 1; //SUBTRACT ONE FROM UNIQUE ID THEREFORE ALLOWING A DIFFERENT IMAGE TO BE CHECKED NEXT

            document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

        if (x.getAttribute('src') === "../images/hearts/threeQuarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO

            document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/fullHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

        if (x.getAttribute('src') === "../images/hearts/halfHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO

            document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/threeQuarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

        if (x.getAttribute('src') === "../images/hearts/quarterHeart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO

            document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/halfHeart.png"); //CHANGE IMAGE SOURCE LOCATION
        }

        if (x.getAttribute('src') === "../images/hearts/heart.png") { //IF IMAGE SOURCE LOCATION IS EQUAL TO

            document.getElementById("heart" + uniqueIdNumber1).setAttribute("src", "../images/hearts/quarterHeart.png"); //CHANGE IMAGE SOURCE LOCATION

        }

    }

}
function exits() { //CREATES NEW BACKGROUND FROM ARRAY AND DISPLAYS DIFFERENT AMOUNTS OF COINS IN DIFFERENT LOCATIONS (ALL RANDOM)
    
    var t = document.getElementById("Enemy1");

    console.log(t);
    
    if (document.getElementById("slide1").getBoundingClientRect().top <= 0) { //CHARACTER ENTERS NORTH EXIT

        if(t == null){
        
            var elements = document.getElementsByClassName("Coins"); //GET IMAGES BY CLASS NAME

            while (elements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                elements[0].parentNode.removeChild(elements[0]); //REMOVE ALL COINS DISPLAYED
            }
            var enemyElements = document.getElementsByClassName("Enemy"); //GET IMAGES BY CLASS NAME

            while (enemyElements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                enemyElements[0].parentNode.removeChild(enemyElements[0]); //REMOVE ALL COINS DISPLAYED
            }

            var rand = imgArray[Math.floor(Math.random() * imgArray.length)]; //CHOOSE RANDOM ELEMENT FROM imgArray
            var randNum = myArray[Math.floor(Math.random() * myArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray
            var randEnemyNum = myEnemyArray[Math.floor(Math.random() * myEnemyArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray

            printCoins(randNum); //EXECUTE FUNCTION printCoins() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            printEnemy(randEnemyNum); //EXECUTE FUNCTION printEnemy() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            while (randNum > 0) {

                do {

                    leftPos = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos > 360 && leftPos < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Coin" + randNum).setAttribute("style", "position: absolute; left:" + leftPos + "px; top:" + topPos + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randNum = randNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }

            while (randEnemyNum > 0) {

                do {

                    leftPos1 = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos1 % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos1 > 360 && leftPos1 < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos1 = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos1 % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos1 = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Enemy" + randEnemyNum).setAttribute("style", "position: absolute; left:" + leftPos1 + "px; top:" + topPos1 + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randEnemyNum = randEnemyNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }
            document.getElementsByTagName("body")[0].style = "background: url('" + rand.src + "');" //SET RANDOM BACKGROUND SOURCE LOCATION

            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.top = 92 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }
            north++; //ADD ONE TO VARIABLE EAST TO LATER BE CHECKED IF VARIABLE VALUE EQUALS 15
        }else{

            var op = 0.1;  // INITIAL OPACITY
            document.getElementById("cannot").style.display = 'block';
            var timer = setInterval(function () {
                if (op >= 10) { //IF OPACITY IS BIGGER THAN OR EQUAL TO TEN
                    while (op > 0) { //WHILE ELEMENT OPACITY IS GREATER THAN 0.1 DO THE FOLLOWING
                        op = op - 0.1 //DECREASE OPACITY BY 0.1
                        clearInterval(timer); //STOP YHE FUNCTION FROM LOOPING
                    }
                }
                document.getElementById("cannot").style.opacity = op; //SET VARIABLE ELEMENT OPACITY TO VARIABLE OP VALUE
                document.getElementById("cannot").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1; //INCREASE OPACITY
            }, 50); //50 MILLISECONDS

            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.top = 8 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }

        }
    }
    if (document.getElementById("slide1").getBoundingClientRect().left >= 807) { //CHARACTER ENTERS EAST EXIT

        if(t == null){
            var elements = document.getElementsByClassName("Coins"); //GET IMAGES BY CLASS NAME

            while (elements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                elements[0].parentNode.removeChild(elements[0]); //REMOVE ALL COINS DISPLAYED
            }
            var enemyElements = document.getElementsByClassName("Enemy"); //GET IMAGES BY CLASS NAME

            while (enemyElements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                enemyElements[0].parentNode.removeChild(enemyElements[0]); //REMOVE ALL ENEMIES DISPLAYED
            }

            var rand = imgArray[Math.floor(Math.random() * imgArray.length)]; //CHOOSE RANDOM ELEMENT FROM imgArray
            var randNum = myArray[Math.floor(Math.random() * myArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray
            var randEnemyNum = myEnemyArray[Math.floor(Math.random() * myEnemyArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray

            printCoins(randNum); //EXECUTE FUNCTION printCoins() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            printEnemy(randEnemyNum); //EXECUTE FUNCTION printEnemy() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            while (randNum > 0) {

                do {

                    leftPos = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos > 360 && leftPos < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Coin" + randNum).setAttribute("style", "position: absolute; left:" + leftPos + "px; top:" + topPos + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randNum = randNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }

            while (randEnemyNum > 0) {

                do {

                    leftPos1 = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos1 % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos1 > 360 && leftPos1 < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos1 = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos1 % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos1 = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Enemy" + randEnemyNum).setAttribute("style", "position: absolute; left:" + leftPos1 + "px; top:" + topPos1 + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randEnemyNum = randEnemyNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }
            document.getElementsByTagName("body")[0].style = "background: url('" + rand.src + "');" //SET RANDOM BACKGROUND SOURCE LOCATION

            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.left = 8 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }
            east++; //ADD ONE TO VARIABLE WEST TO LATER BE CHECKED IF VARIABLE VALUE EQUALS 15
        }else{

            var op = 0.1;  // INITIAL OPACITY
            document.getElementById("cannot").style.display = 'block';
            var timer = setInterval(function () {
                if (op >= 10) { //IF OPACITY IS BIGGER THAN OR EQUAL TO TEN
                    while (op > 0) { //WHILE ELEMENT OPACITY IS GREATER THAN 0.1 DO THE FOLLOWING
                        op = op - 0.1 //DECREASE OPACITY BY 0.1
                        clearInterval(timer); //STOP YHE FUNCTION FROM LOOPING
                    }
                }
                document.getElementById("cannot").style.opacity = op; //SET VARIABLE ELEMENT OPACITY TO VARIABLE OP VALUE
                document.getElementById("cannot").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1; //INCREASE OPACITY
            }, 50); //50 MILLISECONDS
            
            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.left = 92 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }

        }
    }
    if (document.getElementById("slide1").getBoundingClientRect().top >= 580) { //CHARACTER ENTERS SOUTH EXIT

        if(t == null){
            var elements = document.getElementsByClassName("Coins"); //GET IMAGES BY CLASS NAME

            while (elements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                elements[0].parentNode.removeChild(elements[0]); //REMOVE ALL COINS DISPLAYED
            }
            var enemyElements = document.getElementsByClassName("Enemy"); //GET IMAGES BY CLASS NAME

            while (enemyElements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                enemyElements[0].parentNode.removeChild(enemyElements[0]); //REMOVE ALL COINS DISPLAYED
            }

            var rand = imgArray[Math.floor(Math.random() * imgArray.length)]; //CHOOSE RANDOM ELEMENT FROM imgArray
            var randNum = myArray[Math.floor(Math.random() * myArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray
            var randEnemyNum = myEnemyArray[Math.floor(Math.random() * myEnemyArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray

            printCoins(randNum); //EXECUTE FUNCTION printCoins() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            printEnemy(randEnemyNum); //EXECUTE FUNCTION printEnemy() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            while (randNum > 0) {

                do {

                    leftPos = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos > 360 && leftPos < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Coin" + randNum).setAttribute("style", "position: absolute; left:" + leftPos + "px; top:" + topPos + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randNum = randNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }

            while (randEnemyNum > 0) {

                do {

                    leftPos1 = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos1 % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos1 > 360 && leftPos1 < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos1 = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos1 % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos1 = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Enemy" + randEnemyNum).setAttribute("style", "position: absolute; left:" + leftPos1 + "px; top:" + topPos1 + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randEnemyNum = randEnemyNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }
            document.getElementsByTagName("body")[0].style = "background: url('" + rand.src + "');" //SET RANDOM BACKGROUND SOURCE LOCATION

            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.top = 8 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }
            south++; //ADD ONE TO VARIABLE SOUTH TO LATER BE CHECKED IF VARIABLE VALUE EQUALS 15
        }else{

            var op = 0.1;  // INITIAL OPACITY
            document.getElementById("cannot").style.display = 'block';
            var timer = setInterval(function () {
                if (op >= 10) { //IF OPACITY IS BIGGER THAN OR EQUAL TO TEN
                    while (op > 0) { //WHILE ELEMENT OPACITY IS GREATER THAN 0.1 DO THE FOLLOWING
                        op = op - 0.1 //DECREASE OPACITY BY 0.1
                        clearInterval(timer); //STOP YHE FUNCTION FROM LOOPING
                    }
                }
                document.getElementById("cannot").style.opacity = op; //SET VARIABLE ELEMENT OPACITY TO VARIABLE OP VALUE
                document.getElementById("cannot").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1; //INCREASE OPACITY
            }, 50); //50 MILLISECONDS
            
            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.top = 92 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }

        }
    }
    if (document.getElementById("slide1").getBoundingClientRect().left <= 0) { //CHARACTER ENTERS WEST EXIT

        if(t == null){
            var elements = document.getElementsByClassName("Coins"); //GET IMAGES BY CLASS NAME

            while (elements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                elements[0].parentNode.removeChild(elements[0]); //REMOVE ALL COINS DISPLAYED
            }
            var enemyElements = document.getElementsByClassName("Enemy"); //GET IMAGES BY CLASS NAME

            while (enemyElements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
                enemyElements[0].parentNode.removeChild(enemyElements[0]); //REMOVE ALL COINS DISPLAYED
            }

            var rand = imgArray[Math.floor(Math.random() * imgArray.length)]; //CHOOSE RANDOM ELEMENT FROM imgArray
            var randNum = myArray[Math.floor(Math.random() * myArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray
            var randEnemyNum = myEnemyArray[Math.floor(Math.random() * myEnemyArray.length)]; //CHOOSE RANDOM NUMBER FROM myArray

            printCoins(randNum); //EXECUTE FUNCTION printCoins() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            printEnemy(randEnemyNum); //EXECUTE FUNCTION printEnemy() WITH PARAMETER OF A RANDOM NUMBER FROM myArray

            while (randNum > 0) {

                do {

                    leftPos = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos > 360 && leftPos < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Coin" + randNum).setAttribute("style", "position: absolute; left:" + leftPos + "px; top:" + topPos + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randNum = randNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }

            while (randEnemyNum > 0) {

                do {

                    leftPos1 = Math.floor(Math.random() * 821) + 29; //RANDOM NUMBER BETWEEN 29 AND 821

                } while (leftPos1 % 10 != 7); //DO UNTIL NUMBER ENDS IN 7

                if (leftPos1 > 360 && leftPos1 < 412) { //IF LEFT POSITION IS BIGGER THAN 360px AND SMALLER THAN 412px

                    do {

                        topPos1 = Math.floor(Math.random() * 621) + 29; //RANDOM NUMBER BETWEEN 29 AND 621

                    } while (topPos1 % 10 != 5); //DO UNTIL NUMBER ENDS IN 5

                } else {

                    topPos1 = 255; //SET TOP POSITION TO 255px 
                }

                document.getElementById("Enemy" + randEnemyNum).setAttribute("style", "position: absolute; left:" + leftPos1 + "px; top:" + topPos1 + "px;"); //STYLE POSITION OF DISPLAYED COINS BY UNIQUE ID 

                randEnemyNum = randEnemyNum - 1; //REDUCE VARIABLE BY ONE TO EVENTUALLY BREAK LOOP AND STYLE ALL DISPLAYED COINS 
            }
            document.getElementsByTagName("body")[0].style = "background: url('" + rand.src + "');" //SET RANDOM BACKGROUND SOURCE LOCATION

            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.left = 92 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }
            west++; //ADD ONE TO VARIABLE WEST TO LATER BE CHECKED IF VARIABLE VALUE EQUALS 15
        }else{

            var op = 0.1;  // INITIAL OPACITY
            document.getElementById("cannot").style.display = 'block';
            var timer = setInterval(function () {
                if (op >= 10) { //IF OPACITY IS BIGGER THAN OR EQUAL TO TEN
                    while (op > 0) { //WHILE ELEMENT OPACITY IS GREATER THAN 0.1 DO THE FOLLOWING
                        op = op - 0.1 //DECREASE OPACITY BY 0.1
                        clearInterval(timer); //STOP YHE FUNCTION FROM LOOPING
                    }
                }
                document.getElementById("cannot").style.opacity = op; //SET VARIABLE ELEMENT OPACITY TO VARIABLE OP VALUE
                document.getElementById("cannot").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1; //INCREASE OPACITY
            }, 50); //50 MILLISECONDS
            
            var slides = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME

            for (var i = 0; i < slides.length; i++) { //FOR AMOUNT OF CHARACTER IMAGES
                slides[i].style.left = 8 + "%"; //SET CHARACTER LOCATION BACK ON SCREEN
            }

        }
    }
    if (north + east >= 25 || south + west >= 25) { //IF CHARACTER HAS GONE IN ONE OF THE DIRECTIONS 15 TIMES

        document.body.removeChild(document.getElementById("trench")); //REMOVE IMAGE ELEMENT BY ID

        document.body.removeChild(document.getElementById("controls")); //REMOVE P ELEMENT BY ID

        document.getElementsByTagName("body")[0].style = "background: url('../images/backgrounds/battle.png');" //SET BACKGROUND URL TO SOURCE LOCATION

        var character = document.getElementsByClassName("mySlides"); //GET ALL CHARACTER IMAGES BY CLASS NAME
        var dead = document.getElementsByClassName("Coins"); //GET ALL COINS DISPLAYED BY CLASS NAME

        while (character.length > 0) { //FOR THE AMOUNT OF CHARACTER IMAGES (4)
            character[0].parentNode.removeChild(character[0]); //REMOVE CHARACTER FROM DISPLAY
        }

        while (dead.length > 0) { //FOR THE AMOUNT OF COIN IMAGES DISPLAYED
            dead[0].parentNode.removeChild(dead[0]); //REMOVE ALL DISPLAYED COINS
        }

        var enemyElements = document.getElementsByClassName("Enemy"); //GET IMAGES BY CLASS NAME

        while (enemyElements.length > 0) { //DO FOR HOWEVER MANY COINS ARE DISPLAYED
            enemyElements[0].parentNode.removeChild(enemyElements[0]); //REMOVE ALL COINS DISPLAYED
        }

        var choice = document.createElement("p"); //CREATE HTML <P> TAG
        var br5 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
        var choiceText = document.createTextNode("Congrats! You made it now you must choose, fight or pay to escape"); //CREATE TEXT FOR <P> TAG
        var choiceText1 = document.createTextNode("Press F to Fight or P to pay (30 coin deduction from  final score)"); //CREATE TEXT FOR <P> TAG
        choice.appendChild(choiceText); //SET AS TEXT FOR <P> TAG
        choice.appendChild(br5); //ADD BREAKPOINT IN <P> TAG
        choice.appendChild(choiceText1); //SET AS TEXT FOR <P> TAG
        choice.id = "choice"; //SET UNIQUE ID
        choice.setAttribute("style", "position: absolute; left: 10%; top: 34%; color: white; font-size: 22px; text-align: center;"); //CSS STYLING <P> TAG
        document.body.appendChild(choice); //DISPLAY <P> TAG
    }
    if(t != null){ //IF ENEMY IS DISPLAYED ON SCREEN

            console.log(t.id);

        if ((document.getElementById(t.id).getBoundingClientRect().top == 255) && (document.getElementById(t.id).getBoundingClientRect().left == document.getElementById("slide1").getBoundingClientRect().left)) { //IF CHARACTER LOCATION IS EQUAL TO COIN LOCATION
            
            enemyHearts = 5; //USED IN DISPLAYING THE HEART IMAGES
            characterHearts = 5; //USED IN DISPLAYING THE HEART IMAGES

            fightEnemy = true;

            var enemySource = document.getElementById("Enemy1").src;

            document.body.removeChild(document.getElementById("Enemy1"));     

            var battleBackground = document.createElement("img");
            battleBackground.src = "../images/backgrounds/battle.png";
            battleBackground.setAttribute("style", "position: absolute; width: 100%; top: 0px; left: 0px; z-index: 5;");
            battleBackground.id = "battleBackground";
            document.body.appendChild(battleBackground);

            var combatEnemy = document.createElement("img");
            combatEnemy.src = enemySource;
            combatEnemy.setAttribute("style", "position: absolute; width: 250px; top: 35%; left: 5%; z-index: 6;");
            combatEnemy.id = "userEnemy";
            document.body.appendChild(combatEnemy);

            var combatCharacter = document.createElement("img");
            combatCharacter.src = "../images/Character/left1.png";
            combatCharacter.setAttribute("style", "position: absolute; width: 75px; top: 45%; right: 15%; z-index: 6;");
            combatCharacter.id = "user";
            document.body.appendChild(combatCharacter);

            var enemyInfoBox = document.createElement("div"); //CREATE DIV ELEMENT
            enemyInfoBox.setAttribute("style", "position: absolute; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; height: 80px; width: 220px; top: 10%; left: 10%; z-index: 6;"); //CSS STYLING FOR DIV ELEMENT
            var enemyName = document.createElement("p"); //CREATE <P> TAG
            var enemyNameText = document.createTextNode("Enemy"); //CREATE TEXT FOR <P> TAG
            enemyName.appendChild(enemyNameText); //SET TEXT FOR <P> TAG
            enemyName.setAttribute("style", "position: absolute; font-size: 20px; left: 3px; top: -15px;"); //CSS STYLING FOR <P> TAG
            enemyInfoBox.appendChild(enemyName); //<P> TAG IN DIV ELEMENT
            enemyheartCount(enemyHearts, enemyInfoBox); //FUNCTION TO PRINT HEARTS FIRST PARAMETER IS AMOUNT (PRE SET ABOVE TO 5) AND THE OTHER TO WHICH DIV APPENDS THESE IMAGES
            document.body.appendChild(enemyInfoBox); //DISPLAY DIV WITH NAME OF ENEMY AND HEARTS
    
            var characterInfoBox = document.createElement("div"); //CREATE DIV ELEMENT
            characterInfoBox.setAttribute("style", "position: absolute; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; height: 80px; width: 220px; top: 10%; right: 10%; z-index: 6;"); //CSS STYLING FOR DIV ELEMENT
            var Name = document.createElement("p"); //CREATE <P> TAG
            var NameText = document.createTextNode("??????"); //CREATE TEXT FOR <P> TAG
            Name.appendChild(NameText); //SET TEXT FOR <P> TAG
            Name.setAttribute("style", "position: absolute; font-size: 20px; left: 3px; top: -15px;"); //CSS STYLING FOR <P> TAG
            characterInfoBox.appendChild(Name); //<P> TAG IN DIV ELEMENT
            heartCount(characterHearts, characterInfoBox); //FUNCTION TO PRINT HEARTS FIRST PARAMETER IS AMOUNT (PRE SET ABOVE TO 5) AND THE OTHER TO WHICH DIV APPENDS THESE IMAGES
            document.body.appendChild(characterInfoBox); //DISPLAY DIV WITH <P> TAG AND HEARTS

            var options = document.createElement("div"); //CREATE DIV ELEMENT
            options.setAttribute("style", "position: absolute; bottom: 3px; left: 33%; height: 100px; width: 300px; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; z-index: 6;"); //CSS STYLING FOR DIV ELEMENT
            var title = document.createElement("p"); //CREATE <P> TAG
            var titleText = document.createTextNode("Type attack to fight:"); //CREATE TEXT FOR <P> TAG
            title.appendChild(titleText); //SET TEXT FOR <P> TAG
            title.setAttribute("style", "position: absolute; top: -15px; left: 55px; font-size: 20px;"); //CSS STYLING <P> TAG
            options.appendChild(title); //<P> TAG IN DIV ELEMENT
            var attack = document.createElement("input"); //CREATE <INPUT> TAG (TEXT BOX)
            attack.setAttribute("style", "position: absolute; bottom: 25px; left: 57px;"); //CSS STYLING TEXT BOX
            attack.id = "attack1"; //TEXT BOX UNIQUE ID
            options.appendChild(attack); //TEXT BOX IN DIV
            document.body.appendChild(options); //DISPLAY DIV

            function generateEnemyImage() {

                uniqueIdNumber += 1; //ADD ONE TO uniqueIdNumber
    
                var heart1 = document.createElement('img'); //CREATE IMG ELEMENT
                heart1.className = "enemyhearts"; //GIVE IMAGE A CLASS NAME
                heart1.id = "enemyheart" + uniqueIdNumber; //IMAGE UNIQUE ID
                heart1.src = "../images/hearts/heart.png"; //SET IMAGE SOURCE LOCATION
                heart1.setAttribute("style", "height: 30px; width: 30px;"); //CSS STYLING FOR IMAGE
                return heart1; //RETURN IMAGE
            }
    
            function enemyheartCount(Hearts, a) {
    
                linebreak1 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                a.appendChild(linebreak1); //ADD BREAKPOINT TO PARAMETER a WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
                linebreak2 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                a.appendChild(linebreak2); //ADD BREAKPOINT TO PARAMETER a WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
    
                for (var i = 0; i < Hearts; i++) { //FOR THE PARAMETER AMOUNT (5)
                    a.appendChild(generateEnemyImage()); //EXECUTE FUNCTION THAT CREATES IMAGES WITH UNIQUE ID AND DIPLAY THEM
                }
            }
    
            function generateImage() {
    
                uniqueIdNumber1 += 1; //ADD ONE TO uniqueIdNumber
    
                var heart = document.createElement('img'); //CREATE IMG ELEMENT
                heart.className = "enemyhearts"; //GIVE IMAGE A CLASS NAME
                heart.id = "heart" + uniqueIdNumber1; //IMAGE UNIQUE ID
                heart.src = "../images/hearts/heart.png"; //SET IMAGE SOURCE LOCATION
                heart.setAttribute("style", "height: 30px; width: 30px;"); //CSS STYLING FOR IMAGE
                return heart; //RETURN IMAGE
            }
    
            function heartCount(z, x) {
    
                linebreak1 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                x.appendChild(linebreak1); //ADD BREAKPOINT TO PARAMETER x WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
                linebreak2 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                x.appendChild(linebreak2); //ADD BREAKPOINT TO PARAMETER x WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
    
                for (var i = 0; i < z; i++) { //FOR THE PARAMETER AMOUNT (5)
                    x.appendChild(generateImage()); //EXECUTE FUNCTION THAT CREATES IMAGES WITH UNIQUE ID AND DIPLAY THEM
                }
            }
    
        } else if ((document.getElementById(t.id).getBoundingClientRect().top - 10 == document.getElementById("slide1").getBoundingClientRect().top) && (document.getElementById(t.id).getBoundingClientRect().left == document.getElementById("slide1").getBoundingClientRect().left)) { //IF CHARACTER LOCATION IS EQUAL TO COIN LOCATION
                      
            enemyHearts = 5; //USED IN DISPLAYING THE HEART IMAGES
            characterHearts = 5; //USED IN DISPLAYING THE HEART IMAGES

            fightEnemy = true;

            var enemySource = document.getElementById("Enemy1").src;

            document.body.removeChild(document.getElementById("Enemy1"));     

            var battleBackground = document.createElement("img");
            battleBackground.src = "../images/backgrounds/battle.png";
            battleBackground.setAttribute("style", "position: absolute; width: 100%; top: 0px; left: 0px; z-index: 5;");
            battleBackground.id = "battleBackground";
            document.body.appendChild(battleBackground);

            var combatEnemy = document.createElement("img");
            combatEnemy.src = enemySource;
            combatEnemy.setAttribute("style", "position: absolute; width: 250px; top: 35%; left: 5%; z-index: 6;");
            combatEnemy.id = "userEnemy";
            document.body.appendChild(combatEnemy);

            var combatCharacter = document.createElement("img");
            combatCharacter.src = "../images/Character/left1.png";
            combatCharacter.setAttribute("style", "position: absolute; width: 75px; top: 45%; right: 15%; z-index: 6;");
            combatCharacter.id = "user";
            document.body.appendChild(combatCharacter);

            var enemyInfoBox = document.createElement("div"); //CREATE DIV ELEMENT
            enemyInfoBox.setAttribute("style", "position: absolute; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; height: 80px; width: 220px; top: 10%; left: 10%; z-index: 6;"); //CSS STYLING FOR DIV ELEMENT
            var enemyName = document.createElement("p"); //CREATE <P> TAG
            var enemyNameText = document.createTextNode("Enemy"); //CREATE TEXT FOR <P> TAG
            enemyName.appendChild(enemyNameText); //SET TEXT FOR <P> TAG
            enemyName.setAttribute("style", "position: absolute; font-size: 20px; left: 3px; top: -15px;"); //CSS STYLING FOR <P> TAG
            enemyInfoBox.appendChild(enemyName); //<P> TAG IN DIV ELEMENT
            enemyheartCount(enemyHearts, enemyInfoBox); //FUNCTION TO PRINT HEARTS FIRST PARAMETER IS AMOUNT (PRE SET ABOVE TO 5) AND THE OTHER TO WHICH DIV APPENDS THESE IMAGES
            document.body.appendChild(enemyInfoBox); //DISPLAY DIV WITH NAME OF ENEMY AND HEARTS
    
            var characterInfoBox = document.createElement("div"); //CREATE DIV ELEMENT
            characterInfoBox.setAttribute("style", "position: absolute; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; height: 80px; width: 220px; top: 10%; right: 10%; z-index: 6;"); //CSS STYLING FOR DIV ELEMENT
            var Name = document.createElement("p"); //CREATE <P> TAG
            var NameText = document.createTextNode("??????"); //CREATE TEXT FOR <P> TAG
            Name.appendChild(NameText); //SET TEXT FOR <P> TAG
            Name.setAttribute("style", "position: absolute; font-size: 20px; left: 3px; top: -15px;"); //CSS STYLING FOR <P> TAG
            characterInfoBox.appendChild(Name); //<P> TAG IN DIV ELEMENT
            heartCount(characterHearts, characterInfoBox); //FUNCTION TO PRINT HEARTS FIRST PARAMETER IS AMOUNT (PRE SET ABOVE TO 5) AND THE OTHER TO WHICH DIV APPENDS THESE IMAGES
            document.body.appendChild(characterInfoBox); //DISPLAY DIV WITH <P> TAG AND HEARTS

            var options = document.createElement("div"); //CREATE DIV ELEMENT
            options.setAttribute("style", "position: absolute; bottom: 3px; left: 33%; height: 100px; width: 300px; background-color: #e8dea9; border-radius: 8px; border: 3px solid black; z-index: 6;"); //CSS STYLING FOR DIV ELEMENT
            var title = document.createElement("p"); //CREATE <P> TAG
            var titleText = document.createTextNode("Type attack to fight:"); //CREATE TEXT FOR <P> TAG
            title.appendChild(titleText); //SET TEXT FOR <P> TAG
            title.setAttribute("style", "position: absolute; top: -15px; left: 55px; font-size: 20px;"); //CSS STYLING <P> TAG
            options.appendChild(title); //<P> TAG IN DIV ELEMENT
            var attack = document.createElement("input"); //CREATE <INPUT> TAG (TEXT BOX)
            attack.setAttribute("style", "position: absolute; bottom: 25px; left: 57px;"); //CSS STYLING TEXT BOX
            attack.id = "attack1"; //TEXT BOX UNIQUE ID
            options.appendChild(attack); //TEXT BOX IN DIV
            document.body.appendChild(options); //DISPLAY DIV

            function generateEnemyImage() {

                uniqueIdNumber += 1; //ADD ONE TO uniqueIdNumber
    
                var heart1 = document.createElement('img'); //CREATE IMG ELEMENT
                heart1.className = "enemyhearts"; //GIVE IMAGE A CLASS NAME
                heart1.id = "enemyheart" + uniqueIdNumber; //IMAGE UNIQUE ID
                heart1.src = "../images/hearts/heart.png"; //SET IMAGE SOURCE LOCATION
                heart1.setAttribute("style", "height: 30px; width: 30px;"); //CSS STYLING FOR IMAGE
                return heart1; //RETURN IMAGE
            }
    
            function enemyheartCount(Hearts, a) {
    
                linebreak1 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                a.appendChild(linebreak1); //ADD BREAKPOINT TO PARAMETER a WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
                linebreak2 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                a.appendChild(linebreak2); //ADD BREAKPOINT TO PARAMETER a WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
    
                for (var i = 0; i < Hearts; i++) { //FOR THE PARAMETER AMOUNT (5)
                    a.appendChild(generateEnemyImage()); //EXECUTE FUNCTION THAT CREATES IMAGES WITH UNIQUE ID AND DIPLAY THEM
                }
            }
    
            function generateImage() {
    
                uniqueIdNumber1 += 1; //ADD ONE TO uniqueIdNumber
    
                var heart = document.createElement('img'); //CREATE IMG ELEMENT
                heart.className = "enemyhearts"; //GIVE IMAGE A CLASS NAME
                heart.id = "heart" + uniqueIdNumber1; //IMAGE UNIQUE ID
                heart.src = "../images/hearts/heart.png"; //SET IMAGE SOURCE LOCATION
                heart.setAttribute("style", "height: 30px; width: 30px;"); //CSS STYLING FOR IMAGE
                return heart; //RETURN IMAGE
            }
    
            function heartCount(z, x) {
    
                linebreak1 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                x.appendChild(linebreak1); //ADD BREAKPOINT TO PARAMETER x WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
                linebreak2 = document.createElement("br"); //CREATE HTML <br> TAG (BREAKPOINT)
                x.appendChild(linebreak2); //ADD BREAKPOINT TO PARAMETER x WHICH IS USED AS A DIV FOR APPENDING THE HEART IMAGES
    
                for (var i = 0; i < z; i++) { //FOR THE PARAMETER AMOUNT (5)
                    x.appendChild(generateImage()); //EXECUTE FUNCTION THAT CREATES IMAGES WITH UNIQUE ID AND DIPLAY THEM
                }
            }
    
        } 

    }
    setTimeout(exits, 30); //CHECK EVERY 30 MILLISECONDS
}

window.addEventListener("resize", function () { //CHECK IF WINDOW IS ATTEMPTING TO BE RESIZED

    if (!window.matchMedia("(min-width: 850px)").matches) { //IF WIDTH OF SCREEN IS BIGGER THAN 850px

        window.resizeTo(850, 650); //SET WINDOW PROPERTIES TO WIDTH 850px AND HEIGHT 650px

    }
    if (!window.matchMedia("(min-height: 650px)").matches) { //IF HEIGHT OF SCREEN IS BIGGER THAN 650px

        window.resizeTo(850, 650); //SET WINDOW PROPERTIES TO WIDTH 850px AND HEIGHT 650px

    }

});
