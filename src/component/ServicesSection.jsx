const ServicesSection = () => {
    return (
        <div id="services" className="py-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#efb40d] to-[#f02a93] text-transparent bg-clip-text">
                Our Services
            </h2>
            <div className="flex flex-wrap justify-center gap-12 px-6 lg:px-16">

                {/* Stage Show Card */}
                <div className="relative bg-cover bg-center p-6 rounded-xl shadow-lg text-center w-full sm:w-[300px] h-[400px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514845505178-849cebf1a91d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d')" }}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div> {/* Dark overlay */}
                    <h3 className="text-2xl font-semibold mb-4 text-white relative">Stage Show</h3>
                    <p className="text-lg text-white relative">We provide professional stage shows that engage and entertain your audience.</p>
                </div>

                {/* Live Performance Card */}
                <div className="relative bg-cover bg-center p-6 rounded-xl shadow-lg text-center w-full sm:w-[300px] h-[400px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514845505178-849cebf1a91d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d')" }}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div> {/* Dark overlay */}
                    <h3 className="text-2xl font-semibold mb-4 text-white relative">Live Performance</h3>
                    <p className="text-lg text-white relative">Experience live music, performances, and entertainment for all occasions.</p>
                </div>

                {/* Social Events Card */}
                <div className="relative bg-cover bg-center p-6 rounded-xl shadow-lg text-center w-full sm:w-[300px] h-[400px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514845505178-849cebf1a91d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d')" }}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div> {/* Dark overlay */}
                    <h3 className="text-2xl font-semibold mb-4 text-white relative">Social Events</h3>
                    <p className="text-lg text-white relative">From parties to meetups, we organize memorable social gatherings.</p>
                </div>

                {/* Wedding Events Card */}
                <div className="relative bg-cover bg-center p-6 rounded-xl shadow-lg text-center w-full sm:w-[300px] h-[400px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514845505178-849cebf1a91d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d')" }}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div> {/* Dark overlay */}
                    <h3 className="text-2xl font-semibold mb-4 text-white relative">Wedding Events</h3>
                    <p className="text-lg text-white relative">Creating unforgettable weddings with personalized details and flawless execution.</p>
                </div>

            </div>
        </div>
    );
};

export default ServicesSection;
