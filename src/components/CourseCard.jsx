import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div
      className={`rounded-xl p-4 border shadow-sm ${
        course.isActive ? 'bg-teal-50 border-teal-200' : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-start space-x-3">
        <img
          src={course.image}
          alt={course.title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 mb-1">{course.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{course.subtitle}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{course.lessons}</span>
            <span className="text-gray-600">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${course.progressColor}`}
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
