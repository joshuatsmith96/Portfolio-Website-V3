import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import "./PageScrollStyles.css"
import reveal from './Reveal.tsx'
import AboutMe from './components/AboutMe.tsx'
import ParallaxSection from './components/ParallaxSection.tsx'

function App() {
  reveal()
  return (
    <div className='App'>
      <HeroSection />
      <AboutMe />
      <ParallaxSection />
      <div className="Spacer"></div>
    </div>
  )
}

export default App