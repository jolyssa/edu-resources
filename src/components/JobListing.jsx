import { useState } from 'react'
import { SiLevelsdotfyi } from "react-icons/si"
import { Link } from 'react-router-dom'

const JobListing = ({ content }) => {

    const [showFullDescription, setShowFullDescription] = useState(false)

    let description = content.description

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...'
    }


    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{content.type}</div>
                    <h3 className="text-xl font-bold">{content.title}</h3>
                </div>

                <div className="mb-5">
                    {description}
                </div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-red-500 mb-5 hover:text-red-400 text-xs">{showFullDescription ? 'Less' : 'More'}</button>

                <h3 className="text-red-500 mb-2">Made By: {content.author}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-red-700 mb-3">
                        < SiLevelsdotfyi className='inline text-lg mb-1 mr-1' />
                        {content.level}
                    </div>
                    <Link
                        to={`/content/${content.id}`}
                        className="h-[36px] bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobListing
