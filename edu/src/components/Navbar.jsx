import { NavLink } from 'react-router-dom'
import UserNav from './UserNav'
import logo from '../assets/images/edu-resources.png'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

    const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 transition duration-300 hover:text-white rounded-md px-3 py-2'

    const { user } = useAuth()

    return (
        <>
            <nav className="bg-red-500 border-b border-red-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-around">
                        {/* Logo section */}
                        <div className="flex items-center">
                            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                                <img
                                    className="h-16 w-auto"
                                    src={logo}
                                    alt="Logo for Edu Resources"
                                />
                                <span className="hidden md:block text-white text-3xl font-bold italic ml-4 uppercase">
                                    Edu-Resources
                                </span>
                            </NavLink>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to="/"
                                className={linkClass}>Home
                            </NavLink>
                            <NavLink
                                to="/resources"
                                className={linkClass}>Resources
                            </NavLink>
                            <NavLink
                                to={user ? "/add-resources" : "/login"}
                                className={linkClass}
                            >
                                Add Resources
                            </NavLink>
                        </div>

                        {/* Auth Section */}
                        <div className="flex items-center">
                            {user ? (
                                <UserNav />
                            ) : (
                                <NavLink to="/login" className="text-white hover:bg-red-600 px-4 py-2 rounded-md"
                                >
                                    Sign In
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
