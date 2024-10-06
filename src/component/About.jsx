import InfiniteCarousel from "./InfiniteCarousel";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-15 px-4">


      {/* Notable Projects Section */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-5 bg-gradient-to-r from-[#e51182] to-[#d6b2c5] text-transparent bg-clip-text">
        Notable Projects
      </h2>

      <InfiniteCarousel />


      {/* Career Highlights Section */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-5 bg-gradient-to-r from-[#e51182] to-[#d6b2c5] text-transparent bg-clip-text">
        Career Highlights
      </h2>
      <InfiniteCarousel />

      {/* Upcoming Projects Section */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-5 bg-gradient-to-r from-[#e51182] to-[#d6b2c5] text-transparent bg-clip-text">
        Upcoming Projects
      </h2>
      <InfiniteCarousel />

    </div>
  );

}

export default About