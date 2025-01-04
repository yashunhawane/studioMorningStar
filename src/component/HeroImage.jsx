import { useState, useEffect } from "react";

const HeroImage = () => {
    const images = [
        "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8MHwwfHx8MA%3D%3D",
        'https://images.unsplash.com/photo-1541445976433-f466f228a409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50c3xlbnwwfDB8MHx8fDA%3D',
        "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8MHwwfHx8MA%3D%3D",
        'https://images.unsplash.com/photo-1541445976433-f466f228a409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50c3xlbnwwfDB8MHx8fDA%3D',
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isImageChanging, setIsImageChanging] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageChanging(true);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setIsImageChanging(false);
            }, 500); // Wait for fade out animation duration
        }, 5000); // Image change interval (5 seconds)

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Image background with transition */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${isImageChanging ? "opacity-0" : "opacity-100"
                    }`}
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                }}
            ></div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content inside the hero section */}
            {/* <div className="relative z-10 flex flex-col justify-center items-center text-white text-center h-full px-4 md:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg sm:text-xl md:text-2xl">Discover the best products and services tailored for you.</p>
                <button className="mt-6 px-8 py-3 bg-blue-600 text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                    Get Started
                </button>
            </div> */}
        </div>
    );
};

export default HeroImage;