export const TABS = [{value: 'about'}, {value: 'experience'}, {value: 'projects'}, {value: 'resume'}, {value: 'contact'}];

export const INTRO = 'Hey there! I’m Connor, a Computer Engineering student at the University of Waterloo. I\'m also a programmer, both professionally and as a hobby. In my free time, I like playing guitar, skateboarding, and hunting for the best coffee in Toronto. Get in touch to ask about co-op, freelancing, or just to talk!';

export const PROJECT_DETAIL = [
  {
    value: 'what',
    title: 'what it does',
  },
  {
    value: 'how',
    title: 'how it does it',
  },
  {
    value: 'challenges',
    title: 'challenges',
  },
]

export const PROJECTS = [
  {
    value: 0,
    img: 'tictactoe',
    title: 'tictactoe',
    link: 'https://github.com/connorbarkr/tictactoe',
    what: 'The tictactoe program is pretty self-explanatory; it\'s a game of tictactoe I built in Python as part of a job application. Building it was quite fun, as I was constrained by a one-hour time limit, so my solutions to problems I encountered had to be effective and relatively simple to implement while remaining very fast.',
    how: 'The game is written in Python, and lacks a GUI (so it needs to be played on the command line). The board is stored as an array of strings, and asks the user to input a number between 1 and 9, which it uses to retrieve the index of the spot the user selects. The opponent\'s moves are totally randomized.',
    challenges: 'The biggest challenge for this project was definitely the time limit - while the code itself is relatively simple, the 1 hour time limit forced me to plan exactly what I wanted to do before I started in order to expedite the decision-making process for how I wanted to implement features like storing the board, choosing a team, and playing against an opponent.',
  },
  {
    value: 1,
    img: 'laser',
    title: 'laz0rb0i',
    link: 'https://github.com/CrypticEskimo/laz0rb0i',
    what: 'laz0rb0i is, in part, a hardware project. It consists of two mirrors mounted on motors, a PCB which controls both of them, and a laser pointer. The laser pointer projects a beam which is reflected off of both spinning mirrors to create patterns on a wall, which change in diameter and complexity depending on the direction and speed of rotation of the motors.',
    how: 'All code for this project was written in C++, using libraries to control the GPIO pins of the PCB (an Omega2) being used. The Omega2 was used to send PWM signals to control the motors, with a battery pack and a motor controller chip as an intermediary. The software can produce its own random input using sine waves, or it can accept user input to manually adjust the speed and direction of the motors. The remaining hardware was taken from the machine shop in which this was constructed.',
    challenges: 'The biggest challenge for this project was getting the Omega2 to run the code I\'d written. It runs the MIPS architecture, and lacks the RAM to compile C++ code itself, which made cross-compilation necessary. This was ultimately accomplished usign a virtual Linux environment and custom software. Another challenge was working with the GPIO pins. The library I was attempting to use didn\'t function correctly and lacked documentation, so I constructed my own using bash commands.',
  },
  {
    value: 2,
    img: 'alien',
    title: 't.n.s.i.',
    link: 'https://github.com/connorbarkr/totallynotspaceinvaders',
    what: 'An old-school arcade game which is Totally Not Space Invaders! (Although it may draw inspiration from it.) It features custom artwork, randomly generated starscape backgrounds, increasing difficulty, and persistent high scores. It also has experimental new features like the ability to drop mines to protect your base!',
    how: 'Built using PyGame and written using Python3, t.n.s.i. uses principles like functional and object-oriented programming to function. The project is split into several different files which group classes and functions for increased readability and ease of modification/refactoring at a later date. I tried to break each function down if it featured a reusable component.',
    challenges: 'There were several challenges I encountered during this project, such as how to store high scores persistently and how to balance gameplay. I solved the first challenge by reading from/writing to a text file at the end of a game, provided the high score is greater than the previous one. Game balancing was more difficult, but I resolved this by limiting the number of shots a player can fire at once and increasing the aliens\' speed each level.',
  },
  {
    value: 3,
    img: 'flickr',
    title: 'PhotoGallery',
    link: 'https://github.com/connorbarkr/PhotoGallery',
    what: 'PhotoGallery is a wrapper for the photo-sharing platform Flickr. It\'s an Android app that I designed and built myself, and uses the Flickr API as well as functionality like dynamic image loading and image searching based on title and keyword.',
    how: 'PhotoGallery is built in Java and XML in Android Studio. The app itself uses several practices to increase the speed of actions like scrolling and searching through images. In order to retrieve images on load or on search, the app calls the RESTful Flickr API endpoints that correspond to these actions. It also uses a RecyclerView to increase render speed when the user scrolls through a list of photos.',
    challenges: 'This was the first app I built for Android, and as such was both very educational and very challenging. Challenges included learning the best general practices for Android, such as modular code, as well as more specific things like the use of a RecyclerView or correctly styling the app using XML. Learning to work with HTTP requests was also difficult, although I overcame all of these challenges through reading and (most importantly) good old-fashioned trial and error.',
  },
  {
    value: 4,
    img: 'asciify',
    title: 'asciify',
    link: 'https://github.com/connorbarkr/ASCIIfy',
    what: 'ASCIIfy is an extension for the web browser Google Chrome. When activated, it replaces all images on a webpage (within a certain limit) with ASCII art versions of themselves, that have been slightly colorized and scaled to fit so that the layout of the page isn\'t compromised and all text remains legible. The art can also be copy-pasted to preserve it for future use.',
    how: 'ASCIIfy is built entirely in JavaScript, using the Chrome extension framework. It parses images in blocks of pixels, finding their average greyscale and color values. It uses the greyscale values to find an ASCII character equivalent, which it colors using the average color value of that square of pixels. It then uses jQuery to replace the image on the webpage with a text box, populated with the stitched-together ASCII characters retrieved earlier.',
    challenges: 'The main challenge in this process was circumventing the cross-origin policies Chrome puts in place (CORS). This was problematic because CORS prevents reading image data that didn\'t originate on the domain the user is on. I got around this by copying the image data to a new image, and manually resetting the image\'s origin to \'anonymous\', then reading the pixel data from the new image instead of the original.',
  },
  {
    value: 5,
    img: 'twitter',
    title: 'amsat',
    link: 'https://github.com/connorbarkr/AMSAT',
    what: 'AMSAT is a Twitter bot which I constructed after being asked constantly what my opinion of Donald Trump was, as an American. AMSAT stands for As Much Sense As Trump, which is the basic point of the Twitter bot. It uses The Don\'s tweets as source material, then tweets whenever he does. The things it says don\'t usually make much sense, but they definitely make at least as much sense as the POTUS.',
    how: 'The bot is built on a custom-made natural language processing (NLP) engine I built, using something called Markov chains. Using a RESTful Twitter API, I pull The Donald\'s most recent tweets, break them down by sentence, and feed them to the bot, which then constructs its own tweet based on the probability our resident Oompa-Loompa-in-Chief will use a given word. That\'s the same technology that powers the autocorrect on your phone!',
    challenges: 'The biggest challenge for this project was the NLP engine. I could have used an existing one, like Markovify, but I really wanted to explore how Markov chains worked. My ultimate solution was to create a nested array; every word Stupid Sauron uses corresponds to an array of words he follows them with. The bot constructs tweets word by word, selecting words based entirely on probability.',
  },
];

