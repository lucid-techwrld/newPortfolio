import {
  Icons,
  ProjectInfo
} from './ProjectInfo.jsx';
import {
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import {
  IoMdLink
} from "react-icons/io";

const Project = () => {
  return (
    <div className="flex flex-wrap w-full justify-center px-3 items-center gap-4 mt-6">
      {ProjectInfo.map((info, index) => (
        <div key={index} className="bg-red-400 rounded-3xl px-6 py-4 h-[650px] w-[350px] sm:w-[320px] lg:w-[470px] flex flex-col">
          <div className="font-josefinsans font-extrabold text-white mt-4 flex flex-col flex-grow space-y-1">
            <p className="text-3xl font-boogaloo text-black">
              {info.name}
            </p>
            <div
              className="w-full h-[200px] bg-blue-500 lg:h-[350px]">
              <img
              src={info.img}
              alt={info.name}
              className="h-full w-full object-fill" />
          </div>
          <div>
            <h1 className="text-lg font-sans m-2 text-black">Categories</h1>
            <div className="flex flex-wrap gap-2 w-full">
              {info.category.map((category, index) => (
                <p
                  key={index}
                  className="bg-white py-1 px-3 text-red-500 w-auto rounded-full flex gap-2 items-center">
                  {Icons[category]} {category}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-sans m-2 text-black">Technology Used</h1>
            <div className="flex flex-wrap gap-2 w-full flex-grow">
              {info.tech.map((techInfo, index) => (
                <p key={index} className="bg-white py-1 px-4 text-red-500 w-auto rounded-full flex gap-2 items-center">
                  {Icons[techInfo]}{techInfo}
                </p>
              ))}
            </div>
          </div>
        </div>
        <button
          className="w-full h-10 bg-black text-white mt-3 rounded-full  flex items-center gap-3 justify-center text-2xl">
          <IoMdLink />
          <span className="font-extrabold">View</span>
        </button>
      </div>
      ))}
  </div>
)
};

export default Project