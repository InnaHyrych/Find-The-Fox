let questionsText = document.getElementById('questions');

document.addEventListener("DOMContentLoaded", function() {
    let House = document.getElementById('house');
    House.style.display = 'block';
    questionsText.textContent = "Hey! Welcome to our little house)) The Fox hid somewhere in it. Can you find her? ... P.S. Dont go through the blue door!"; 
})

let buttonBlue = document.getElementById('blue');
let buttonRed = document.getElementById('red');
let buttonYellow = document.getElementById('yellow');
let buttonGreen = document.getElementById('green');

let buttonArray = [];
    buttonArray.push(buttonBlue);
    buttonArray.push(buttonRed);
    buttonArray.push(buttonYellow);
    buttonArray.push(buttonGreen);

    console.log(buttonArray[2]);   


     
function random(event) {
         buttonArray = buttonArray.sort(() => Math.random() - 0.5);
    console.log(buttonArray[2]);           
    
}  

//document.addEventListener("click", random);

 let blueDoor = document.getElementById("blueanswer");
    console.log(blueDoor);      

  function onBlueDoor() {
        
            
            let Space = document.getElementById('space').style.display = 'block';
            let House = document.getElementById('house').style.display = 'none';
            console.log(buttonArray[0]);
            let Message1 = 'Hello! You are in space! There are no Foxes here, go back on the Earth!'  
            questionsText.textContent = Message1;
            console.log(Message1);           
            
        }
    

    blueDoor.addEventListener("click", onBlueDoor);
