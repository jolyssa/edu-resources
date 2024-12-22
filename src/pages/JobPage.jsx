import { useParams, useLoaderData, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { SiLevelsdotfyi } from "react-icons/si"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const JobPage = ({deleteJob}) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const content = useLoaderData()


    const onDeleteClick = (contentId) => {
        const confirm = window.confirm('Are you sure you want to delete this listing?')

        if(!confirm) return

        deleteJob(contentId)

        toast.success('Resource deleted successfully!')

        navigate('/content')
    }

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/content"
                        className="text-red-500 hover:text-red-400 flex items-center"
                    >
                        <FaArrowLeft className="mr-2"/> Back to All Content
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{content.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {content.title}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <SiLevelsdotfyi className="text-orange-700 mr-2 mt-1"/>
                                    <p className="text-orange-700">{content.level}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-red-800 text-lg font-bold mb-6">
                                    Content Description
                                </h3>

                                <p className="mb-4">
                                    {content.description}
                                </p>

                                <h3 className="text-red-800 text-lg font-bold mb-2">Created By</h3>

                                <p className="mb-4">{content.createdBy}</p>
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            {/* <!-- Resource Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-6 italic">Additional Resource Info</h3>

                                <h3 className="text-xl font-bold">Category:</h3>
                                <p className="mt-2 mb-4">
                                    {content.info.category}
                                </p>

                                <h3 className="text-xl font-bold">Link:</h3>
                                <Link to={content.info.link} target="_blank" className="mt-2 mb-4 text-indigo-950"> {content.info.link}
                                </Link>

                               

                                <hr className="my-4" />

                                <h3 className="text-xl">Date Published:</h3>
                                <p className="my-2 bg-indigo-100 p-2 font-bold rounded-md">
                                    {content.info.published}
                                </p>
                            </div>

                            {/* <!-- Manage --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-2xl font-bold italic mb-6">Manage Content</h3>
                                <Link
                                    to={`/edit-content/${content.id}`}
                                    className="bg-amber-400 hover:bg-amber-300 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Content
                                </Link>
                                <button onClick={() => onDeleteClick(content.id)}
                                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Content
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/content/${params.id}`)
    const data = await res.json()
    return data
}


export { JobPage as default, jobLoader }