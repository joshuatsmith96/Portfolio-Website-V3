import { useLocation } from "react-router-dom"
import SkillBadge from "../components/ProjectSection/SkillBadge";
import { Link } from 'react-router-dom'
import Circle from '../components/HeroSection/Circle'

function ProjectPage() {
  const location = useLocation();
  const data = location.state.data
  let name = data.name
  let languages = data.languages
  let imgSrc = data.src

  let allLanguages = languages.map((x: any) => {
    return (
      <SkillBadge text={x} />
    )
  })

  return (
    <div className='Project'>
      <div className="project-hero">
        <Link id="project-hero-goback" to={"/Portfolio-Website-V3/"}>&#9001; Back</Link>
        <Circle color={2} width={"160px"} height={"160px"} top={"-50px"} left={"-50px"} movement={"none"} />
        <Circle color={4} width={"80px"} height={"80px"} top={"50px"} right={"-20px"} movement={"none"} />
        <div className="thumbnail-container">
          <img src={imgSrc} alt="" style={{ width: "120px", height: "auto" }} />
          <Circle color={4} width={"75%"} height={"75%"} movement={"none"} top={"20px"} zindex={"-20"} />
        </div>
        <h1>{name}</h1>
        <div className="skill-badge-container">
          <p>Languages used</p>
          <div className="skill-badge-languages">
          {allLanguages}
          </div>
        </div>
        <div className="project-description-container">
          <p>Example description goes here</p>
        </div>
      </div>
      <div className="project-buttons">
      <a className="project-button" href="">View Wireframe</a>
      <a className="project-button" href="">View Code</a>
      <a className="project-button" href="">View Site</a>
      <a className="return-button" href="">Return To Projects</a>
      </div>
    </div>
  )
}

export default ProjectPage