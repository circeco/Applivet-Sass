# [Applivet.it](https://www.applivet.it/){:target="_blank" rel="noopener"} 

![Applivet](/assets/img/mockup.png)

Stream One Project - Code Institute 

This is a Static Front-End project developed with User-Centric Mobile-First approach. 
It was created as a real-case commercial website for a construction company based in Milan. 
The website includes the main page that display clear and straight-forward info, and a description page that contain photo gallery and more detail descriptions. 
The technologies used are HTML, SASS and JavaScript. The site is deployed in ARUBA.it. 

---
---

## Table of Contents

1. [**UX**](#ux)
    - [**Project Goal**](#project-goal)
    - [**Developer Goal**](#developer-goal)
    - [**User Goal and Expectation**](#user-goal-and-expectation)
2. [**Design**](#design)
    - [**Design Dependency**](#design-dependency)
    - [**Fonts**](#fonts)
    - [**Colors**](#colors)
3. [**Technologies Used**](#technologies-used)
    - [**HTML**](#html)
    - [**SASS**](#sass)
    - [**JavaScript**](#javascript)
    - [**NPM**](#npm)
    - [**ImageMagik**](#imagemagik)
4. [**Compatibility**](#compatibility)
5. [**Credits**](#credits)

---

## UX 

### Project Goal
APPLIVET.it works as a point of contact between the company and their customers. 
The website is generally advertised on the web and on specific web services like Google Map, so that the company can be found by potential customers. 
On the website, the user can easily find info for contacting the company or use the website itself to contact the company. 
The website also displays and gives more info about works done by the company. 

### Developer Goal
This project was part of my study in Full Stack Software Development at [Code Institute](https://codeinstitute.net/). 
The goal was to build a SASS based project that is code-efficient, scalable and can be a showcase theme easily adaptable for other business in need of a website. 


### User Goal and expectation
Users on Applivet.it will be able to:
* Read about the company history
* Understand what type of goods and services the company can provide
* Find contact and location details
* Directly contact the company through a contact form in the website
* Browse through a gallery of the company previous works  

The website does not deal with any sensitive data and no account or log in is required to the user to browse freely 
Applivet.it can be used well and all functionality are preserved across all browser and different devices. 

##### back to [top](#table-of-contents)


---
## Design 
SLEAK, CLEAN, ELEGANT user interface. 

The aim of the layout and distribuition of elements around the website, was to focus on display the company works at best without overcrowding the user with too much info and too many pictures. 
Information are not given all together but in steps and the same with the display of the company works divided in categories first that can be explored in further detail later. 
There would be no searching for contact details from the user since access to contact are given in a clear way and all the time. 


### Design Dependency
[Boothstrap 3.3.7](https://getbootstrap.com/) It is only used for the modal element. 

[MapBox 1.12.0](https://www.mapbox.com/) Map studio is used to design the style of the map displayed, its elements and functionalities. 

[Fontawesome](https://fontawesome.com/) The website make use of some icons for the contact buttons mainly. 


### Fonts 
[Google Font](https://fonts.google.com/) - [Titillium Web](https://fonts.google.com/specimen/Titillium+Web) The font is been choosen because of the similarity with the company logo. The font is also applied to the website location map.


### Colors 
Colors are kept at minimum with use of neutral color such as white, grey and a shade of navy blue for a clean and elegant effect. 
Attention to fundamental key elements, like contact buttons, are highlighted with a bright green that contrast and matching at the same time the other colors. 

- ![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) #FFFFFF "Simply White" - Primary color: White is the colur of clarity and semplicity to contrast any colour.
- ![#000000](https://placehold.it/15/213140/000000?text=+) #213140 "Dark BLue" - Primary color: Elegant and classic. 
- ![#006064](https://placehold.it/15/29AB87/000000?text=+) #29AB87 "Dark cyan - lime green" - Secondary color: Young, fun and noticeable.
- ![#FF5252](https://placehold.it/15/f2f2f2/000000?text=+) #f2f2f2 "Light grey" - Secondary color: This color is used to give further layers of contrast without clash much with the white. 


##### back to [top](#table-of-contents)

---
## Technologies Used

### **[HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)**

### **[SASS](https://sass-lang.com/)** 
The use of this stylesheet language allowed me to reduce drastically ripetition in styling codes. This was thanks of the use its features (variables, nesting and loops). 

### **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** 
JS is been used to create three distinct functionalities. 

- [jQuery 2.1.1](https://jquery.com/) - The modal on the website was created with this framework, which is very useful to keep the JS coding at minimum.

- [MapBox 1.12.0](https://www.mapbox.com/) - The location-map uses MapBox.js API and the use of documentation and examples in JS were used to create a customised map for the website need. 

- [Emailjs](https://www.emailjs.com/) - With the implementation their API emails are sent directly from the Javascript code and no server side code is required.


### **[NPM](https://www.npmjs.com/)** 
The package management system for JS was used to compile SASS directly into CSS styles. The following code will need to be run in the terminal: 
```bash
npm install 
```
followed by 
```bash
npm run sass-watch 
```
In this way, as changes are made in Sass would be on the fly compiled in CSS and visible on the local file system that the browser is using (localhost).



### **[ImageMagik](https://imagemagick.org/)** 
Images were resized to decrease the website site and so to speed up browser loading time, in particular the description page, which contains the photo gallery. 
The resizing involved more then 200 images and was done in the terminal using the following code: 
```bash
for F in *.jpg ; do magik $F -resize '1000x1000>' mini/$F ; done
```


## Compatibility

- :white_check_mark: Responsive web design for different devices and screen size
- :white_check_mark: Cross-browser testing

Some known problems are visible with older version of Safari but it is nothing that will compromise the website clarity and readability but rather some styles are not being applied in the same way. 
Other cross-browser bugs have been tested and fixed. 


##### back to [top](#table-of-contents)

---
## Credits
Styles and logos are custom made. Pictures are owned by Applivet's owner. 
Applivet.it holds the copyright for content and codes of this repository. 
@copyright 2020 APPLIVET s.r.l.


### Authors and Acknowledgment:
- **Autor**: Author **Piero Grilli** contact me at grilli.piero@circeco.org
- **Acknowledgment**: [Andreas Nyberg](https://github.com/middlewareman) my local mentor, tutor and one of mine greatest supporter!


##### back to [top](#table-of-contents)
