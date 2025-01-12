import ProjectInfo from './ProjectInfo.js';
import {
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';

const Project = () => {
  return (
    <div className="flex flex-wrap w-screen px-8">
      {ProjectInfo.map((info, index) => (
        <div key={index} className="bg-red-400 rounded p-3 h-auto w-full font-josefinsans font-extrabold text-white mt-5">
          <p className="text-4xl font-boogaloo">
            {info.name}
          </p>
          <img src={info.img} alt={info.name} width="100%" />
        <div>
          <h1 className="text-lg font-sans m-2">Categories</h1>
          <div className="flex flex-wrap gap-2 w-full">
            {info.category.map((category, index) => (
              <p key={index} className="bg-white py-1 px-4 text-red-500 w-auto rounded-full">
                {category}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-lg font-sans m-2">Technology Used</h1>
          <div className="flex flex-wrap gap-2 w-full">
            {info.tech.map((tech, index) => (
              <p key={index} className="bg-white py-1 px-4 text-red-500 w-auto rounded-full">
                {tech}
              </p>
            ))}
          </div>
        </div>
        <button className="w-full h-10 bg-black text-white mt-3 rounded-full">View</button>
      </div>
      ))}
  </div>
)
};

export default Project;