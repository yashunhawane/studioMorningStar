import wedind from "../assets/weding.jpeg"

const WeddingSection = () => {
    return (
        <div className="container mx-auto p-8 md:p-10 lg:p-10 xl:p-10 max-w-7xl mt-10">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center h-full w-full gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                    <img
                        src={wedind}
                        alt="Wedding Dance"
                        className="object-cover rounded-lg shadow-lg h-auto w-full"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/3 p-4 md:p-6 lg:p-8 xl:p-12 space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#e51182] to-[#9c0c58] text-transparent bg-clip-text font-bold tracking-wide">
                        Wedding Dance Choreography
                    </h2>

                    <p className="text-lg text-neutral-600 leading-relaxed">
                        At Morning Star Studio, we bring your dream wedding dance to life with personalized choreography that perfectly matches your style and love story. Whether you’re looking for a romantic first dance, a fun bridal party routine, or something unique, our expert choreographers will guide you every step of the way. Let us help make your special day unforgettable with a dance to remember!
                    </p>

                    <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#e51182] to-[#9c0c58] text-white rounded-full shadow-md hover:bg-[#9c0c58] transition-colors duration-300 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};
export default WeddingSection

