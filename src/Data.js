import { FaNodeJs, FaReact, FaSass, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaPython, FaEnvelope } from 'react-icons/fa';
import { SiMongodb, SiRedux } from 'react-icons/si';
import { DiGitBranch } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { BsPencil } from 'react-icons/bs';
import work1 from './assets/work1.png';
import work2 from './assets/work2.png';
import work3 from './assets/work3.png';
import work4 from './assets/work4.png';

export const navLinks = ['home', 'about', 'skills', 'portfolio', 'contact'];

export const socialIcons = [
  { icon: <FaGithub />, link: 'https://github.com/YaronShapira' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/yaron-shapira/' },
  { icon: <FaEnvelope />, link: 'mailto:yaronshapiradev@gmail.com' },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: 'Name',
    value: 'Yaron Shapira',
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: 'Email',
    value: 'yaronshapiradev@gmail.com',
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    key: 'Location',
    value: 'Netanya, Israel',
  },
];

export const icons = [<SiMongodb />, <FaNodeJs />, <FaReact />, <SiRedux />, <FaSass />, <FaPython />, <SiTypescript />, <DiGitBranch />];

// export const experiences = [
//     {
//         id: 1,
//         year: '2022',
//         position: 'Senior Web Developer',
//         company: 'shop.com.mm',
//     },
//     {
//         di: 2,
//         year: '2021',
//         position: 'Junior Web Developer',
//         company: 'shop.com.mm',
//     },
//     {
//         id: 3,
//         year: '2019',
//         position: 'Intern Web Dveloper',
//         company: 'shop.com.mm',
//     },
// ]
// export const finishes = [
//     {
//         id: 1,
//         number: '6+',
//         itemName: 'Years Of Experience',
//     },
//     {
//         id: 2,
//         number: '150+',
//         itemName: 'Satisfied Customers',
//     },
//     {
//         id: 3,
//         number: '669+',
//         itemName: 'Designed Items',
//     },
//     {
//         id: 4,
//         number: '117+',
//         itemName: 'Clients Served',
//     },
// ]
export const portfolio = [
  {
    id: 1,
    img: work1,
    name: 'project 1',
    title: 'Airbnb Clone',
    data1:
      'Designed and developed a full-stack website clone of Airbnb using React with Typescript. The platform includes a wide range of features such as search, filter, booking capabilities, map search, which were designed and implemented with the utmost attention to detail and usability.',
    data2: 'Utilized React.js, Redux, Typescript, SASS, and Git to build the platform.',
    github: 'https://github.com/YaronShapira/Airbnb-Frontend',
    demo: 'https://airbnb-in-react.netlify.app/',
  },
  {
    id: 2,
    img: work2,
    name: 'project 2',
    title: 'Editor quix (Wix clone)',
    data1:
      'Designed and developed a full-stack website builder platform clone of Editor quix using the MERN stack. The platform includes smart components, real-time statistics, live chat, email management, lead organization, and meeting scheduling capabilities.',
    data2: 'Utilized React.js, Redux, JavaScript, Node.js, MongoDB, Express.js, Socket.io, SASS, REST, MVC, and Git to build the platform.',
    github: 'https://github.com/YaronShapira/Editor-quix-code',
    demo: 'https://www.editorquix.com/',
  },
  //   {
  //     id: 3,
  //     img: work3,
  //     name: 'project 3',
  //     title: 'Google Keep Clone',
  //     data1:
  //       'Designed and developed a full-stack web application clone of Google Keep using React.js. The platform includes a range of note-taking capabilities such as map notes, list notes, recordings, audio, videos, canvas, and images.',
  //     data2: 'Utilized React.js and Git to build the platform.',
  //     github: 'https://github.com/YaronShapira/appsus',
  //     demo: 'https://yaronshapira.github.io/appsus/#/note?q=',
  //   },
  //   {
  //     id: 4,
  //     img: work4,
  //     name: 'project 4',
  //     title: 'Meme Generator',
  //     data1:
  //       'Designed and developed a meme generator web application, utilizing vanilla JavaScript, CSS, and HTML. The platform features a user-friendly interface with drag-and-drop functionality, beautiful UX/UI design, and support for both Hebrew and English languages.',
  //     data2: 'Utilized HTML, CSS & vanilla Javascript.',
  //     github: 'https://github.com/YaronShapira/MemeGenerator',
  //     demo: 'https://yaronshapira.github.io/MemeGenerator/',
  //   },
];

// export const workNavs = ['All', 'Web', 'App', 'Design']

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: 'Netanya, Israel',
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: 'yaronshapiradev@gmail.com',
  },
  {
    id: 3,
    icon: <BsPencil />,
    infoText: 'Sweatygaming.com',
  },
];

export const experiences = [
  {
    id: 1,
    img: work1,
    name: 'project 1',
    title: 'Full Stack at Radiflow',
    subTitle: 'Mar 2023 - Present',
    data1:
      'My day-to-day? More than just adding features—it’s about making systems faster, more scalable, and actually fun to work with. I’m into everything from clean code and performance tweaks to building architecture that doesn’t just look good in diagrams but holds up in real life.',
    data2: 'I utilize NodeJs, Python, React, MongoDB, Redis, Docker, AWS & more.',
  },
];
