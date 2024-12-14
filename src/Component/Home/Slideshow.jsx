
import React, { useState, useEffect } from 'react';

const slides = [
  { url: 'https://demo2.posthemes.com/pos_junno/modules/posslideshows/images/sample-2.jpg', alt: 'Slide 1' },
  { url: 'https://demo2.posthemes.com/pos_junno/modules/posslideshows/images/sample-1.jpg', alt: 'Slide 2' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  // useEffect hook for automatic slide change
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="w-full overflow-hidden h-auto mx-auto ">
      {/* Container with overflow-hidden to prevent horizontal scrolling */}
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? 'block' : 'hidden'
            } transition-opacity duration-500`}
          >
            <img src={slide.url} alt={slide.alt} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;



