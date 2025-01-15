import {
  FaStar
} from 'react-icons/fa'

import Avatar from '../assets/Image/avatar.png'

const Card = (props) => {
  return (
    <div className="text-black font-josefinsans font-extrabold text-lg w-full h-auto bg-white rounded-3xl py-4 px-6 mb-5 lg:w-[650px]">
      <div className="flex justify-between items-center">
        <div className="text-2xl text-red-400 flex gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="w-[14px] h-[14px] rounded-full bg-red-400 p-6 flex justify-center items-center">
          {props.countryIcon}
        </div>
      </div>
      <p className="text-2xl mb-10">
        {props.text}
      </p>
      <hr className="border-t-2 border-red-400" />
    <div className="flex w-full gap-4 mt-4">
      <img src={Avatar}
      alt="avatar" width="50px" height="40px" />
    <div>
      <p className="font-sans">
        {props.name}
      </p>
      <p>
        {props.countryIcon}{props.country}
      </p>
    </div>
  </div>
</div>
)
}

export default Card