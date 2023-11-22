//Scripts
import reveal from './Reveal.tsx'
import Home from './pages/Home.tsx'
import Project from './pages/ProjectPage.tsx'
import { Routes, Route } from "react-router-dom"

function App() {
  reveal()
  return (
    <div className='App'>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Project" Component={Project} />
      </Routes>
    </div>
  )
}

export default App