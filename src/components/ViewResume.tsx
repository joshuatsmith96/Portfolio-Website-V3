import PDF from '../assets/Resume 2024.pdf'

function ViewResume(){
    return(
        <div className="ViewResume">
            <h3>Want To Learn More?</h3>
            <a href={PDF} target="_blank">View Resume</a>
        </div>
    )
}

export default ViewResume;