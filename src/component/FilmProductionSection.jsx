import flim from "../assets/flim.jpeg"


const FilmProductionSection = () => {
  return (
    <div className="container mx-auto p-8 md:p-10 lg:p-10 xl:p-10 max-w-7xl mt-10">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center h-full w-full gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/3 p-4 md:p-6 lg:p-8 xl:p-12 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#e51182] to-[#9c0c58] text-transparent bg-clip-text font-bold tracking-wide">
            Film Production
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            At Morning Star Studio, At Flym Production, we are passionate storytellers committed to creating exceptional films that captivate audiences. From concept development to post-production, our skilled team works collaboratively to bring your vision to life with creativity and precision. We specialize in a wide range of genres, ensuring each project reflects our clients&apos; unique style and message. Let us help you turn your ideas into cinematic masterpieces that leave a lasting impact!                 </p>

          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#e51182] to-[#9c0c58] text-white rounded-full shadow-md hover:bg-[#9c0c58] transition-colors duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
          <img
            src={flim}
            alt="Wedding Dance"
            className="object-cover rounded-lg shadow-lg h-auto w-full"
          />
        </div>


      </div>
    </div>
  );
}

export default FilmProductionSection