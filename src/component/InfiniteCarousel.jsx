import { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

// Sample images array
const images = [image1, image2, image3, image4,image1, image2, image3, image4]; // Image list

const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the start
    }, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
    <div
      className="flex"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      {/* Render images and repeat them for continuous effect */}
      {[...images, ...images].map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-1/6 h-auto object-cover p-2" // added padding
          style={{
            flexShrink: 0,
            width: '16.67%',
            padding: '10px', // added padding
          }}
        />
      ))}
    </div>
  </div>
  );
};

export default InfiniteCarousel;
