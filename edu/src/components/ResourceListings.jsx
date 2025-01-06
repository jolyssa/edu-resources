import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import ResourceListing from './ResourceListing'
import { ChevronLeft, ChevronRight } from 'lucide-react'

//? API URL
const VITE_BASE_URL = import.meta.env.VITE_API_URL

// const location = useLocation()
const ITEMS_PER_PAGE = 24

const ResourceListings = ({ isHome = false }) => {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filters, setFilters] = useState({
    type: '',
    level: '',
    category: ''
  })

  //? fetching data
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const apiUrl = isHome
          ? `${VITE_BASE_URL}/resources?limit=6`
          : `${VITE_BASE_URL}/resources?page=${currentPage}&limit=${ITEMS_PER_PAGE}`

        console.log('Fetching from:', apiUrl)
        const res = await fetch(apiUrl, {
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
        console.log('Fetched data:', data.resources)
        setResources(data.resources)
        setTotalPages(data.totalPages)

      } catch (err) {
        console.error('Error fetching data:', err)
        setError(`Error fetching resources: ${err.message}`)

      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [isHome, currentPage])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    window.scrollTo(0, 0)
  }

  if (error) return <div className="text-center text-red-500">{error}</div>

  //? Filtering based on type, level or category
  const typeOptions = ['Book', 'Repository', 'Video', 'Website', 'Bootcamp', 'Youtube Channel', 'Course', 'Community']
  const levelOptions = ['Beginner', 'Intermediate', 'Advanced', 'Everyone']
  const categoryOptions = ['Web Development', 'Mobile Development', 'Game Development', 'Data Science', 'Cloud Computing', 'DevOps', 'Cybersecurity', 'Artifical Intelligence', 'Data Structures and Algorithms', 'Machine Learning', 'Database Management', 'Agile and Scrum', 'Career Development', 'General Skills',
    'Business and Entrepreneurship',
    'Marketing', 'Product Management', 'Blockchain and Cryptocurrencies', 'Design',
    'Networking',]

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const filteredResources = resources.filter(resource => {
    return (!filters.type || resource.type === filters.type) &&
      (!filters.level || resource.level === filters.level) &&
      (!filters.category || resource.info.category === filters.category)
  })

  return (
    <>

      {/* Only show filters if not on home page */}
      {!isHome && (
        <div className="mx-28 mb-8  py-4 px-8 rounded-lg shadow  mt-8">
          <h2 className="text-xl font-bold mb-4 text-black">Filter Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div>
              <label className="block text-gray-700 mb-2 ">Type</label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full p-2 border-2 rounded bg-white text-black focus:outline-none focus:ring-0 focus:border-red-500"
              >
                <option value="">All Types</option>
                {typeOptions.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Level</label>
              <select
                name="level"
                value={filters.level}
                onChange={handleFilterChange}
                className="w-full p-2 border-2 rounded bg-white text-black focus:outline-none focus:ring-0 focus:border-red-500"
              >
                <option value="">All Levels</option>
                {levelOptions.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 border-2 rounded bg-white text-black focus:outline-none focus:ring-0 focus:border-red-500"
              >
                <option value="">All Categories</option>
                {categoryOptions.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3 ">
            <button
              onClick={() => setFilters({ type: '', level: '', category: '' })}
              className="px-4 py-2 text-gray-600 bg-white rounded-md hover:bg-gray-200 transition duration-200"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* Resource Listings here */}
      <section className="bg-red-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
            {isHome ? 'Recently Posted Resources' : 'Browse Resources'}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(!isHome ? filteredResources : resources).map((resource) => (
                  <ResourceListing key={resource._id} resources={resource} />
                ))}
              </div>

              {!isHome && totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>

                  <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default ResourceListings
