import Project from './Project'
//Images
import PortfolioThumbnail from '../../assets/Images/Project Thumbnails/Portfolio_Thumbnail.png'
import ComingSoon from '../../assets/Images/Project Thumbnails/Coming Soon_Thumbnail.png'

function ProjectSection(){
    return(
        <div className="ProjectSection">
            <h1 id="project-section-header">Projects</h1> 
            <Project projectName={"Portfolio Website"} projectText={"Portfolio description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, illo. Totam dolor autem a alias ad doloremque nesciunt, libero, magni sequi nam nisi suscipit nobis non facilis quidem excepturi exercitationem?"} src={PortfolioThumbnail} alt={"Portfolio Website Thumbnail"}/>
            <Project projectName={"Project Coming Soon"} projectText={"Project Coming Soon"} src={ComingSoon} alt={"Project Coming Soon"}/>
            <Project projectName={"Project Coming Soon"} projectText={"Project Coming Soon"} src={ComingSoon} alt={"Project Coming Soon"}/>
            <Project projectName={"Project Coming Soon"} projectText={"Project Coming Soon"} src={ComingSoon} alt={"Project Coming Soon"}/>
        </div>
    )
}

export default ProjectSection;