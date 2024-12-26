import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import ResourceListing from './ResourceListing'

const ResourceListings = ({ isHome = false }) => {
    const [resources, setResource] = useState([])
    const [loading, setLoading] = useState(true)

    // fetching data
    useEffect(() => {
        const fetchResource = async () => {
            const apiUrl = isHome ? '/api/resources?_limit=3' : '/api/resources'
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setResource(data)
            } catch (err) {
                console.error('Error fetching data', err)
            } finally {
                setLoading(false)
            }
        }

        fetchResource()
    }, [])


    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
                    {isHome ? 'Recently Posted Resources' : 'Browse Resources'}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resources.map((resources) => (
                            <ResourceListing key={resources.id} resources={resources} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ResourceListings
