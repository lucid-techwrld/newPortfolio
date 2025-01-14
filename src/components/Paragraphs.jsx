import {
  useState
} from 'react'

import AboutInfo from './AboutInfo.js'
import {
  FaEye,
  FaEyeSlash
} from 'react-icons/fa'

const Paragraph = () => {
  const [showAll,
    setShowAll] = useState(false);

  const showParagraph = showAll ? AboutInfo: AboutInfo.slice(0, 3);
  //console.log(showParagraph)
  return (
    <div className="bg-gray-800 rounded p-3 h-auto font-josefinsans font-extrabold">
      {showParagraph.map((text, index)=> (
        <p key={index} className="text-white text-justify mb-4 text-lg sm:text-2xl">
          {text}
        </p>
      ))}
      <div className="flex justify-center items-center w-full">
        <button onClick={() => {
          setShowAll(!showAll)
        }} className="w-52 h-14 rounded-full border-2 border-red-500 text-red-500 flex items-center justify-center space-x-4 text-lg">{showAll ? (
          <>
            <FaEyeSlash />
            <span>Show Less</span>
          </>
        ): (
          <>
            <FaEye />
            <span>Show More</span>
          </>)}</button>
      </div>
    </div>
  );
}

export default Paragraph