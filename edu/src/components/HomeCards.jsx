import { Link } from 'react-router-dom'
import Card from './Card'

const HomeCards = () => {
    return (

        <section className="py-4 bg-red-50">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

                    <Card bg='bg-red-200'>
                        <h2 className="text-2xl font-bold">For Learners</h2>
                        <p className="mt-2 mb-4">
                            Find the perfect coding resources to build your skills and shape your future
                        </p>
                        <Link
                            to="/resources"
                            className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-400 transition duration-300"
                        >
                            Browse Resources
                        </Link>
                    </Card>

                    <Card bg='bg-red-100'>
                        <h2 className="text-2xl font-bold">For Educators</h2>
                        <p className="mt-2 mb-4">
                            Share your educational resources and help learners discover valuable tools for their growth
                        </p>
                        <Link
                            to="/add-resources"
                            className="inline-block  bg-red-400 text-white rounded-lg px-4 py-2 hover:bg-red-500 transition duration-300"
                        >
                            Add Resources
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default HomeCards
