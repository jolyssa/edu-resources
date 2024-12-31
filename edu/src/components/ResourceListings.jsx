import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import ResourceListing from './ResourceListing'

const VITE_BASE_URL = import.meta.env.VITE_API_URL

const ResourceListings = ({ isHome = false }) => {
    const [resources, setResources] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //? fetching data
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const apiUrl = isHome 
                ? `${VITE_BASE_URL}/resources?limit=3`
                : `${VITE_BASE_URL}/resources`

                console.log('Fetching from:', apiUrl)
                const res = await fetch(apiUrl,  {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                })
                
                if (!res.ok) {
                    throw new Error(`Failed to fetch resources. HTTP error! status: ${res.status}`)
                }
                
                const data = await res.json()
                setResources(data)
            } catch (err) {
                console.error('Error fetching data:', err)
                setError(`Error fetching resources: ${err.message}`)

            } finally {
                setLoading(false)
            }
        }

        fetchResources()
    }, [isHome])

    if (error) return <div className="text-center text-red-500">{error}</div>


    return (
        <section className="bg-red-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
                    {isHome ? 'Recently Posted Resources' : 'Browse Resources'}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resources.map((resources) => (
                            <ResourceListing key={resources._id} resources={resources} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ResourceListings
