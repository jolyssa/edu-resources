import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import ResourceListing from './ResourceListing'

const ResourceListings = ({ isHome = false }) => {
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)

    // fetching data
    useEffect(() => {
        const fetchContent = async () => {
            const apiUrl = isHome ? '/api/content?_limit=3' : '/api/content'
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setContent(data)
            } catch (err) {
                console.error('Error fetching data', err)
            } finally {
                setLoading(false)
            }
        }

        fetchContent()
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
                        {content.map((content) => (
                            <ResourceListing key={content.id} content={content} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ResourceListings
