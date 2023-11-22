interface Props{
    src: any,
    alt: string,
    projectName: string,
    projectText: string
}

function Project(props: Props){
    return(
        <div className="reveal Project">
            <img src={props.src} alt={props.alt}/>
            <h1>{props.projectName}</h1>
            <p>{props.projectText}</p>
        </div>
    )
}

export default Project;