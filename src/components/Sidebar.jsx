import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ChevronRight } from 'lucide-react'

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
  activePage = 'dashboard'
}) => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const navigationItems = [
    {
      id: 'dashboard',
      icon: '/AI_Tutor_New_UI/Icons/dashboard.svg',
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      id: 'courses',
      icon: '/AI_Tutor_New_UI/Icons/my_courses.svg',
      label: 'My Courses',
      path: '/courses'
    },
    {
      id: 'discussions',
      icon: '/AI_Tutor_New_UI/Icons/discussion.svg',
      label: 'Discussion ',
      path: '/discussions'
    },
    {
      id: 'analytics',
      icon: '/AI_Tutor_New_UI/Icons/analytics.svg',
      label: 'Analytics',
      path: '/analytics'
    },
    {
      id: 'settings',
      icon: '/AI_Tutor_New_UI/Icons/settings.svg',
      label: 'Settings',
      path: '/settings'
    },
    {
      id: 'watched',
      icon: '/AI_Tutor_New_UI/Icons/watched_vids.svg',
      label: 'Watched Videos',
      path: '/watchedvideos'
    }
  ]

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
         fixed lg:fixed top-16 left-0 z-50 bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-80'}
        w-80 h-[calc(100vh-4rem)]
      `}>
        {/* Desktop Sidebar Toggle Button */}
        <button
          className={`hidden lg:block absolute -right-5 top-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-10 ${
            sidebarCollapsed ? 'transform' : ''
          }`}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <ChevronRight className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
            sidebarCollapsed ? 'rotate-180' : ''
          }`} />
        </button>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = activePage === item.id
              return (
                <div
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`cursor-pointer flex items-center px-3 py-3 rounded-xl group relative ${
                    sidebarCollapsed ? 'justify-center' : ''
                  } ${isActive ? 'bg-teal-50 text-teal-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate(item.path) }}
                >
                  <img src={item.icon} className="w-5 h-5 flex-shrink-0" alt="" />
                  {!sidebarCollapsed && (
                    <span className={`ml-3 ${isActive ? 'font-medium' : ''}`}>{item.label}</span>
                  )}
                  {sidebarCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </nav>

        {/* User Profile */}
        {!sidebarCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8981782804be8e77a0fc1bfd7e55f8c016e96995?width=64"
                  alt="Eliza Chris"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3 flex-1">
                  <div className="text-sm font-medium text-gray-900">Eliza Chris</div>
                  <div className="text-xs text-gray-500">elizachris@gmail.com</div>
                </div>
                <button onClick={handleLogout} className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed User Profile */}
        {sidebarCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8981782804be8e77a0fc1bfd7e55f8c016e96995?width=64"
                alt="Eliza Chris"
                className="w-10 h-10 rounded-full border-2 border-purple-200"
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Sidebar
