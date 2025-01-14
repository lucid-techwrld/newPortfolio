import React from 'react'
import TechInfo from '../components/TechInfo.jsx'
import myImage from "../assets/Image/myImage.png";
import Tailwind from "../assets/Image/tailwind-css.svg";
import Python from "../assets/Image/python.webp";
import ReactJS from "../assets/Image/React.png";
import JS from "../assets/Image/JS.png";
import Django from "../assets/Image/django.png";
import C from "../assets/Image/c.png";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-16 px-3">
      <div className="w-80 h-auto border-2 border-red-500 rounded-full mt-14 p-2">
        <p className="text-2xl text-red-500 font-myFont ml-3">
          <strong className="text-white">I'm</strong> DAVIS Ayomide
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center mt-10 gap-2">
        <p className="font-josefinsans text-lg text-white text-center  font-extrabold sm:text-2xl">
          A Software Developer | Robotics | Cybersecurity
        </p>
        <span className="bg-red-500 h-10 rounded-full p-1.5 text-black font-extrabold text-center">3.1+ Years Experience</span>
      </div>
      <div className="mt-1 relative w-full p-0 h-72 items-center flex flex-col mt-6">
        <img
        src={myImage}
        alt="myImage"
        className="bottom-0 absolute z-40 w-[350px] h-[250] sm:w-[400px] sm:h-[300px]"
        />
      <div className="w-72 h-44 rounded-t-full bg-red-500 z-0 bottom-0 absolute">
      </div>
      <div className="absolute bottom-0 flex flex-col items-center w-full">
        <TechInfo data={[{ url: Tailwind, name: 'Tailwind Css' },
          { url: Python, name: 'Python' }]} />
        <TechInfo data={[{ url: JS, name: 'JavaScript' },
          { url: C, name: 'C Programming' }]} />
        <TechInfo data={[{ url: Django, name: 'Django' },
          { url: ReactJS, name: 'React JS' }]} />
      </div>
    </div>
  </div>
);
}

export default Home