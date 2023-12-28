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
        <Route path="/" Component={Home} />
        <Route path="/Project" Component={ProjectPage} />
      </Routes>
    </div>
  )
}

export default App