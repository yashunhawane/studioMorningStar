import about from "../assets/about.png"

const Intro = () => {
    return (
        <div className="container mx-auto p-8 md:p-10 lg:p-10 xl:p-10 max-w-7xl mt-10">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center h-full w-full gap-8">
                {/* Text Section */}
                <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/3 p-4 md:p-6 lg:p-8 xl:p-12 space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#e51182] to-[#9c0c58] text-transparent bg-clip-text font-bold tracking-wide">
                        About Me
                    </h2>

                    <p className="text-lg text-neutral-600 leading-relaxed">
                        I am Prashant Jhadav, a choreographer and director with over 12 years
                        in Bollywood. As an assistant to Ganesh Acharya for 10 years, I excel
                        in various dance forms, including Bollywood, Hip-Hop, and Folk,
                        allowing me to convey deep emotions through performance.
                    </p>

                    <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#e51182] to-[#9c0c58] text-white rounded-full shadow-md hover:bg-[#9c0c58] transition-colors duration-300 ease-in-out">
                        Know More
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                    <img
                    
                        src={about}
                        alt="Wedding Dance"
                        className="object-cover rounded-lg shadow-lg h-auto w-full border border-[#e51182]  shadow-[#9c0c58]"
                    />
                </div>


            </div>
        </div>
    );
}

export default Intro