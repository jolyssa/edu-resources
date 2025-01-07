import { useParams, useLoaderData, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { SiLevelsdotfyi } from "react-icons/si"
import { BiSolidCategoryAlt } from "react-icons/bi"
import { MdModeEdit } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai" 
import { HiOutlineTemplate  } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from '../context/AuthContext'

const VITE_API_URL = import.meta.env.VITE_API_URL

// ! ********************************************* !
// ! ******* DELETE RESOURCE *******
// ! ********************************************* !
const ResourcePage = ({ deleteResource }) => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const { id } = useParams()
    const resource = useLoaderData()
    const isOwner = user && resource.user && user._id === resource.user._id




    const onDeleteClick = async (resourceId) => {


        const confirm = window.confirm('Are you sure you want to delete this resource?')

        if (!confirm) return

        try {
            await deleteResource(resourceId)
            toast.success('Resource deleted successfully!')
            navigate('/resources')
        } catch (error) {
            toast.error('Failed to delete resource')
            console.error('Error deleting resource:', error)
        }
    }


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white border-b">
                <div className="container mx-auto py-4 px-6">
                    <Link to="/resources">
                        <button className="btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center">
                            <FaArrowLeft className="mr-2" /> Back to Resources
                        </button>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto py-8 px-6">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Resource Header */}
                    <div className="relative border-b">
                        <div className="p-8">
                            {/* Management Controls */}
                            {isOwner && (
                                <div className="absolute top-8 right-8 flex items-center gap-4">
                                    <Link to={`/edit-resource/${resource._id}`}
                                        className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
                                        <MdModeEdit className="text-2xl text-gray-600 hover:text-amber-500" />
                                    </Link>
                                    <button 
                                        onClick={() => onDeleteClick(resource._id)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
                                        <AiFillDelete className="text-2xl text-gray-600 hover:text-red-500" />
                                    </button>
                                </div>
                            )}

                            {/* Title and Type */}
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                    <HiOutlineTemplate className="inline mr-1"/>
                                        {resource.type}
                                    </span>
                                    <div className="flex items-center text-orange-700 text-sm px-3 py-1 bg-orange-100 rounded-full">
                                        <SiLevelsdotfyi className="mr-1" />
                                        {resource.level}
                                    </div>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                    {resource.title}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-3 gap-6 p-8">
                        {/* Main Content Column */}
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Description
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {resource.description}
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Made By
                                </h3>
                                <p className="text-gray-600">{resource.createdBy}</p>
                            </div>
                        </div>

                        {/* Sidebar Information */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                                Resource Details
                            </h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center text-gray-900 mb-2">
                                        <h4 className="font-medium">Category</h4>
                                    </div>
                                    <p className="text-gray-600">{resource.info.category}</p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Link</h4>
                                    <Link 
                                        to={resource.info.link} 
                                        target="_blank" 
                                        className="text-red-500 hover:text-red-600 break-words transition duration-200"
                                    >
                                        {resource.info.link}
                                    </Link>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Published</h4>
                                    <span className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-md text-sm font-medium">
                                        {resource.info.published}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

const resourceLoader = async ({ params }) => {
    try {
        const res = await fetch(`${VITE_API_URL}/resources/${params.id}`, {
            credentials: 'include'
        }) // Auth cookies
        if (!res.ok) {
            throw new Error('Failed to fetch resource')
        }
        const data = await res.json()
        console.log("Loaded resource data:", data) // Add this to debug
        return data
    } catch (error) {
        console.error('Error loading resource:', error)
        throw error
    }
}


export { ResourcePage as default, resourceLoader }