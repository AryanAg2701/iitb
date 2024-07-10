import "./Footer.css" //stylesheet
import image from "./assets/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg" //image of logo

function Footer(){
    //returning the Footer with few hyperlinks and the navigating between sites.
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