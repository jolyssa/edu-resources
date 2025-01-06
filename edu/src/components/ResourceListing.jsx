import { useState } from 'react'
import { SiLevelsdotfyi } from "react-icons/si"
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ResourceListing = ({ resources }) => {

    console.log("Resource data:", resources); // Add this line
    console.log("User data from resource:", resources.user); // Add this lines

    const [showFullDescription, setShowFullDescription] = useState(false)

    let description = resources.description

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...'
    }

    const { user } = useAuth()

    return (

        <div className="bg-white rounded-xl shadow-md relative text-black hover:shadow-2xl transition duration-500" data-aos="fade" data-aos-duration="700" data-aos-once="true">
            <div className="absolute top-4 right-4 flex items-center">
                {resources.user && (
                    <div className="relative">
                        <img
                            src={resources.user.avatar}
                            alt={`${resources.user.displayName}'s Profile`}
                            className="w-11 h-11 rounded-full border-2 border-white shadow-md"
                        />
                        <div className="absolute -bottom-6 right-0 bg-white px-2 py-1 rounded-md shadow-sm text-xs">
                            {resources.user.displayName}
                        </div>
                    </div>
                )}
            </div>
            
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl font-bold">{resources.title}</h3>
                    <div className="text-gray-600 my-2">{resources.type}</div>
                </div>

                <div className="mb-5">
                    {description}
                </div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-red-500 mb-5 hover:text-red-400 transition duration-200 text-xs">{showFullDescription ? 'See Less' : 'See More'}</button>

                <h3 className="text-red-500 mb-2 font-bold">Made by <span className='font-normal'>{resources.createdBy}</span></h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-red-700 mb-3">
                        < SiLevelsdotfyi className='inline text-lg mb-1 mr-1' />
                        {resources.level}
                    </div>
                    <Link
                        to={`/resource/${resources._id}`}
                        className="h-[36px] bg-red-500 hover:bg-red-400 transition duration-300 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResourceListing
