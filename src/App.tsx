1//Styles
import './App.css'
import "./PageScrollStyles.css"
//Scripts
import reveal from './Reveal.tsx'
import { Parallax, Background } from 'react-parallax'
//Sections
import HeroSection from './components/HeroSection/HeroSection'
import AboutMe from './components/AboutMe.tsx'
import MySkills from './components/MySkills.tsx'
import Experience from './components/ExperienceSection/Experience.tsx'
import HireMe from './components/HireMeSection/HireMe.tsx'
import ViewResume from './components/ViewResume.tsx'
import ContactForm from './components/ContactForm.tsx'
import Footer from './components/Footer.tsx'
import ProjectSection from './components/ProjectSection/ProjectSection.tsx'
//Images
import BackgroundImageMobile from './assets/Images/webbackground-mobile.jpg'

function App() {
  reveal()
  return (
    <div className='App'>
      <HeroSection></HeroSection>
      <Parallax strength={1000}>
        <Background className="custom-bg">
            <img src={BackgroundImageMobile} alt="fill murray" />
        </Background>
        <AboutMe/>
        <MySkills/>
        <Experience />
        <ProjectSection />
        <HireMe />
        <ViewResume />
        <ContactForm />
        <Footer />
        <div className="Spacer"></div>
    </Parallax>
    </div>
  )
}

export default App