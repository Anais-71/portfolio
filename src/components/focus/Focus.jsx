import { useState, useEffect } from 'react'
import './focus.css'

const Focus = ({ show, handleClose, projectsData, selectedCardIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedCardIndex)

  useEffect(() => {
    setCurrentIndex(selectedCardIndex)
  }, [selectedCardIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1,
    )
  }

  const project = projectsData[currentIndex] || {}

  if (!project.focusImg) {
    console.error('focusImg is missing for project at index', currentIndex)
  }

  return (
    <div className={`focus ${show ? 'focus--show' : ''}`}>
      <div className="focus__overlay" onClick={handleClose}></div>

      <div className="modal">
        <div className="modal__header">
          <h3 className="modal__header--title">{project.title}</h3>
          <button className="modal__header--close" onClick={handleClose}>
            X
          </button>
        </div>

        <div className="modal__content">
          <div className="modal__content--img">
            {project.focusImg ? (
              <img src={project.focusImg} alt={project.title} />
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div className="modal__content--details">
            {Array.isArray(project.resume) ? (
              project.resume.map((line, index) => (
                <p key={index} className="modal__content--details--txt">
                  {line}
                </p>
              ))
            ) : (
              <p className="modal__content--details--txt">{project.resume}</p>
            )}
            <div className="modal__content--details--button">
              {project.link && (
                <a
                  href={project.link.url}
                  className="focus__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link.label}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="focus__controls">
          <button className="focus__controls--prev" onClick={handlePrev}>
            ←
          </button>
          <button className="focus__controls--next" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Focus
