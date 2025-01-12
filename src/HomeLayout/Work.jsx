import Project from '../components/Project.jsx';

const Work = () => {
  return (
    <>
      <h1 className="text-red-500 text-center mt-5 text-5xl font-sans font-bold">Work</h1>
      <div className="flex flex-wrap w-full h-auto gap-3 justify-center items-center mt-5 px-2">
        <div className="w-auto px-3 py-2 text-lg text-red-500 border-2 border-red-500 rounded-full">
          All <span>(6)</span>
        </div>
        <div className="w-auto px-3 py-2 text-lg text-red-500 border-2 border-red-500 rounded-full">
          Frontend <span>(6)</span>
        </div>
        <div className="w-auto px-3 py-2 text-lg text-red-500 border-2 border-red-500 rounded-full">
          Backend <span>(3)</span>
        </div>
        <div className="w-auto px-3 py-2 text-lg text-red-500 border-2 border-red-500 rounded-full">
          Libary <span>(0)</span>
        </div>
        <div className="w-auto px-3 py-2 text-lg text-red-500 border-2 border-red-500 rounded-full">
          Mobile <span>(0)</span>
        </div>
      </div>
      {/*<Project />*/}
    </>
  );
}

export default Work;