import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Carousel.css";

const Carousel = (props) => {
  const { children, duration, data } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [Length, setLength] = useState(children && children.length);
  const [paused, setPaused] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);
  const [buttonVisiblity, setButtonVisiblity] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = (currentIndex - 1 + Length) % Length;
    } else if (newIndex > Length - 1) {
      newIndex = (currentIndex + 1) % Length;
    }

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setLength(children && children.length);
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(currentIndex + 1);
        console.log(paused)
      }
      setButtonVisiblity(true)
    }, duration);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [children, currentIndex]);

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

    if (diff > 10) {
      next();
    }

    if (diff < -10) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div
        onMouseEnter={() => {
          setPaused(true);
          setButtonVisiblity(false)
        }}
        onMouseLeave={() => {
          setPaused(false);
        }}
        className="carousel-wrapper"
      >
      
        <button
          onClick={prev}
          className={buttonVisiblity ? "prev hide" : "prev"}
        >
          <FaChevronLeft />
        </button>
        <div
          className="carousel-content-wrapper space-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-1`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {children}
          </div>
          <div className="dots">
            {data.map((carData) => (
              <span
                key={carData.id}
                className={
                  data[currentIndex].id === carData.id ? "dot active" : "dot"
                }
                onClick={() => setCurrentIndex(data.indexOf(carData))}
              >

              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={next}
          className={buttonVisiblity ? "next hide" : "next"}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
