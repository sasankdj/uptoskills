import React from 'react'
import { Bot } from 'lucide-react'

const AISuggestion = ({ suggestion }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-2">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 mb-1">AI Suggestion</h4>
          <p className="text-sm text-gray-700">{suggestion.text}</p>
        </div>
      </div>
    </div>
  )
}

export default AISuggestion
