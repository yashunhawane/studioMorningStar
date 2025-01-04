
const OurWork = () => {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl text-center tracking-wide bg-gradient-to-r from-[#efb40d] to-[#f02a93] text-transparent bg-clip-text mb-6">
                    Our Work
                </h2>
                <p className="text-lg text-center text-neutral-500 mb-10">
                    A glimpse of our amazing projects and events we’ve brought to life!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="relative group">
                        <img
                            src="/assets/image4.jpeg"
                            alt="Event 1"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
                            <p className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out">
                                Event 1
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img
                            src="/assets/image4.jpeg"
                            alt="Event 2"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
                            <p className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out">
                                Event 2
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img
                            src="/assets/image4.jpeg"
                            alt="Event 3"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
                            <p className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out">
                                Event 3
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img
                            src="/assets/image4.jpeg"
                            alt="Event 4"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
                            <p className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out">
                                Event 4
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img
                            src="/assets/image4.jpeg"
                            alt="Event 5"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
                            <p className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out">
                                Event 5
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img
                            src="/assets/image4.jpeg"
                            alt="Event 6"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
                            <p className="text-lg text-neutral-500 hover:text-[#e51182] transition duration-300 ease-in-out">
                                Event 6
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
