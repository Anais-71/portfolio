import React, { useState, useEffect } from 'react'
import './carousel.css'

const Carousel = ({ items, id, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    if (index < 0) index = items.length - 1
    if (index >= items.length) index = 0
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      goToSlide(currentIndex + 1)
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, autoPlay, interval, items.length])

  return (
    <div id={id} className="carousel">
      {/* Carousel Items */}
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel__item"
            aria-hidden={currentIndex !== index}
          >
            <img
              src={item.src}
              className="d-block w-100"
              alt={item.alt || 'Slide'}
            />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="carousel__indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        className="carousel__control--prev"
        onClick={() => goToSlide(currentIndex - 1)}
      >
        &#10094; {/* Symbole pour "Previous" */}
      </button>
      <button
        className="carousel__control--next"
        onClick={() => goToSlide(currentIndex + 1)}
      >
        &#10095; {/* Symbole pour "Next" */}
      </button>
    </div>
  )
}

export default Carousel
