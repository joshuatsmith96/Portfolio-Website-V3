import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import './ScrollEffects'
import ScrollEffects from './ScrollEffects'


function App() {
  ScrollEffects();
  return (
    <div className='App'>
      <HeroSection />
      <div className="Spacer"></div>
    </div>
  )
}

export default App
