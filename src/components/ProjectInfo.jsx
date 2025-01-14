import lucidX from "../assets/Image/lucidX.jpg";
import affyMart from "../assets/Image/affyMart.jpg";
import login from "../assets/Image/login.jpg";
import LANDING from "../assets/Image/landingPage.jpg";
import MEMORY from "../assets/Image/memoryLane.jpg";
import weather from "../assets/Image/weatherwise.png";
import portfolio from "../assets/Image/portfolio.png";

import { FaReact, FaBootstrap, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import {
  FiBriefcase
} from "react-icons/fi";


 export const Icons = {
  "Web3": <FiBriefcase />,
  "Frontend": <FaHtml5 />,
  "JavaScript": <SiJavascript />,
  "Node.js": <FaNodeJs />,
  "Tailwind": <SiTailwindcss />,
  "Bootstrap": <FaBootstrap />,
  "E-commerce": <FiBriefcase />,
  "Firebase": <FiBriefcase />,
  "Backend": <FaNodeJs />,
  "Authentication": <SiJavascript />,
  "Memory": <FiBriefcase />,
  "Technology": <FaNodeJs />,
  "Portfolio": <FaReact />,
  "Single page": <FiBriefcase />,
  "React JS": <FaReact />,
  "Python": <FaPython />
};

 export const ProjectInfo = [{
  img: lucidX,
  name: "LUCID-X PAY",
  category: ["Web3",
    "Frontend",
    "JavaScript"],
  tech: ["Tailwind",
    "JavaScript",
    "Node.js"],
  url: "https://lucidxpay.onrender.com"
}, {
  img: affyMart,
  name: "AFFY MART",
  category: ["E-commerce",
    "Backend",
    "Frontend",
    "JavaScript"],
  tech: ["Python",
    "JavaScript",
    "Node.js"],
  url: "https://affymart.onrender.com/index.html"
}, {
  img: LANDING,
  name: "LANDING PAGE",
  category: ["Frontend",
    "JavaScript"],
  tech: ["JavaScript",
    "Node.js"],
  url: "https://affymart.onrender.com/homepage.html"
}, {
  img: login,
  name: "LOGIN-SIGNUP PAGE",
  category: ["Frontend",
    "Backend",
    "Authentication",
    "JavaScript"],
  // <-- Added missing comma
  tech: ["Firebase",
    "JavaScript",
    "Node.js"],
  // <-- Added missing comma
  url: "https://affymart.onrender.com/signUp.html"
}, {
  img: MEMORY,
  name: "MEMORY LANE",
  category: ["Frontend",
    "Backend",
    "Memory",
    "Technology"],
  tech: ["React JS",
    "Node.js"],
  url: "https://memorylane-vaq6.onrender.com"
}, {
  img: weather,
  name: "WEATHER WISE",
  category: ["Frontend",
    "Backend",
    "JavaScript"],
  tech: ["Bootstrap",
    "JavaScript",
    "Node.js"],
  url: "https://memorylane-vaq6.onrender.com"
}, {
  img: portfolio,
  name: "MY PORTFOLIO",
  category: ["Frontend",
    "Portfolio",
    "Single page"],
  tech: ["Tailwind",
    "React JS",
    "Node.js"],
  url: "https://memorylane-vaq6.onrender.com"
}];

//export default ProjectInfo