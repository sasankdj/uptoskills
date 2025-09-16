import React, { useState } from 'react'
import { Heart, Reply, Bookmark } from 'lucide-react'
import AISuggestion from './AISuggestion'

const DiscussionThread = ({ discussion, onReply }) => {
  const [replyText, setReplyText] = useState('')

  const handleReplySubmit = () => {
    onReply(discussion.id, replyText)
    setReplyText('')
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
      {/* Discussion Header */}
      <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
        <img
          src={discussion.user.avatar}
          alt={discussion.user.name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
            <span className="font-medium text-gray-900">{discussion.user.name}</span>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${discussion.user.levelColor}`}>
                {discussion.user.level}
              </span>
              <span className="text-sm text-gray-500">{discussion.timeAgo}</span>
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{discussion.title}</h3>
          <p className="text-gray-700 mb-4">{discussion.description}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{discussion.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <Reply className="w-4 h-4" />
              <span className="text-sm">{discussion.replies} replies</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500">
              <Bookmark className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI Suggestion */}
      {discussion.hasAISuggestion && <AISuggestion suggestion={discussion.aiSuggestion} />}

      {/* Responses */}
      {discussion.responses && discussion.responses.map((response, index) => (
        <div key={index} className="ml-4 sm:ml-8 border-l-2 border-gray-100 pl-4 sm:pl-6 mb-4">
          <div className="flex items-start space-x-3">
            <img
              src={response.user.avatar}
              alt={response.user.name}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                <span className="font-medium text-gray-900">{response.user.name}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${response.user.levelColor}`}>
                    {response.user.level}
                  </span>
                  <span className="text-sm text-gray-500">{response.timeAgo}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{response.text}</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                  <Heart className="w-3 h-3" />
                  <span className="text-xs">{response.likes}</span>
                </button>
                <button className="text-xs text-gray-600 hover:text-blue-500">Reply</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Reply Input */}
      <div className="ml-4 sm:ml-8 flex items-start space-x-3">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/489c0bbf993f7c468db3540d2ff08b89697c6fde?width=64"
          alt="Your avatar"
          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
        />
        <div className="flex-1">
          <textarea
            placeholder="Write your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleReplySubmit}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscussionThread
