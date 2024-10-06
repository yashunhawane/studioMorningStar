import video from "../assets/video.mp4";
import video3 from "../assets/video3.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-5 lg:mt-15">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-center tracking-wide bg-gradient-to-r from-[#e51182] to-[#e282b5] text-transparent bg-clip-text">
                The Morning Star Production House
            </h1>

            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                We transform ideas into visual masterpieces. With a passion for storytelling and a dedication to excellence, we bring your vision to life through the power of film and video production.
            </p>

            <div className="flex mt-10 mr-4 ml-4 px-4 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-full md:w-1/3 lg:w-1/3 xl:w-1/3 border border-[#e51182] shadow-sm shadow-[#9c0c58] mx-2 my-4"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-full md:w-1/3 lg:w-1/3 xl:w-1/3 border border-[#e51182] shadow-sm shadow-[#9c0c58] mx-2 my-4"
                >
                    <source src={video3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;