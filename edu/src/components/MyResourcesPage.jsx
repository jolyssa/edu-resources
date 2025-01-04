import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const MyResourcesPage = () => {
    const [resources, setResources] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        const fetchMyResources = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/resources/user/${user._id}`, {
                    credentials: 'include'
                })
                if (!response.ok) {
                    throw new Error('Failed to fetch resources')
                }
                const data = await response.json()
                setResources(data)
            } catch (err) {
                setError('Failed to load resources')
                console.error('Error:', err)
            } finally {
                setLoading(false)
            }
        }

        if (user) {
            fetchMyResources()
        }
    }, [user])

    if (loading) return <div className="text-center mt-8">Loading...</div>
    if (error) return <div className="text-center mt-8 text-red-500">{error}</div>
    if (!user) return <div className="text-center mt-8">Please sign in to view your resources</div>

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Resources</h1>
            
            {resources.length === 0 ? (
                <div className="text-center">
                    <p className="mb-4">You haven't added any resources yet.</p>
                    <Link 
                        to="/add-resources" 
                        className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Add Your First Resource
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                        <div 
                            key={resource._id} 
                            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <div className="flex justify-between items-center">
                                    <Link 
                                        to={`/resource/${resource._id}`}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        View Details
                                    </Link>
                                    <Link 
                                        to={`/edit-resource/${resource._id}`}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyResourcesPage