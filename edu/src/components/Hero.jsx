const Hero = ({ title = 'Your Coding Education Lives Here', subtitle = 'Explore the best resources, tutorials, and tools to level up your skills. Add a resource to share the wealth.'}) => {
    return (
        <>
            {/* <!-- Hero --> */}
            <section className="bg-red-500 py-20 mb-4  lg:px-32 xl:px-96">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl italic"
                        >
                            { title }
                        </h1>
                        <p className="mt-10 mb-4 text-xl text-white px-16">
                            { subtitle }
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
