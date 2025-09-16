import React, { useState } from 'react'
import { Image as ImageIcon, Code, AtSign } from 'lucide-react'

const QuestionForm = ({ onSubmit }) => {
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionDescription, setQuestionDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ title: questionTitle, description: questionDescription })
    setQuestionTitle('')
    setQuestionDescription('')
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title of your question..."
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        />
        <textarea
          placeholder="Describe your doubt in detail..."
          value={questionDescription}
          onChange={(e) => setQuestionDescription(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          required
        />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button type="button" className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800">
              <ImageIcon className="w-4 h-4" />
              <span className="text-sm">Image</span>
            </button>
            <button type="button" className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800">
              <Code className="w-4 h-4" />
              <span className="text-sm">Code</span>
            </button>
            <button type="button" className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800">
              <AtSign className="w-4 h-4" />
              <span className="text-sm">Mention</span>
            </button>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Post Question
          </button>
        </div>
      </form>
    </div>
  )
}

export default QuestionForm
