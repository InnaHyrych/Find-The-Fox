![Header](assets/images/readme_img/Header.jpg)

![Screen display](assets/images/readme_img/imagin3.jpg)

This game was created to draw attention to the problem of fox survival. It is  simple game where the user can learn interesting facts about the life and habits of foxes. For the winner gets presented a link to a helpful organization involved in rescuing foxes from fur farms and sport hunters.

## **Table of Contents**
* [Goals](#Goals)
* Visual Design
  - [Icons](#icons)
  - [Colours](#colours)
  
* [Funtionality](#Funtionality)

* Testing  
  - [UI Testing](#ui-testing)
  - [Performance Testing](#Performance-Testing)
  - [Browser Compatibility](#Browser-Compatibility)
  - [Unfixed bugs](#unfixed-bugs)
  - [Validator Testing](#Validator-Testing)


* [Deployment](#Deployment)

* Credits
    - [Content](#Content)
    - [Media](#Media)

## **Goals**

  - Educate users in a fun friendly manner on foxes.
  - Draw attention to the fox cruelty in fox sport hunting and fur farms.
  - Stimulate users to get involved or donate towards saving wildlife.

## **Visual Design**

### Style

The game is created in a simple style, where the main attention is drawn to the game elements: imaga, text and buttons. So the user can intuitively understand the goal and rules of the game.

### Icons

![Icons](assets/images/readme_img/icons.jpg)

Icons were taken from the Fontaweysom Icon Library and utilised as classes in the <i> tag into the interactive buttons. They can easily be styled using other classes or IDs in the same tag.

### Colours

![Colours](assets/images/readme_img/colours.jpg)

The colors used in the game emphasize the natural theme. I used [Shemecolor.com](https://www.schemecolor.com/without-fear.php) website to choose harmoniously combined colors. 

## **Funtionality**
  - The page consists of 3 main sections for the user:
    - The image section - which is a visual aid to help the user to feel more involved in the game.

    ![Images](assets/images/readme_img/imageF.jpg)

    - The storyline text section - which describes the results of the users selection.

    ![Text](assets/images/readme_img/textF.jpg)

    - The buttons - which allow the user to choose their next move in the game.

    ![IconsF](assets/images/readme_img/iconsF.jpg)

- Given a user selects a button a random storyline text and matching image are displayed to the user, this random selection was done as using a randomise function as displayed below:

````for (var button of buttonArray) {
    button.addEventListener('click', function() {       
        let img = functionsArray[Math.floor(Math.random() * functionsArray.length)];
        img();
        functionsArray.splice(functionsArray[img], 1);
        console.log(functionsArray);
    });
}    
````
- When the user finish the game by floating away in space or finds the fox a sound is played to enhance the atmosphere, but I have added an if statement to read the text displayed on screen and only play this sound when a specific word is displayued, below is how this was achieved:
````
if(document.getElementById('questions').textContent.includes('teleported'))
    {
        let audio = new Audio();
        audio.src = ("assets/sound/wrong-place.mp3");
        audio.play();
        
    }
````

## **Testing**

### UI Testing

I tested my game appearance and functionality across multiple devices and screen sizes, below are some examples of the testing performed and the results.

* PC Monitor ??? Full HD 1920px x 1080px 

![Resolution 1920x1080](assets/images/readme_img/display_resolution1920.jpg)

* Windows 10 Laptop 1366px x 768px

![Resolution 1366x768](assets/images/readme_img/display_resolution1366.jpg)

* Lenovo Tablet 10.1??? screen

![Resolution Tablet](assets/images/readme_img/Tablet.jpg)

* Android OnePlus 6.3??? screen

![Resolution Mobile phone](assets/images/readme_img/mobile_screen.jpg)

### Performance Testing

I conducted tests on how quickly my game loaded using different connections such as mobile data and home fibre via Wi-Fi in most cases the website always loaded within 2-5 seconds from mobile data and under 2 seconds when using WIFI from my home fibre connection.

![Loaded1](assets/images/readme_img/2023-01-25_19-15-23.jpg)

![Loaded2](assets/images/readme_img/2023-01-25_19-17-39.jpg)

### Browser Compatibility

The game was tested across the following browsers for any bugs:

- Chrome
- Firefox
- Edge

### Unfixed bugs
  - Ocassional console 404 error with realfavicongenerator.net
  - Ocassional 404 error with site.webmanifest

  ![Unfixed Bug](assets/images/readme_img/bug.jpg)

Testing document:
<br>
https://1drv.ms/x/s!AvJgYZrLWaJmexwwAqsLAe21lZ0?e=Fl39f5

### Validator Testing

* HTML No errors were returned when passing through the official W3C validator
* CSS No errors were found when passing through the official W3C CSS validator. 
* Each javascript file was tested on the site for errors and functionality using the console and with JSHint.

![JavaScript Validation](assets/images/readme_img/validator-js.jpg)

The function:

  ````for (var button of buttonArray) {
    button.addEventListener('click', function() {       
        let img = functionsArray[Math.floor(Math.random() * functionsArray.length)];
        img();
        functionsArray.splice(functionsArray[img], 1);
        console.log(functionsArray);
    });
}
````        

works flawlessly in all browsers as shown above in the section "Testing".

## **Deployment**

The site was deployed to GitHub pages. The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Main Branch
* Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
* The live link can be found here - https://innahyrych.github.io/Find-The-Fox/

## **Credits**

### Content:

Information for the game Finde the Fox was taken from:
* https://www.saveafox.org/
* https://randomfunfactsonline.com/what-do-foxes-eat/                        
* http://knowledge-sastha.blogspot.com/2013/05/foxy-facts.html
* https://facts.net/fox-facts/
* https://www.factscrush.com/2021/08/facts-0about-foxes.html
* https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx

The icons were taken from [Font Awesome](https://fontawesome.com/).
<br>
Fonts were taken from [Google Fonts](https://fonts.google.com/).
<br>
Favicon created on [realfavicongenerator.net](https://realfavicongenerator.net/) site.
<br>
[Stack Overflow](https://stackoverflow.com/), 
<br>
[w3schools.com](https://www.w3schools.com/js/) were used for help with JavaScript.


### Media

All images used within this game were taken in [Pexels - Free Stock Photos](https://www.pexels.com/) site.
<br>
Sounds for the game I found on [pixabay.com](https://pixabay.com/sound-effects/search/game/).
<br>
Any code utilised from a site is documented and credited within the code.