import Reasons from './Reasons'

//Icon Images
import paintbrush from '../../assets/Images/paintbrush.png'
import detail from '../../assets/Images/detaill.png'
import positive from '../../assets/Images/positive.png'
import moneysign from '../../assets/Images/moneysign.png'

function HireMe(){
    return(
        <div className="HireMe">
            <h3 className="reveal">You Should Hire Me For My...</h3>
            <div className="hire-reasons">
                <Reasons reason={"Valuable Skills"} img={moneysign}/>
                <Reasons reason={"Attention To Detail"} img={detail}/>
                <Reasons reason={"Creativity"} img={paintbrush}/>
                <Reasons reason={"Positive Attitude"} img={positive}/>
            </div>
        </div>
    )
}

export default HireMe;