export const EXPERIENCES = [
  {
    name: 'Konrad Group',
    title: 'machine learning developer',
    dates: 'may - august 2019',
    p1: 'My most recent co-op experience was my second time working for the Konrad Group. During my four months with them, I worked as an iOS and machine learning developer, working primarily with Swift and Python to develop an ML-based iOS app.',
    p2: 'I started my internship by training convolutional neural networks and regression models to accomplish tasks like predicting house prices or diabetes diagnoses. I then designed and wrote Python scripts to convert Keras neural networks to Apple\'s .mlmodel format.',
    p3: 'I used these models, along with the new Core ML 3 beta, to design and develop an iOS 13 app which allows a user to draw digits and then predict which number they wrote. The app also features on-device retraining, personalizing it to a user\'s handwriting.',
  },
  {
    name: 'Konrad Group',
    title: 'web developer',
    dates: 'september - december 2018',
    p1: 'This was my first time working for the Konrad Group, a digital design and development firm which has built products for Spotify, MTV, McDonalds, and many more. I worked as a frontend web developer during my time on the team.',
    p2: 'I worked extensively with technologies such as React, NodeJS, Jest, and Enzyme to both construct and test components, features, and pages using the latest React practices, such as contexts and new lifecycle methods.',
    p3: 'Aside from constructing new components and features, I worked on cross-browser compatibility, responsive design, and extensive unit-testing using Jest and Enzyme.',
  },
  {
    name: 'Portal',
    title: 'fullstack developer',
    dates: 'january - april 2018',
    p1: 'During my time on the Portal developer team, I worked with a variety of environments, languages, and platforms. My responsibilities included building an analytics tracker from scratch.',
    p2: 'I also redesigned the CECA (UWaterloo’s center for Co-operative Education & Career Action) paging system, using JavaScript and HTML/CSS. This process included the creation of new functionality for the system, such as the ability to edit interview timeslots, message students, and more.',
    p3: 'I also attended weekly Agile SCRUM meetings, used Jira to track task completion, and participated in storyboarding meetings once every three-week sprint.',
  },
];
