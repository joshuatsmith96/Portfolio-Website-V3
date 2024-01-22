import { Link } from 'react-router-dom'


interface Props {
    src: any,
    alt: string,
    projectName: string,
    projectText: string,
    projectDescription: string,
    languages: any,
    wireframeurl?: any,
    codeurl?: any,
    siteurl?: any,
    lastUpdate?: string
}

function Project(props: Props) {

    const projectdata = {
        name: props.projectName,
        text: props.projectText,
        languages: props.languages,
        src: props.src,
        wireframeurl: props.wireframeurl,
        codeurl: props.codeurl,
        siteurl: props.siteurl,
        projectdesc: props.projectDescription
    }

    

    return (
        <div className="Project-Container">
            <div className="reveal Project">
                <div className="project-img-container">
                    <img src={props.src} alt={props.alt} />
                </div>
                <div className="project-info">
                    <h1>{props.projectName}</h1>
                    <h4>{props.lastUpdate}</h4>
                    <p>{props.projectText}</p>
                    <div className="project-button-container">
                    <Link className='Project-Button' to={"/Project"} state={{ data: projectdata }}>View Project</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;