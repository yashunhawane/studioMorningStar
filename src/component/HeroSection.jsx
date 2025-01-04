const HeroSection = () => {
    return (
        <div className="relative flex flex-col items-center mt-20 lg:mt-32 px-4 sm:px-8 z-10">
            {/* Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-center tracking-wide bg-gradient-to-r from-[#efb40d] to-[#f02a93] text-transparent bg-clip-text font-extrabold shadow-md drop-shadow-lg">
                THE MORNING STAR ENTERTENTMENT
            </h1>

            {/* Paragraph */}
            <p className="mt-8 sm:mt-10 text-lg sm:text-xl lg:text-2xl text-center text-white max-w-3xl sm:max-w-4xl px-6 lg:px-0 leading-relaxed">
                We transform ideas into visual masterpieces. With a passion for storytelling and a dedication to excellence, we bring your vision to life through the power of film and video production.
            </p>

            {/* Optional Call-to-Action Button */}
            {/* <div className="mt-12">
                <button className="px-8 py-4 bg-gradient-to-r from-[#f02a93] to-[#efb40d] text-white text-lg rounded-full shadow-xl hover:bg-[#f02a93] hover:scale-105 transition-all duration-300">
                    Learn More
                </button>
            </div> */}
        </div>
    );
};

export default HeroSection;
