let questionsText = document.getElementById('questions');

document.addEventListener("DOMContentLoaded", function() {
    let House = document.getElementById('house');
    House.style.display = 'block';
    questionsText.textContent = "Hey! Welcome to our little house)) The Fox hid somewhere in it. Can you find her? ... P.S. Dont go through the blue door!"; 
})


 let blueDoor = document.getElementById("blueanswer");        

  function onBlueDoor() {        
            
            let Space = document.getElementById('space').style.display = 'block';
            let Message1 = 'Hello! You are in space! There are no Foxes here, go back on the Earth!'  
            questionsText.textContent = Message1;
            console.log(Message1);           
            
        }    

    blueDoor.addEventListener("click", onBlueDoor);

/*----------Create array for buttons*/

    //let buttonBlue = document.getElementById('blue');
let buttonRed = document.getElementById('redanswer');
let buttonYellow = document.getElementById('yellowanswer');
let buttonGreen = document.getElementById('greenanswer');

let buttonArray = [];
    //buttonArray.push(buttonBlue);
    buttonArray.push(buttonRed);
    buttonArray.push(buttonYellow);
    buttonArray.push(buttonGreen);

    console.log(buttonArray[2]);  
    
  
for ( let button of buttonArray) {

button.addEventListener("click", function() 
    {
        if (this.getAttribute('id') === 'redanswer') 
        {
            let Corridor = document.getElementById('corridor').style.display = 'block';
            let Message2 = 'Corridor.'  
            questionsText.textContent = Message2;
            console.log(Message2); 
        } 
        else if (this.getAttribute('id') === 'yellowanswer') 
        {
            let Kitchen = document.getElementById('kitchen').style.display = 'block';
            let Message3 = 'Kitchen.'  
            questionsText.textContent = Message3;
            console.log(Message3); 
        } 
        else 
        {
            let Bedroom = document.getElementById('bedroom').style.display = 'block';
            let Message4 = 'Bedroom.'  
            questionsText.textContent = Message4;
            console.log(Message4);
        }
    
    }
    )
} 


