import React from 'react'

const DiscussionTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-2 shadow-sm">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DiscussionTabs
