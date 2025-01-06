import React, { useState } from 'react'
import './projects.css'
import Card from '../../../components/card/Card'
import Focus from '../../../components/focus/Focus'

// Mockups
import argentbank from '../../../assets/images/argentbank.png'
import gameon from '../../../assets/images/gameon.png'
// import hrnet from '../../../assets/images/hrnet.png'
import kasa from '../../../assets/images/kasa.png'
import ohmyfood from '../../../assets/images/ohmyfood.png'
import ohmyfoodAnime from '../../../assets/images/ohmyfood.gif'
import petitsplats from '../../../assets/images/petitsplats.png'
import petitsplatsAnime from '../../../assets/images/petitsplats.gif'
import sportsee from '../../../assets/images/sportsee.png'
import sportseeAnime from '../../../assets/images/sportsee.gif'

const projectsData = [
  {
    image: gameon,
    title: "Page d'inscription",
    text: [
      'Formulaire dynamique en JavaScript pour inscrire les gamers au prochain tournoi épique !',
    ],
    resume: [
      "Dans le cadre du projet GameOn, j’ai eu l’opportunité de reprendre et finaliser le développement d’un formulaire d'inscription destiné à des concours de jeux vidéo.",
      'Ce projet m’a permis de transformer une base existante en une expérience utilisateur fluide et aboutie !',
      'J’ai intégré des fonctionnalités essentielles, comme :',
      '- La validation des champs pour garantir des saisies correctes.',
      '- La gestion dynamique des erreurs, avec des messages clairs pour guider les utilisateurs.',
      '- Une confirmation d’inscription conviviale et engageante.',
      'En parallèle, j’ai porté une attention particulière à l’accessibilité (navigation au clavier, messages ARIA) et à la responsivité pour garantir une utilisation optimale sur tous les appareils.',
      'Grâce à une attention toute particulière portée aux détails, j’ai livré un formulaire fonctionnel, moderne et prêt à impressionner nos utilisateurs !',
    ],
    focusImg: gameon,
    link: {
      url: 'https://anais-71.github.io/GameOn-website-FR/',
      label: 'Voir le projet',
    },
  },
  {
    image: ohmyfood,
    title: 'Réservation de plats',
    text: [
      'Commandez vos plats préférés en un clic et personnalisez votre expérience culinaire !',
    ],
    resume: [
      "Dans le cadre du projet Ohmyfood, j'ai eu la chance de participer au développement d'un site mobile first pour répertorier les menus de restaurants gastronomiques. Ce projet innovant visait à simplifier la réservation de repas en ligne, permettant aux clients de composer leur menu à l’avance et d’éviter ainsi les temps d'attente au restaurant.",
      "J'ai travaillé à la création d'un site web responsive, optimisé pour mobile, tablette et desktop, en m’appuyant sur des maquettes détaillées fournies par l’équipe UX design et en respectant rigoureusement le brief créatif.",
      "En plus des fonctionnalités classiques de réservation, l'une des particularités du site est de permettre aux utilisateurs de personnaliser leur repas selon leurs préférences, rendant l’expérience culinaire encore plus agréable. Ce site est conçu pour offrir une interface fluide et moderne avec des animations soignées qui offrent une expérience utilisateur optimale.",
      'Ce projet m’a permis d’acquérir une solide expérience dans le développement d’une plateforme responsive et interactive, tout en assurant une attention particulière à l’UX et à l’UI pour garantir un design moderne et une performance sans faille !',
    ],
    focusImg: ohmyfoodAnime,
    link: {
      url: 'https://anais-71.github.io/ohmyfood/',
      label: 'Voir le projet',
    },
  },
  {
    image: petitsplats,
    title: 'Site de recette',
    text: [
      'Plateforme interactive permettant aux utilisateurs de découvrir et rechercher des recettes culinaires.',
    ],
    resume: [
      "Le défi de ce projet était de proposer deux implémentations de recherche, l'une utilisant des boucles natives et l'autre en programmation fonctionnelle, pour ensuite comparer les performances et choisir la meilleure solution. En parallèle, j'ai implémenté l'interface utilisateur en respectant scrupuleusement les maquettes fournies, avec une attention particulière portée à la fluidité et à la réactivité du site.",
      "Pour cette mission, j'ai utilisé des outils comme Git, Jsben.ch pour comparer les performances des algorithmes, et draw.io pour créer les algorigrammes des deux implémentations. J'ai également veillé à respecter les bonnes pratiques de développement, comme l'optimisation du code, l'utilisation de fonctions réutilisables, et la prévention des failles de sécurité.",
      "Ce projet m'a permis de démontrer mes compétences en développement Front-End, de perfectionner ma gestion de la performance des algorithmes, et de contribuer activement à la création d'une fonctionnalité clé qui enrichit l'expérience des utilisateurs !",
    ],
    focusImg: petitsplatsAnime,
    link: {
      url: 'https://anais-71.github.io/petits-plats/',
      label: 'Voir le projet',
    },
  },
  {
    image: kasa,
    title: 'Locations entre particuliers',
    text: [
      'Application web développée en React, avec une couverture de tests complète utilisant Jest pour garantir la fiabilité et la qualité du code.',
    ],
    resume: [
      "Dans le cadre du projet Kasa, j'ai eu l'opportunité de participer à un projet ambitieux de refonte complète du site, qui passe d'une technologie legacy ASP.NET à une stack moderne avec React côté Front-End et NodeJS côté Back-End. L'objectif principal était de créer une plateforme web responsive et performante pour la gestion des annonces de locations d'appartements entre particuliers, en suivant des maquettes Figma précises et en mettant en œuvre des fonctionnalités interactives.",
      "J'ai développé l'ensemble des composants React nécessaires à l'application, y compris la gestion des routes avec React Router. Bien que le Back-End ne soit pas encore en place, j'ai pu travailler avec un fichier JSON pour simuler les données d'annonces et mettre en place l'interface utilisateur.",
    ],
    focusImg: kasa,
    link: {
      url: 'https://github.com/Anais-71/kasa',
      label: 'Voir le projet sur GitHub',
    },
  },
  {
    image: sportsee,
    title: 'Tableau de bord',
    text: [
      'Application web développée avec Recharts pour la visualisation des progrès sportifs.',
    ],
    resume: [
      "Dans le cadre du projet SportSee, j'ai pu développer une nouvelle version de la page profil utilisateur.",
      'Cette page permet aux utilisateurs de suivre leur activité sportive, notamment le nombre de sessions réalisées et le nombre de calories brûlées, à travers des graphiques interactifs.',
      "Le projet repose sur l'utilisation de React pour recréer l'interface utilisateur, avec l'intégration de graphiques à l'aide de la bibliothèque Recharts. Une des priorités était de développer des graphiques dynamiques permettant de visualiser les statistiques de manière claire et interactive.",
      "Côté technique, le back-end utilise NodeJS, des appels HTTP sont donc réalisés via Axios pour récupérer des données d’exemple. Une fois le projet fonctionnel, l'API réelle a été intégrée tout en standardisant les données provenant du back-end afin de les formater correctement avant de les utiliser dans l'application. Par ailleurs, le projet est documenté pour faciliter la collaboration.",
    ],
    focusImg: sportseeAnime,
    link: {
      url: 'https://github.com/Anais-71/sportsee',
      label: 'Voir le projet sur GitHub',
    },
  },
  {
    image: argentbank,
    title: "Gestion de l'état utilisateur",
    text: [
      "Application web d'une banque en ligne avec accès sécurisés et appels API.",
    ],
    resume: [
      "L’application Argent Bank est une plateforme web dédiée à l'authentification des utilisateurs. L'objectif principal est de permettre aux utilisateurs de se connecter à leurs comptes, de gérer leur profil et d'effectuer diverses actions liées à leur sécurité. L'application est entièrement responsive et utilise React pour l'interface utilisateur et Redux pour gérer l'état global de l'application.",
      "L'utilisateur peut visiter la page d'accueil, se connecter au système, se déconnecter, et accéder à son profil uniquement après s'être authentifié. Il peut également modifier son profil et enregistrer ces modifications dans la base de données via des API déjà mises en place par l'équipe back-end.",
      'L’application a donc été développée avec une approche modulaire et performante.',
    ],
    focusImg: argentbank,
    link: {
      url: 'https://github.com/Anais-71/argent-bank',
      label: 'Voir le projet sur GitHub',
    },
  },
]

const Projects = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleImageClick = (index) => {
    setSelectedCardIndex(index)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedCardIndex(null)
  }

  return (
    <div className="projects">
      {projectsData.map((project, index) => (
        <Card
          key={index}
          image={project.image}
          title={project.title}
          text={project.text}
          link={project.link}
          onImageClick={() => handleImageClick(index)} // Pass the index of the clicked card
        />
      ))}

      <Focus
        show={showModal}
        handleClose={handleCloseModal}
        projectsData={projectsData}
        selectedCardIndex={selectedCardIndex !== null ? selectedCardIndex : 0} // S'assurer que l'index est valide
      />
    </div>
  )
}

export default Projects
