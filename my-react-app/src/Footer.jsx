import "./Footer.css"
import image from "./assets/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
function Footer(){
    return(
        <>
            <div className="footer">
                <a className="pic" href="https://www.youtube.com/"><img id="image" src={image} alt="hi" /></a>
                <div className="rights">
                © 2024 - All rights reserved. Insight IIT Bombay
                </div>
                <div className="rights">
                    <span>Home</span>
                    <span>Privacy</span>
                    <span>Contact</span>
                </div>
            </div>
        </>
    )
}
export default Footer