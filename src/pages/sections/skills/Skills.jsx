import './skills.css'
import Carousel from '../../../components/carousel/Carousel'

// Logos com
import ads from '../../../assets/images/logos/ads.png'
import AE from '../../../assets/images/logos/aftereffects.png'
import analytics from '../../../assets/images/logos/analytics.png'
import buffer from '../../../assets/images/logos/buffer.png'
import canva from '../../../assets/images/logos/canva.png'
import hoot from '../../../assets/images/logos/hootsuite.png'
import AI from '../../../assets/images/logos/illustrator.png'
import InD from '../../../assets/images/logos/indesign.png'
import marketo from '../../../assets/images/logos/marketo.png'
import meta from '../../../assets/images/logos/meta.png'
import psd from '../../../assets/images/logos/photoshop.png'
import sharepoint from '../../../assets/images/logos/sharepoint.png'
import teams from '../../../assets/images/logos/teams.png'
import zoom from '../../../assets/images/logos/zoom.png'

// Logos dev
import html from '../../../assets/images/logos/html5.png'
import css from '../../../assets/images/logos/css3.png'
import js from '../../../assets/images/logos/javascript.png'
import react from '../../../assets/images/logos/react.png'
import bootstrap from '../../../assets/images/logos/bootstrap.png'
import jest from '../../../assets/images/logos/jest.png'
import recharts from '../../../assets/images/logos/recharts.png'
import redux from '../../../assets/images/logos/redux.png'
import sass from '../../../assets/images/logos/sass.png'

const comItems = [
  { src: ads, alt: 'Ads' },
  { src: AE, alt: 'After Effects' },
  { src: analytics, alt: 'Analytics' },
  { src: buffer, alt: 'Buffer' },
  { src: canva, alt: 'Canva' },
  { src: hoot, alt: 'Hootsuite' },
  { src: AI, alt: 'Illustrator' },
  { src: InD, alt: 'InDesign' },
  { src: marketo, alt: 'Marketo' },
  { src: meta, alt: 'Meta' },
  { src: psd, alt: 'Photoshop' },
  { src: sharepoint, alt: 'SharePoint' },
  { src: teams, alt: 'Teams' },
  { src: zoom, alt: 'Zoom' },
]

const devItems = [
  { src: html, alt: 'HTML' },
  { src: css, alt: 'CSS' },
  { src: js, alt: 'JavaScript' },
  { src: react, alt: 'React' },
  { src: bootstrap, alt: 'React' },
  { src: jest, alt: 'React' },
  { src: recharts, alt: 'React' },
  { src: redux, alt: 'React' },
  { src: sass, alt: 'React' },
]

const Skills = () => {
  return (
    <div className="skills">
      {/* Section Communication */}
      <div className="skills__com">
        <div className="skills__com--carousel">
          <Carousel items={comItems} id="carousel-com" />
        </div>
        <div className="skills__com--txt">
          <h4>Communication</h4>
          <ul>
            <li>
              <span className="emphase">Communication Stratégique</span>
              <br />
              Artiste des plans de communication, je transforme les objectifs en
              stratégies lumineuses et percutantes !
            </li>
            <li>
              <span className="emphase">Création de Contenu</span>
              <br />
              Rédactrice passionnée et designer créative, je donne vie aux
              messages à travers des contenus et visuels impactants.
            </li>
            <li>
              <span className="emphase">Réseaux Sociaux</span>
              <br />
              Experte des plateformes sociales, je décrypte leurs codes et
              optimise leur potentiel communicationnel.
            </li>
            <li>
              <span className="emphase">Gestion de Projet</span>
              <br />
              Chef d'orchestre rigoureuse, je coordonne les projets avec
              précision et efficacité.
            </li>
            <li>
              <span className="emphase">Marketing Digital</span>
              <br />
              Stratège numérique, je pilote SEO, campagnes digitales et analyse
              de performance avec enthousiasme.
            </li>
            <li>
              <span className="emphase">Design Graphique</span>
              <br />
              Magicienne visuelle, je transforme les idées en créations
              graphiques grâce à ma boîte à outils Adobe.
            </li>
          </ul>
        </div>
      </div>

      {/* Section Développement */}
      <div className="skills__dev">
        <div className="skills__dev--txt">
          <h4>Développement</h4>
          <ul>
            <li>
              <span className="emphase">Développement Frontend</span>
              <br />
              Coding wizard de React, je transforme les idées en interfaces
              utilisateur magiques !
            </li>
            <li>
              <span className="emphase">JavaScript</span>
              <br />
              Experte des promesses et des async/await, je dompte JavaScript
              avec finesse et passion.
            </li>
            <li>
              <span className="emphase">Gestion d'État</span>
              <br />
              Architecte des states, je gère la complexité des applications avec
              élégance.
            </li>
            <li>
              <span className="emphase">Intégration et Styled Components</span>
              <br />
              Design et code en harmonie, je crée des interfaces responsives qui
              respirent le style.
            </li>
            <li>
              <span className="emphase">Développement Backend</span>
              <br />
              Stratège des API, je connecte frontend et backend comme une pro !
            </li>
            <li>
              <span className="emphase">Outils et Workflow</span>
              <br />
              Git, méthodologies agiles : je navigue dans l'écosystème dev avec
              agilité et créativité.
            </li>
          </ul>
        </div>
        <div className="skills__dev--carousel">
          <Carousel items={devItems} id="carousel-dev" />
        </div>
      </div>
    </div>
  )
}

export default Skills
