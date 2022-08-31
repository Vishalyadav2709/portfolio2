import self from "../img/self.png"
import book from "../img/book.png"
import flip from "../img/flip.png"
import odec from "../img/odec.png"
import ques from "../img/ques.png"
import todo from "../img/todo1.png"
import portfolio from "../img/portfolio.jpg"
import Resume from "../resume/Resume.pdf"




export let colors = ["rgb(65, 227, 107)", "rgb(101, 17, 203)"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vishal",
    lastName: "Yadav",
    initials: "Vishal ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: " 🏫 ",
            text: "Student at Atharva College Of Engineering"
        },
        {
            emoji: '📖',
            text: '3rd Year INFT Branch'
        },
        {
            emoji: ' 👨‍💻 ',
            text: 'Curious To Learn New Things'
        },
        {
            emoji: "📧",
            text: "vishal.tyadav2709@gmail.com"
        }
    ],
    socials: [
      
        {
            link: "https://www.instagram.com/itsyadavvishal/",
            icon: 'fa fa-instagram', 
            label: 'instagram',
          
           
        },
        {
            link: "https://github.com/Vishalyadav2709",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vishal-yadav-0a8365209/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Vishal. I am currently prefinal year student of BE (INFT) from Atharva College of Engineering.I am self motivated,critical thinker and hardworking person, I take up all learning opportunities that enhances my skills.Currently I am building skills in MERN by creating different kind of projects.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'mongodb'],
            exposedTo: ['nodejs', 'python', 'express', 'C','C++']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cricket',
            emoji: '🏏'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    internship: [
        {
            no : "1.",
            name:"NullClass",
            position: "Webdeveloper Training",
            date : "Present"
        },
        {
            no : "2.",
            name:"Oasis Infobyte",
            position: "Webdeveloper Intern",
            date : "May2022-Jun2022"
        },
        {
            no : "3.",
            name:"LetsGrow More",
            position: "Webdeveloper Intern",
            date : "Apr2022-May2022"
        },
        {
            no : "4.",
            name:"Ten Entrepreneurship Network",
            position: "Wix Developer",
            date : "Mar2022-Apr2022"
        },
        {
            no : "5.",
            name:"Ten Entrepreneurship Network",
            position: "SpringBoot Developer",
            date : "Oct2021-Jan2022"
        }
    ],
    resume :[
        {
            title:"Resume",
            link: Resume
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
         {
        title: "Project 1",
        live: "https://todo-web27.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        source: "https://github.com/Vishalyadav2709/todo-list-firebase-", // this should be a link to the **repository** of the project, where the code is hosted.
        image: todo
    },
    {
        title: "Project 2",
        live: "https://yadavvishal.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        source: "https://github.com/Vishalyadav2709/portfolio2", // this should be a link to the **repository** of the project, where the code is hosted.
        image: portfolio
    },
        {
            title: "Project 3",
            live: "https://github.com/Vishalyadav2709/Mern-Bookstore", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Vishalyadav2709/Mern-Bookstore", // this should be a link to the **repository** of the project, where the code is hosted.
            image: book
        },
        {
            title: "Project 4",
            live: "https://reactquestionapp.herokuapp.com/",
            source: "https://github.com/Vishalyadav2709/Question-app",
            image: ques
        },
        {
            title: "Project 5",
            live: "https://vishalyadav2709.github.io/Odec-Infotech/",
            source: "https://github.com/Vishalyadav2709/Odec-Infotech",
            image: odec
        },
        {
            title: "Project 6",
            live: "https://vishalyadav2709.github.io/Flipcart-web/",
            source: "https://github.com/Vishalyadav2709/Flipcart-web",
            image: flip
        }
    ]
}
