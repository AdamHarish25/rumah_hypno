import { Children, useEffect } from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = (currentIndex - 1 + data.length) % data.length;
    } else if (newIndex >= data.length - 1) {
      newIndex = (currentIndex + 1) % data.length;
    }

    setCurrentIndex(newIndex);
  };

  const showTheButton = () => {
    setShowButton(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(currentIndex + 1);
      }
      setShowButton(false);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const next = () => {
    updateIndex(currentIndex + 1);
  };

  const prev = () => {
    updateIndex(currentIndex - 1);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        className="slider-container"
      >
        {data.map((carData) => (
          <div
            key={carData.id}
            className={
              data[currentIndex].id === carData.id ? "fade" : "slide fade"
            }
          >
            <img
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              src={carData.src}
              alt={carData.alt}
              className="photo"
            />
          </div>
        ))}

        <button
          onMouseEnter={showTheButton}
          onClick={prev}
          className={showButton ? "prev" : "prev hide"}
        >
          <FaChevronLeft />
        </button>

        <button
          onMouseEnter={showTheButton}
          onClick={next}
          className={showButton ? "next" : "next hide"}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="dots">
        {data.map((carData, index) => (
          <span
            key={carData.id}
            className={
              data[currentIndex].id === carData.id ? "dot active" : "dot"
            }
            onClick={() => setCurrentIndex(data.indexOf(carData))}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
