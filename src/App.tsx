//Scripts
import reveal from './Reveal.tsx'
import Home from './pages/Home.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import { Routes, Route } from "react-router-dom"

function App() {
  reveal()
  return (
    <div className='App'>
      <Routes>
        <Route path="/Portfolio-Website-V3" Component={Home} />
        <Route path="/Portfolio-Website-V3/Project" Component={ProjectPage} />
      </Routes>
    </div>
  )
}

export default App