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
//Images
import BackgroundImageMobile from './assets/Images/webbackground-mobile.jpg'

function App() {
  reveal()
  return (
    <div className='App'>
      <HeroSection></HeroSection>
      <Parallax strength={3000}>
        <Background className="custom-bg">
            <img src={BackgroundImageMobile} alt="fill murray" />
        </Background>
        <AboutMe/>
        <MySkills/>
        <Experience />
        <HireMe />
        <div className="Spacer"></div>
    </Parallax>
    </div>
  )
}

export default App