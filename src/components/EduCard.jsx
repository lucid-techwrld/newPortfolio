import {
  MdDateRange
} from "react-icons/md";
import {
  FaSchool
} from "react-icons/fa";
import {
  IoSchool
} from "react-icons/io5";

const EduCard = (props) => {
  return (
    <div className="w-full h-[300px] flex flex-col gap-y-3 px-7 py-4 rounded-3xl bg-white mb-10 lg:w-[700px] sm:w-1/2 sm:border-4 sm:border-black">
      <p className="w-full h-auto px-3 py-3 rounded-full bg-red-500 text-lg text-black flex gap-3 items-center font-bold">
        <MdDateRange /> {props.date}
      </p>
      <p className="w-full h-auto px-3 py-3 rounded-full bg-black text-lg text-white font-bold">
        {props.school}
      </p>
      <div className="flex items-center gap-2 w-full">
        <p className="h-14 w-14 rounded-full bg-black text-red-500 text-2xl flex justify-center items-center">
          <IoSchool />
        </p>
        <p className="text-lg text-black font-josefinsans font-extrabold">
          {props.degree}
        </p>
      </div>
      <div className="flex items-center gap-2 w-full">
        <span className="h-14 w-14 rounded-full bg-black text-red-500 text-2xl flex justify-center items-center"><FaSchool /></span>
        <span className="text-lg text-black font-josefinsans font-extrabold">{props.schoolName}</span>
      </div>
    </div>
  );
}

export default EduCard;