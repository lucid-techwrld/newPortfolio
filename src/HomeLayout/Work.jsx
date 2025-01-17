import { useState } from 'react';
import Project from '../components/Project.jsx';
import { ProjectInfo } from '../components/ProjectInfo.jsx';

const Work = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryCount = (category) => {
    if (category === 'All') {
      return ProjectInfo.length;
    }
    return ProjectInfo.filter((project) => project.category.includes(category)).length;
  };

  const categories = ['All', 'Frontend', 'Backend', 'Library', 'Mobile'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h1 className="text-red-500 text-center mt-5 text-5xl font-sans font-bold">Work</h1>
      <div id={id} className="flex flex-wrap w-full h-auto gap-3 justify-center items-center mt-5 px-2">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`w-auto px-3 py-2 text-lg rounded-full cursor-pointer 
              ${selectedCategory === category ? 'bg-red-500 text-white' : 'border-2 border-red-500 text-red-500'}`}
          >
            {category} <span>({getCategoryCount(category)})</span>
          </div>
        ))}
      </div>
      <Project selectedCategory={selectedCategory} />
    </>
  );
};

export default Work;