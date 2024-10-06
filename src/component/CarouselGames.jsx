import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';


// Define the style for the images in the carousel
const imageStyle = {
    width: '447px',
    height: '664px',
    borderRadius: '20px',
    border: '1px solid #FFFFFF33',
};

function CarouselGames() {
    return (
        <div className="relative flex h-full bg-black">
            <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
                <Splide
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: {
                            pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                            rewind: true, // Rewind to start when the end is reached
                            speed: 1 // Scrolling speed
                        },
                        arrows: false, // Hide navigation arrows
                        pagination: false, // Hide pagination dots
                        fixedWidth: '445px', // Fixed width for each slide
                        gap: '12px', // Gap between slides
                    }}
                    extensions={{ AutoScroll }} // Use the AutoScroll extension
                >
                    <SplideSlide>
                        <img src={image1} alt="Poster Brooklyn" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={image2} alt="Poster Macao" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={image1} alt="Poster Navada" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={image1} alt="Poster Brooklyn" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={image1} alt="Poster Macao" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={image1} alt="Poster Navada" style={imageStyle} />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default CarouselGames;