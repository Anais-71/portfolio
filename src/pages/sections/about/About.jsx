import './about.css'
import logo from '../../../assets/images/logo.png'

const About = () => {
  return (
    <div className="intro">
      <div className="intro__bloc">
        <h3 className="intro__bloc--title">
          Développeuse Front-End
          <br />
          <br />
          Chargée de Communication{' '}
        </h3>
        <img className="intro__bloc--logo" src={logo} />
      </div>
      <div className="intro__txt">
        Après <span className="emphase">8 ans</span> dans le{' '}
        <span className="emphase">marketing</span>, j’ai décidé de relever un
        défi excitant : fusionner mon amour pour la{' '}
        <span className="emphase">communication</span> avec une nouvelle
        passion, le
        <span className="emphase">développement front-end</span>. Tout juste
        diplômée en tant que Développeuse d’Applications spécialisée en{' '}
        <span className="emphase">JavaScript</span> et{' '}
        <span className="emphase">React</span>, je suis prête à créer des
        solutions innovantes, performantes et centrées sur l’humain.
        <br />
        <br />
        Mon expérience en <span className="emphase">marketing</span> m’a appris
        à comprendre en profondeur les besoins des utilisateurs et l’importance
        d’une interface intuitive et engageante. Aujourd’hui, je mets ces
        compétences au service du développement web, en y ajoutant une bonne
        dose de <span className="emphase">JavaScript</span>,{' '}
        <span className="emphase">React</span> et de créativité pour imaginer
        des applications qui allient technique et simplicité.
        <br />
        <br />
        Curieuse, enthousiaste et toujours prête à relever des défis, je suis
        motivée par l’idée de transformer des idées en expériences concrètes.
        J’adore apprendre, résoudre des casse-têtes complexes et travailler sur
        des projets qui marient innovation technologique et stratégie centrée
        sur l’utilisateur.
        <br />
        <br />
        Vous avez un projet en tête ou envie d’échanger sur des idées ? Je
        serais ravie de discuter avec vous ! Ensemble, donnons vie à des
        applications qui feront la différence.
      </div>
    </div>
  )
}

export default About
