import { useLocation } from "react-router-dom"
import SkillBadge from "../components/ProjectSection/SkillBadge";
import { Link } from 'react-router-dom'

function ProjectPage() {
  const location = useLocation();
  const data = location.state.data
  let name = data.name
  let languages = data.languages
  console.log(languages)

  let allLanguages = languages.map((x:any) => {
    return(
      <SkillBadge text={x}/>
    )
  })

  return (
    <div className='Project'>
      <Link to="/Portfolio-Website-V3">Go Back</Link>
        <h1>{name}</h1>
        <div className="skill-badge-container">
        {allLanguages}
        </div>
    </div>
  )
}

export default ProjectPage