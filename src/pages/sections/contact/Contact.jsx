import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import Modal from '../../../components/modal/Modal'

import './contact.css'

import linkedin from '../../../assets/images/logos/linkedin.png'
import git from '../../../assets/images/logos/github.png'
import cv from '../../../assets/images/logos/CV.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    company: '',
    job: '',
    email: '',
    subject: '',
    message: '',
  })
  const [showModal, setShowModal] = useState(false) // État pour afficher ou cacher le modal

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_uw4lmkj',
        'template_sftuo0r',
        formData,
        'PTvpcZ0rZ3E8hGh-p',
      )
      .then(
        () => {
          // Affiche le modal et réinitialise le formulaire
          setShowModal(true)
          setFormData({
            lastName: '',
            firstName: '',
            company: '',
            job: '',
            email: '',
            subject: '',
            message: '',
          })
        },
        (error) => {
          alert('Une erreur est survenue, veuillez réessayer.')
          console.error(error)
        },
      )
  }

  const handleCloseModal = () => {
    setShowModal(false) // Ferme le modal
  }

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingLastName"
            placeholder="Nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            title="Ce champ est obligatoire, veuillez le remplir."
          />
          <label htmlFor="floatingLastName">Nom</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingFirstName"
            placeholder="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            title="Ce champ est obligatoire, veuillez le remplir."
          />
          <label htmlFor="floatingFirstName">Prénom</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingCompany"
            placeholder="Votre entreprise"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <label htmlFor="floatingCompany">Entreprise</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingJob"
            placeholder="Votre poste"
            name="job"
            value={formData.job}
            onChange={handleChange}
          />
          <label htmlFor="floatingJob">Votre poste</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            required
            className="form-control"
            id="floatingEmail"
            placeholder="Votre adresse email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            required
            className="form-control"
            id="floatingObject"
            placeholder="Objet"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="floatingObject">Objet</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            required
            placeholder="Message"
            id="floatingMessage"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <label htmlFor="floatingMessage">Message</label>
        </div>

        <button
          type="submit"
          className="btn btn-outline-secondary"
          aria-label="Envoyer le formulaire"
        >
          Envoyer
        </button>
      </form>

      {/* Liens vers les réseaux sociaux */}
      <div className="contact__links">
        <a
          className="contact__links--link"
          href="https://www.linkedin.com/in/anais-leclerc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Lien vers le profil LinkedIn" />
        </a>
        <a
          className="contact__links--link"
          href="https://github.com/Anais-71/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="Lien vers le profil GitHub" />
        </a>
        <a
          className="contact__links--link"
          href="https://cvdesignr.com/p/portfolio?hl=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cv} alt="Lien vers le CV complet" />
        </a>
      </div>

      {/* Modal */}
      <Modal show={showModal} handleClose={handleCloseModal} />
    </div>
  )
}

export default Contact
