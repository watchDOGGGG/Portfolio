import palscheckIMg from '../Assest/Image/78392uh28u392u3u23.webp'
import zigatextImg from '../Assest/Image/720932-38h2hfbuf82382993.png'

export const about_me = `
Hello! My name is Prince Emmanuel (Randy) and I enjoy creating things that live on the internet. My interest in mobile development started back in 2014 when I decided to try hackimg stuff on the internet got an advise that before i can hack or break anything i have to learn how its been built!, 
this process lead me to start building innovative stuff and instead of breaking things i learnt to make them stronger.
Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design community. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
I also recently launched a social network that allows radio broadcasting system between radio stations and users on the site using React, Howler.js, NodeJs, Sockek.io icecast and more.
`

export const qoute = `
Building the world using the only way i know - programming!`

export const stacks = [
    { name: 'Javascript (ES6+)',image:''},
    { name: 'ReactJs',image:''},
    { name: 'python',image:''},
    { name: 'Node.js',image:''},
    { name: 'Typescript',image:''},
    { name: 'MongoDB',image:''},
    { name: 'GraphQL',image:''},
    { name: 'Mysql',image:''},
    { name: 'Postgress',image:''},
    { name: 'Firebase',image:''},
    { name: 'Travis CI',image:''},
    { name: 'Github',image:''},
    { name: 'Docker',image:''},
    { name: 'Kubernetes',image:''},
    
]

export const work_experience = [
    {
        company: 'Nugitech',
        type: 'full stack developer',
        date: `2022 - current`,
        link: 'https://nugitech.com/#/',
        image: '',
        location: 'Nigeria - Lagos',
        duty: [
           `Wrote a python code using pandas and matplot to create statistics of data
           from database, this help our team monitor the size of our database and scale
           for a larger amount of data and keep track of where are application is mostly
           used.`,
           `
            Developed endpoints using NodeJs, express, worked with NosqlDB like
            mongodb and redis to store data and also cache, help improving app
            performance, set up Docker container to run our application and used tools like
            travisCI for CICD.
           `,

           `
           Worked with the frontend team to build good and quality user experience web
            applications.
           `,
           `Improved code quality of other engineers by building a firm-wide library of
           commonly used objects to make testing easier and more frequent.
           Developed unit test cases for testing and automation.`,
           `Built an audio encoder in javascript to convert stream-able audio files into avv
           file format, using ffmpeg and send that data to the client using socket.io and
           peerjs server in realtime.
           `
        ]
    },
    {
        company: 'MounClub',
        type: 'Backend developer',
        date: `2020 - 2021`,
        link: 'https://moun.club/#/',
        image: '',
        location: 'Estonia - Remote',
        duty: [
           `Collaborated with multidisciplinary team of designers, developers and system
           administrators.`,
           `Managed efficient SQL queries and data transport.`,

           `Built flexible, reusable code and libraries for future use.`,
           `Wrote unit tests to evaluate high code coverage.
           `,
           `Designed client-side and server-side architecture and implemented cloud based back end solutions.`,
           `Resolved scalability problems and addressed security concerns.`
        ]
    },
    {
        company: 'Kemonai',
        type: 'full stack developer',
        date: `2017 - 2020`,
        link: 'https://zigatext.com',
        image: '',
        location: 'Nigeria -  calabar, cross river state',
        duty: [
           `Contributed ideas and suggestions in team meetings and delivered updates on
           deadlines, designs and enhancements.`,
           `Consulted with engineering team members to determine system loads and
           develop improvement plans.`,

           `Used NodeJS, ORM and SQL/No-SQL to develop and manage databases.
           `,
           `Wrote a microservice, using NodeJs, Kafka and mongoDb to handle service
           request of data to the client side increasing server performance by 80%.`,

           `Worked with React to build nice and responsive web screens and used Redux
            as a state management system to manage states and distribute data across
            screens, maintaining clean and reusable codes.
           `,
           `Wrote automated test, unit test using jest and supertest for both client and
           server side.
           `

        ]
    },

]

export const Myprojects = [
   
    {
        name:'Zigatext',
        type: 'mobile / web',
        link: 'https://zigatext.com',
        image: zigatextImg,
        stacks: 'Flutter, Vue, Golang, Docker, Aws',
        about: 'Zigatext is a cloud messaging platform for mass SMS, phonebook contact services, auto pilot birthday messaging and lots of other exciting functionality.'
    },
    {
        name:'Palscheck',
        type: 'mobile / web',
        link: 'https://palscheck.com',
        image: palscheckIMg,
        stacks: 'React, Redux, Node.Js, Aws, Flutter, Python',
        about: 'Palscheck is a social network for content creators ranking users based on most watch contents while they earn from their fans by subscriptions.'
    },
]