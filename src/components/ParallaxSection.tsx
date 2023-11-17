import { Parallax } from 'react-parallax'
import resume from '../assets/Images/Resume1.jpg'

function ParallaxSection(){
    return(
        <div className='ParallaxSection'>
            <Parallax blur={{min: -3, max: 6}} bgImage={resume} bgImageAlt="the cat" strength={-100} style={{height: "100%"}}>
                <div className="resume-container">
                    <h2>hi</h2>
                </div>
            </Parallax>
        </div>
    )
}

export default ParallaxSection;