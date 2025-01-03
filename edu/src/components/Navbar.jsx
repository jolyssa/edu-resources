import { NavLink } from 'react-router-dom'
import UserNav from './UserNav'
import logo from '../assets/images/edu-resources.png'

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

const Navbar = ({ user }) => {

    const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 transition duration-300 hover:text-white rounded-md px-3 py-2'

    const handleGoogleSignIn = () => {
        window.location.href = `${VITE_BASE_URL}auth/google`
    }

    return (
        <>
            <nav className="bg-red-500 border-b border-red-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            {/* <!-- Logo --> */}
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
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink
                                        to="/"
                                        className={linkClass}>Home
                                    </NavLink>
                                    <NavLink
                                        to="/resources"
                                        className={linkClass}>Resources
                                    </NavLink>
                                    <NavLink
                                        to="/add-resources"
                                        className={linkClass}>Add Resources
                                    </NavLink>
                                    {user ? (
                                        <UserNav />
                                    ) : (
                                        <button
                                            onClick={handleGoogleSignIn}
                                            className="text-white hover:bg-red-600 px-4 py-2 rounded-md"
                                        >
                                            Sign In
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
