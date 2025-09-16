import React from 'react'
import { Search, Bell, Menu, X } from 'lucide-react'

const Header = ({ sidebarOpen, setSidebarOpen, title = '', userName = 'Eliza Chris', userAvatar }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden p-2 rounded-lg bg-white border border-gray-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
          </button>
          <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e4a286c701fac47d2a67ae249051ba192e41e3c0?width=444"
              alt="UptoSkills Logo"
              className="h-10 w-auto fixed left-5 top-4 ml-0"
            />
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Try search programming courses ....."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src={userAvatar || "https://api.builder.io/api/v1/image/assets/TEMP/90078d83a9da0e490b62ca7a87c227e0089fff32?width=70"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-900 font-medium hidden sm:block">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
