import { useParams, useLoaderData, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { SiLevelsdotfyi } from "react-icons/si"
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const VITE_BASE_URL = import.meta.env.VITE_API_URL

// ! ********************************************* !
// ! ******* DELETE RESOURCE *******
// ! ********************************************* !
const ResourcePage = ({ deleteResource }) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const resource = useLoaderData()

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
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/resources"
                        className="text-red-500 hover:text-red-400 flex items-center"
                    >
                        <FaArrowLeft className="mr-2" /> Back to All Resources
                    </Link>
                </div>
            </section>

            <section>
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="relative">
                                {/* Icon Container */}

                                <div className="absolute top-4 right-6 text-center">
                                    <p className="text-md text-gray-400 block mb-1">Manage</p>
                                    <div className="flex space-x-2">

                                        <Link
                                            to={`/edit-resource/${resource._id}`}>
                                            <MdModeEdit
                                                className="text-gray-600 hover:text-amber-500 transition duration-200 text-2xl"
                                                onClick={() => console.log("Edit clicked")}
                                            />
                                        </Link>
                                        <button onClick={() => onDeleteClick(resource._id)}
                                        className=""
                                    >
                                        <AiFillDelete
                                            className="text-gray-600 hover:text-red-500 transition duration-200 text-2xl"
                                            onClick={() => console.log("Delete clicked")}
                                        />
                                    </button>
                                        
                                    </div>
                                </div>
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                                >
                                    <div className="text-gray-500 mb-4">{resource.type}</div>
                                    <h1 className="text-3xl font-bold mb-4">
                                        {resource.title}
                                    </h1>
                                    <div
                                        className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                    >
                                        <SiLevelsdotfyi className="text-orange-700 mr-2 mt-1" />
                                        <p className="text-orange-700">{resource.level}</p>
                                    </div>



                                    <h3 className="text-red-800 text-lg font-bold mt-10 mb-4">
                                        Description
                                    </h3>

                                    <p className="mb-4">
                                        {resource.description}
                                    </p>

                                    <h3 className="text-red-800 text-lg font-bold mb-2">Created By</h3>

                                    <p className="mb-4">{resource.createdBy}</p>
                                </div>
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            {/* <!-- Resource Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md w-fit">
                                <h3 className="text-2xl font-bold mb-6 italic">Additional Info</h3>

                                <h3 className="text-xl font-bold">Category:</h3>
                                <p className="mt-2 mb-4">
                                    {resource.info.category}
                                </p>

                                <h3 className="text-xl font-bold">Link:</h3>
                                <Link to={resource.info.link} target="_blank" className="mt-2 mb-4 text-indigo-950"> {resource.info.link}
                                </Link>



                                <hr className="my-4" />

                                <h3 className="text-xl font-bold">Date Published:</h3>
                                <p className="my-2 bg-red-50 p-2 font-bold rounded-md">
                                    {resource.info.published}
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

const resourceLoader = async ({ params }) => {
    try {
        const res = await fetch(`${VITE_BASE_URL}/resources/${params.id}`)
        if (!res.ok) {
            throw new Error('Failed to fetch resource')
        }
        return await res.json()
    } catch (error) {
        console.error('Error loading resource:', error)
        throw error
    }
}


export { ResourcePage as default, resourceLoader }