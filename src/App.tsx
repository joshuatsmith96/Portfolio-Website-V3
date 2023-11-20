1//Styles
import './App.css'
import "./PageScrollStyles.css"
//Scripts
import reveal from './Reveal.tsx'
import { Parallax, Background } from 'react-parallax'
//Sections
import HeroSection from './components/HeroSection/HeroSection'
import AboutMe from './components/AboutMe.tsx'
//Images
import BackgroundImage from './assets/Images/webbackgroundv2.jpg'

function App() {
  reveal()
  return (
    <div className='App'>
      <HeroSection></HeroSection>
      <Parallax strength={1500}>
        <Background className="custom-bg">
            <img src={BackgroundImage} alt="fill murray" />
        </Background>
        <AboutMe/>
        <div className="Spacer"></div>
    </Parallax>
    </div>
  )
}

export default App