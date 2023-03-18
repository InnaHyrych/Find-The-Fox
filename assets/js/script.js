const questionsText = document.getElementById('text_area');
let startButton = document.getElementById('start');
/**
 *Program download event that displays a photo, game rules and a start button on the screen. 
 */
document.addEventListener("DOMContentLoaded",function() {
    document.getElementById('main_fox').style.display = 'block';
    questionsText.textContent = `Hey! Welcome to our game "Find the Fox"!
    This game is made to tell about foxe's live and habits 
    and support Fox Rescue Projects. If you want to know more, just follow the link by clicking the "paw" on the top.
    The rules are so easy:
     * learn about foxes live;
     * push the random button;
     * relax...
     * and find the fox!
    Remember! Don't push the blue button!`;
    startButton.style.display = 'block';
});

/*------------Create Array for images*/    
let imagesArray = [];
    imagesArray.push(document.getElementById('main_fox'));
    imagesArray.push(document.getElementById('house'));
    imagesArray.push(document.getElementById('space'));
    imagesArray.push(document.getElementById('fox'));
    imagesArray.push(document.getElementById('corridor'));
    imagesArray.push(document.getElementById('kitchen'));
    imagesArray.push(document.getElementById('sitingroom'));
    imagesArray.push(document.getElementById('bedroom'));
    imagesArray.push(document.getElementById('diningroom'));
    
/*-------------Aray with changing images*/
let imgList = imagesArray.slice(4);

/**
* Removes the previous image after user pressed the button
*/
function clearScreen() {
    for (let image of imagesArray) {
        image.style.display = 'none';
    }
}

let questions1 = ["Do you want to know more about how to save foxes?" /*Here can be more question's*/];

/**
 * Displaying a question from a list
 */
function question(questions) {
    document.getElementById ('quiz').style.display = 'block';
    document.getElementById ('questions').textContent = questions;    
}

let yesButton = document.getElementById('yes_button');
let noButton = document.getElementById('no_button');

/**
 * Function responsible for user selection buttons" Yes, No"
 */
function yesNoButtons(choise1, choise2){
    if (questions1[0]){
        choise1.addEventListener('click', function() {
            yesButton.innerHTML = '<a href="https://www.saveafox.org/" target="_blank">Yes</a>';
        });
        choise2.addEventListener('click', function() {
            alert("You learned so much today!!! Let's play again!");
        });
    }
}

/**
 * The eventListener for "Start" button
 * After pushing the game will start
 */
startButton.addEventListener('click', function () {
    document.getElementById ('question-area').style.display = 'block';
    startButton.style.display = 'none';
    clearScreen();
    document.getElementById('house').style.display = 'block';
    let message0 = `Let's get started!
    Red foxes live around the world in many diverse habitats including forests,
    grasslands, mountains, and deserts.
    They also adapt well to human environments such as farms,
    suburban areas, and even large communities.
    The red fox's resourcefulness has earned it a legendary reputation for intelligence and cunning.`;
    questionsText.textContent = message0;
});

/*----------Round coloring buttons and array for them*/ 
const buttonRed = document.getElementById('redanswer');
const buttonYellow = document.getElementById('yellowanswer');
const buttonGreen = document.getElementById('greenanswer');

let buttonArray = [];
    buttonArray.push(buttonRed);
    buttonArray.push(buttonYellow);
    buttonArray.push(buttonGreen); 

/*----------------Array for text-area messages*/
let messageArray = [
    `Foxes seem to be good at avoiding hard work - especially when there's someone else to do it for them. 
    Instead of bothering to dig their own den, they sometimes steal a badger's burrow (called a sett) by scaring the owner away 
    and making his house smell so bad he doesn't want it back.`,

    `Foxes are omnivores. 
    This means that they eat meat and vegetation. 
    A fox's diet can consist of small animals, such as lizards, voles, rats, mice, rabbits and hares. 
    They round out their diet with birds, fruits and bugs.`,

    `Foxes typically live in the forest and make their den by digging holes and making burrows for themselves.
    These will allow the fox to attain a cool area to sleep in. 
    Foxes also use their dens to store food to save for later and keep their pups safe from other animals.`,

    `Foxes seem to be very playful. 
    They can often be seen playing with a fallen apple as though it were a ball, or chasing their own tails. 
    This fooling around sometimes serves a second purpose: if a curious rabbit comes closer to watch, 
    it will find itself gobbled up by the hungry fox.`,
    
    `Scientists believe that foxes may have had relationships with humans before dogs did. 
    There are 16,500 year old remains of a man and his pet fox in Jordan, 
    which is 4000 years older than any dog and human remains we have found that have been buried together.`
];

/**
 * Removes previous image,
 * makes image visible when user push on the random button,
 * displey text under the image
 */
function inRoom (roomImage, roomMessage) {
    clearScreen();
    roomImage.style.display = 'block';
    questionsText.textContent = roomMessage;
    imgList.splice(imgList[roomImage], 1);
    messageArray.splice(messageArray[roomMessage], 1);
}

const finishButton = document.getElementById('finish');

/**
 * Reload the current URL after user pushed 'Play again' button
 * to start game from the begining
 */
finishButton.addEventListener('click', function () {
    document.location.reload();
});

const blueDoor = document.getElementById("blueanswer");

/**
 * Mute sound.
 */
function stopSound(){
    let stopSound = document.getElementById('stop');
    stopSound.style.display = "block";
    stopSound.addEventListener("click",function () {
    let audio;
    audio.pause();
    });
}

/**
* When user push on the blue door, he always will see image with Spase
* and page must be reload 
*/
blueDoor.addEventListener("click", function () {
    clearScreen();
    document.getElementById('space').style.display = 'block';
    let message1 = 'You teleported to space! There are no Foxes here, cya !';
    questionsText.textContent = message1;
        
    //Add sound after pushed blue button    
    let audio = new Audio();
    audio.src = ("assets/sound/wrong-place.mp3");        
    audio.play();
    
    stopSound();
    
    blueDoor.style.display = 'none';
    buttonRed.style.display = 'none';
    buttonYellow.style.display = 'none';
    buttonGreen.style.display = 'none';
    finishButton.style.display = 'block';    
});
                 
/**
 * Removes previous image,
 * makes image "fox.jpg" visible When user push on the random button,
 * display text under the image,
 * display button "Play Again"
 */
function inFox() {
    clearScreen();
    document.getElementById('fox').style.display = 'block';
    questionsText.innerText = `Congratulation! You have found the Fox!
    Foxes are beautiful animals, with their delicate faces and bushy tails, but don't just love them for their good looks.
    The fox species are intriguing animals, known for their intelligence, playfulness, and lithe athleticism.
    And you can help to save them!`;
    finishButton.style.display = "block";//Display button "Play Again"

    //Add sound after user finded fox
    let audio = new Audio();
    audio.src = ("assets/sound/success.mp3");
    audio.play();
    stopSound();

    /*Block all buttons ecsept "Play Again"*/    
    blueDoor.style.display = 'none';    
    buttonRed.style.display = 'none';
    buttonYellow.style.display = 'none';
    buttonGreen.style.display = 'none';

    question(questions1[0]);
    yesNoButtons(yesButton, noButton);
}

/**
 * Calls a random function from the "functionsArray" list, 
 * when the button was click
 */ 
function main() {
    for (let button of buttonArray) {
         button.addEventListener('click', function() {
            let rI = imgList[Math.floor(Math.random() * imgList.length)];
            let rM = messageArray[Math.floor(Math.random() * messageArray.length)];
            inRoom(rI, rM);
            if (imgList.length === 0) {
            inFox();
            }
        });
    }
}
main();
    
