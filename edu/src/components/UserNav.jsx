import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, LogOut, Book, Settings, ChevronDown } from 'lucide-react'

const UserNav = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-white hover:bg-red-600 px-3 py-2 rounded-md"
        >
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt={user.displayName} 
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <User className="w-8 h-8" />
          )}
          <span>{user.displayName}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
  
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl z-50">
            <Link
              to="/my-resources"
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Book className="w-4 h-4 mr-2" />
              My Resources
            </Link>
            
            <Link
              to="/profile"
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4 mr-2" />
              Profile Settings
            </Link>
            
            <button
              onClick={() => {
                onLogout()
                setIsOpen(false)
              }}
              className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    )
  }
  
  export default UserNav