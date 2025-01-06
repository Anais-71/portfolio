import './card.css'

const Card = ({ image, title, text, link, onImageClick }) => {
  return (
    <div className="cards">
      <img
        src={image}
        alt={title}
        className="cards__img"
        onClick={onImageClick}
        style={{ cursor: 'pointer' }}
      />
      <div className="cards__content">
        <div className="cards__content--title">{title}</div>
        <div className="cards__content--txt">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {link && (
          <a
            href={link.url}
            className="cards__content--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
