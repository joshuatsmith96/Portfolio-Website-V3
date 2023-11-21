//Images
import LinkedIn from '../assets/Images/LinkedIn.webp'
import GitHub from '../assets/Images/GitHub.png'

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-icons">
                <div className="icons"><img src={LinkedIn} alt="" /></div>
                <div className="icons"><img src={GitHub} alt="" /></div>
            </div>
            <p>&copy; Joshua Smith's Portfolio 2023</p>
        </div>
    )
}

export default Footer;