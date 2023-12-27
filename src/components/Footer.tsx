//Images
import LinkedIn from '../assets/Images/LinkedIn.webp'
import GitHub from '../assets/Images/GitHub.png'

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-icons">
                <div className="icons"><a href="https://www.linkedin.com/in/joshua-s-90680119b/" target="_blank"><img src={LinkedIn} alt="" /></a></div>
                <div className="icons"><a href="https://github.com/joshuatsmith96" target="_blank"><img src={GitHub} alt="" /></a></div>
            </div>
            <p>&copy; Joshua Smith's Portfolio 2023</p>
        </div>
    )
}

export default Footer;