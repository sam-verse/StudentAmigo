import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');
 const navigate=useNavigate();
  const careerCourses = [
    { name: 'Software Engineering', description: 'Learn to design, develop, and maintain software applications using modern technologies.' },
    { name: 'Data Science', description: 'Explore data analysis, machine learning, and statistical techniques to extract valuable insights from data.' },
    { name: 'Graphic Design', description: 'Develop skills in visual communication, including design principles, typography, and digital media.' },
    { name: 'Marketing', description: 'Understand market research, advertising strategies, and digital marketing techniques to drive business growth.' },
  ];

  const filteredCourses = careerCourses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Career Opportunities</h1>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for career courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="space-y-4">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-2">{course.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={()=>navigate('/DetailsPage')}
                >
                  Know More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
