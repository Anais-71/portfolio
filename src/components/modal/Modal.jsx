import './modal.css'

const Modal = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? 'modal--show' : ''}`}>
      <div className="modal__overlay" onClick={handleClose}></div>

      <div className="modal__content">
        <div className="modal__content--close" onClick={handleClose}>
          X
        </div>
        <div className="modal__content--txt">
          <p> Merci pour votre message !</p>
          <p>Je reviens vers vous au plus vite.</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
