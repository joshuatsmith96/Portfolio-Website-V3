import { Link } from 'react-router-dom'


interface Props{
    src: any,
    alt: string,
    projectName: string,
    projectText: string
}

function Project(props: Props){

    const projectdata = {name: props.projectName, text: props.projectText}

    return(
        <div className="Project-Container">
            <div className="reveal Project">
            <img src={props.src} alt={props.alt}/>
            <h1>{props.projectName}</h1>
            <p>{props.projectText}</p>
            <Link className='Project-Button' to={"/Project"} state={{data: projectdata}}>View Project</Link>
            </div>
        </div>
    )
}

export default Project;