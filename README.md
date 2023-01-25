# *Find The Fox*

## The content

* Validator Testing
* Deployment
* Credits
    - Content
    - Media


## Validator Testing

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



## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Main Branch
* Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
* The live link can be found here - https://innahyrych.github.io/Find-The-Fox/

## Credits

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
Favicon created on [favicon.io](https://favicon.io/) site.


### Media

All images used within this game were taken in [Pexels - Free Stock Photos](https://www.pexels.com/) site.
<br>
Sounds for the game I found on [pixabay.com](https://pixabay.com/sound-effects/search/game/).
<br>
Any code utilised from a site is documented and credited within the code.