import EduCard from "../components/EduCard.jsx"

const Education = () => {
  return (
    <>
      <h1 className="text-5xl text-red-500 text-center font-boogaloo mt-10">Education</h1>
      <div className=" flex flex-wrap w-full h-auto px-4 mt-5 justify-center">
        <EduCard
          date="2017 - 2023"
          school="High School"
          degree="O-Level"
          schoolName="Ayangburen High School, Ikorodu" />
        <EduCard
          date="2025 - Present"
          school="LASUSTECH, Ikorodu"
          degree="Bachelor Degree - Computer Science"
          schoolName="Ayangburen High School, Ikorodu" className="sm:w-1/2" />
      </div>
    </>
  );
}

export default Education;