import Carousel from '../../../components/carousel/Carousel'
import './about.css'

//assets
import logo from '../../../assets/images/logo.png'
//comm
import ps from '../../../assets/images/logos/photoshop.png'
import id from '../../../assets/images/logos/indesign.png'
import ia from '../../../assets/images/logos/illustrator.png'
import ae from '../../../assets/images/logos/aftereffects.png'
import canva from '../../../assets/images/logos/canva.png'
import googleAnalytics from '../../../assets/images/logos/analytics.png'
import googleAds from '../../../assets/images/logos/ads.png'
import meta from '../../../assets/images/logos/meta.png'
import hootsuite from '../../../assets/images/logos/hootsuite.png'
import buffer from '../../../assets/images/logos/buffer.png'
import marketo from '../../../assets/images/logos/marketo.png'
import teams from '../../../assets/images/logos/teams.png'
import sharepoint from '../../../assets/images/logos/sharepoint.png'
import zoom from '../../../assets/images/logos/zoom.png'
// dev
import js from '../../../assets/images/logos/javascript.png'
import rct from '../../../assets/images/logos/react.png'
import html from '../../../assets/images/logos/html5.png'
import css from '../../../assets/images/logos/css3.png'
import sass from '../../../assets/images/logos/sass.png'
import jest from '../../../assets/images/logos/jest.png'
import redux from '../../../assets/images/logos/redux.png'
import recharts from '../../../assets/images/logos/recharts.png'

const About = () => {
  const carouselOneItems = [
    { src: ps, alt: 'Adobe photoshop' },
    { src: id, alt: 'Adobe InDesign' },
    { src: ia, alt: 'Adobe Illustrator' },
    { src: ae, alt: 'Adobe After Effects' },
    { src: canva, alt: 'Canva' },
    { src: googleAnalytics, alt: 'Google Analytics' },
    { src: googleAds, alt: 'Google Ads' },
    { src: meta, alt: 'Meta Business Partner' },
    { src: hootsuite, alt: 'Hootsuite' },
    { src: buffer, alt: 'Buffer' },
    { src: marketo, alt: 'Marketo' },
    { src: teams, alt: 'Teams' },
    { src: sharepoint, alt: 'Sharepoint' },
    { src: zoom, alt: 'Zoom Webinar' },
  ]

  const carouselTwoItems = [
    { src: js, alt: 'JavaScript' },
    { src: rct, alt: 'React' },
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
    { src: sass, alt: 'SASS' },
    { src: jest, alt: 'Jest' },
    { src: redux, alt: 'Redux' },
    { src: recharts, alt: 'Recharts' },
  ]

  return (
    <div className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__resume">
        <h1 className="about__resume--title">
          Développeuse Front-End
          <br />
          Chargée de Communication
        </h1>

        <div className="about__resume--txt">
          <p>
            Après <span className="emphase">8 ans</span> dans le{' '}
            <span className="emphase">marketing</span>, j’ai décidé de relever
            un défi excitant : fusionner mon amour pour la{' '}
            <span className="emphase">communication</span> avec une nouvelle
            passion, le <span className="emphase">développement front-end</span>
            . Tout juste diplômée en tant que Développeuse d’Applications
            spécialisée en <span className="emphase">JavaScript</span> et{' '}
            <span className="emphase">React</span>, je suis prête à créer des
            solutions innovantes, performantes et centrées sur l’humain.
          </p>
          <p>
            Mon expérience en <span className="emphase">marketing</span> m’a
            appris à comprendre en profondeur les besoins des utilisateurs et
            l’importance d’une interface intuitive et engageante. Aujourd’hui,
            je mets ces compétences au service du développement web, en y
            ajoutant une bonne dose de{' '}
            <span className="emphase">JavaScript</span>,{' '}
            <span className="emphase">React</span> et de créativité pour
            imaginer des applications qui allient technique et simplicité.
          </p>
          <p>
            Curieuse, enthousiaste et toujours prête à relever des défis, je
            suis motivée par l’idée de transformer des idées en expériences
            concrètes. J’adore apprendre, résoudre des casse-têtes complexes et
            travailler sur des projets qui marient innovation technologique et
            stratégie centrée sur l’utilisateur.
          </p>
          <p className="emphase">
            Vous avez un projet en tête ou envie d’échanger sur des idées ? Je
            serais ravie de discuter avec vous ! Ensemble, donnons vie à des
            applications qui feront la différence.
          </p>
        </div>
        <img
          src={logo}
          alt="Anaïs Leclerc"
          className="about__resume--logo"
        ></img>
      </div>
      <div className="about__skills">
        <div className="about__skills--comm">
          <Carousel id="carouselOne" items={carouselOneItems} />
        </div>
        <div className="about__skills--dev">
          <Carousel id="carouselTow" items={carouselTwoItems} />
        </div>
      </div>
    </div>
  )
}

export default About
