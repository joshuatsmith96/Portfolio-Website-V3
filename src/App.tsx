//Scripts
import reveal from './Reveal.tsx'
import Home from './pages/Home.tsx'
import Project from './pages/Project.tsx'
import { Routes, Route } from "react-router-dom"

function App() {
  reveal()
  return (
    <div className='App'>
      <Routes>
        <Route path="/Portfolio-Website-V3/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App