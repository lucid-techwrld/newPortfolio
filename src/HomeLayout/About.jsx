import Hobby from '../components/Hobby.jsx'
import {
  FaMusic
} from "react-icons/fa";

import {
  FaPlaneArrival
} from "react-icons/fa";

import {
  LuCookingPot
} from "react-icons/lu";

import {
  MdMovie
} from "react-icons/md";

import Paragraph from '../components/Paragraphs.jsx'

const About = ({
  id
}) => {
  return (
    <div id={id} className="h-auto mt-10 w-screen px-3 z-0 mt-10">
      <h2 className="text-center text-3xl text-red-500 font-bold">About Me</h2>
      <div>
        <span className="text-white text-2xl font-myFont">Hobbies</span>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center items-center">
        <div className="w-full sm:w-1/2">
          <Hobby
            data={[{ icon: <FaMusic className="text-black text-2xl" />, name: "Music"
            },
              {
                icon: <FaPlaneArrival className="text-black text-2xl" />, name: "Traveling"
              }]} />
          <Hobby
            data={[{ icon: <LuCookingPot className="text-black text-2xl" />, name: "Cooking"
            },
              {
                icon: <MdMovie className="text-black text-2xl" />, name: "Movie"
              }]} />
        </div>
        <div className="flex justify-between gap-5 w-full p-5 sm:w-1/2">
          <div className="bg-red-300 flex flex-col gap-y-4 h-44 w-1/2 py-4 px-2 rounded-3xl">
            <h2 className="text-4xl text-red-500 font-myFont text-center">3.1+</h2> <p className="text-2xl text-white font-josefinsans font-extrabold text-center">
              Years Experience
            </p>
          </div>
          <div className="bg-red-300 flex flex-col gap-y-4 h-44 w-1/2 py-4 px-2 rounded-3xl">
            <h2 className="text-4xl text-red-500 font-myFont font-bold text-center">7+</h2> <p className="text-2xl text-white font-josefinsans font-extrabold text-center">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 w-full">
        <Paragraph />
      </div>
    </div>
  );
}

export default About;