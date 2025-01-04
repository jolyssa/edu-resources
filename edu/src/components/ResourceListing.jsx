import { useState } from 'react'
import { SiLevelsdotfyi } from "react-icons/si"
import { Link } from 'react-router-dom'

const ResourceListing = ({ resources }) => {

    const [showFullDescription, setShowFullDescription] = useState(false)

    let description = resources.description

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...'
    }


    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-500 relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{resources.type}</div>
                    <h3 className="text-xl font-bold">{resources.title}</h3>
                </div>

                <div className="mb-5">
                    {description}
                </div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-red-500 mb-5 hover:text-red-400 transition duration-200 text-xs">{showFullDescription ? 'See Less' : 'See More'}</button>

                <h3 className="text-red-500 mb-2 font-bold">Created By: <span className='font-normal'>{resources.createdBy}</span></h3>

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
