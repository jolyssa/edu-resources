import { Link } from 'react-router-dom'
import Card from './Card'

const HomeCards = () => {
    return (

        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

                    <Card bg='bg-zinc-200'>
                        <h2 className="text-2xl font-bold">For Learners</h2>
                        <p className="mt-2 mb-4">
                            Find the perfect coding resources to build your skills and shape your future
                        </p>
                        <Link
                            to="/resources"
                            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                        >
                            Browse Resources
                        </Link>
                    </Card>

                    <Card bg='bg-zinc-100'>
                        <h2 className="text-2xl font-bold">For Educators</h2>
                        <p className="mt-2 mb-4">
                            Share your educational resources and help learners discover valuable tools for their growth
                        </p>
                        <Link
                            to="/add-resources"
                            className="inline-block  bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
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
