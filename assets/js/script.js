let questionsText = document.getElementById('questions');

document.addEventListener("DOMContentLoaded", function() {
    let House = document.getElementById('house');
    House.style.display = 'block';
    questionsText.textContent = "Hey! Welcome to our little house)) The Fox hid somewhere in it. Can you find her? ... P.S. Don't go through the blue door!"; 
})

/*----------Create Array for buttons*/

    //let buttonBlue = document.getElementById('blue');
    let buttonRed = document.getElementById('redanswer');
    let buttonYellow = document.getElementById('yellowanswer');
    let buttonGreen = document.getElementById('greenanswer');
    
    let buttonArray = [];
        //buttonArray.push(buttonBlue);
        buttonArray.push(buttonRed);
        buttonArray.push(buttonYellow);
        buttonArray.push(buttonGreen); 
          
        
/*------------Create Array for images*/    
    let imagesArray = [];
        imagesArray.push(document.getElementById('house'))
        imagesArray.push(document.getElementById('corridor'));
        imagesArray.push(document.getElementById('kitchen'));
        imagesArray.push(document.getElementById('sitingroom'));
        imagesArray.push(document.getElementById('bedroom'));
        imagesArray.push(document.getElementById('diningroom'));
        imagesArray.push(document.getElementById('space'));
        imagesArray.push(document.getElementById('fox'));
                 
/**
 * Removes the previous image after user pressed the button
 */
    function clearScreen() {
        for (let Images of imagesArray)           
        Images.style.display = 'none';
    }   

 let blueDoor = document.getElementById("blueanswer"); 
 
 /**
  * When user push on the blue door, he always will see image with Spase
  */
  function onBlueDoor() {  

            clearScreen();
            let Space = document.getElementById('space').style.display = 'block';
            let Message1 = 'Hello! You are in space! There are no Foxes here, go back on the Earth!'  
            questionsText.textContent = Message1;
            console.log(Message1);
  }            

blueDoor.addEventListener("click", onBlueDoor);


/*------------Create Array for functions*/
let functionsArray = [
    
/**
 * Removes previous image,
 * makes image "corridor.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inCorridor() {
    clearScreen();
    let Corridor = document.getElementById('corridor').style.display = 'block';
    let Message2 = 'Corridor.'  
    questionsText.textContent = Message2;
    console.log(Message2);
},

/**
 * Removes previous image,
 * makes image "kitchen.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inKitchen() {
    clearScreen()
    let Kitchen = document.getElementById('kitchen').style.display = 'block';
    let Message3 = 'Kitchen.'  
    questionsText.textContent = Message3;
    console.log(Message3);
},

/**
 * Removes previous image,
 * makes image "bedroom.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inBedroom() {
    clearScreen()
    let Bedroom = document.getElementById('bedroom').style.display = 'block';
    let Message4 = 'Bedroom.'  
    questionsText.textContent = Message4;
    console.log(Message4);               
    
},

/**
 * Removes previous image,
 * makes image "diningroom.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inDiningroom() {
    clearScreen()
    let Diningroom = document.getElementById('diningroom').style.display = 'block';
    let Message5 = 'Diningroom.'  
    questionsText.textContent = Message5;
    console.log(Message5);               
    
},

/**
 * Removes previous image,
 * makes image "sitingroom.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inSitingroom() {
    clearScreen()
    let Sitingroom = document.getElementById('sitingroom').style.display = 'block';
    let Message6 = 'Sitingroom.'  
    questionsText.textContent = Message6;
    console.log(Message6);               
    
},

/**
 * Removes previous image,
 * makes image "fox.jpg" visible When user push on the random button,
 * displey text under the image,
 * display button "Play Again"
 */
function inFox() {
    clearScreen()
    let Fox = document.getElementById('fox').style.display = 'block';
    let Message7 = 'Fox.'  
    questionsText.textContent = Message7;
    console.log(Message7);               
    let finishButton = document.getElementById('finish').style.display = "block";
}];

console.log(functionsArray); 


/**
 * Calls a random function from the "functionsArray" list, 
 * when the button was click
 */   
for (button of buttonArray) {
    button.addEventListener('click', function() {
       
        let img = functionsArray[Math.floor(Math.random() * functionsArray.length)];
        img();
    })
}          
    
let PlayAgain = document.getElementById('finish');

/**
 * Reload the current URL after user pushed 'Play again' button
 * to start game from the begining
 */
PlayAgain.addEventListener('click', function () {
    document.location.reload()
});


