import React from "react";
import "./Footer.css"
function Footer()
{   let x=new Date();
    let year=x.getFullYear();
    return <div className="f">
    <div className="upper-f">
    <div className="content">
        <span className="contentspan">AInterview</span>
        <p className="contentp">Your success starts with a great interview. Prepare and practice your interview skills, and succeed with AInterview</p>
    </div>
    <img className="footer-img" src="https://interviewai.me/assets/img/footer-bg.png"></img>
    </div>
    <div className="lower-f">
        <p>© {year} Saad Ahmed</p>
    </div>
    </div>
}
export default Footer;