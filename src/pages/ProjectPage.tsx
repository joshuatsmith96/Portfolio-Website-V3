import { useLocation } from "react-router-dom"

function Project() {
  const location = useLocation();
  const data = location.state
  console.log(data)

  return (
    <div className='Project'>
        <h1>Projects</h1>
    </div>
  )
}

export default Project