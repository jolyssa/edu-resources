import { Link } from 'react-router-dom'

const ViewAllResources = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/resources"
          className="block bg-red-800 text-white text-center py-4 px-6 rounded-xl hover:bg-red-700 transition duration-300"
        >View All Resources
        </Link>
      </section>
  )
}

export default ViewAllResources