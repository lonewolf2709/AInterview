import React from "react";
import "./Users.css"
function Users()
{
    return <div className="outer-user">
        <h4>OUR USERS</h4>
        <h2>Who can benifit from AInterview?</h2>
        <div className="cards">
            <div className="card">
                <img className="users-image" src="https://interviewai.me/assets/img/values-1.png"></img>
                <h3>Students and Recent Graduates</h3>
                <p>Practice answering tailored interview questions and gain confidence for your job search.</p>
            </div>
            <div className="card">
                <img className="users-image" src="https://interviewai.me/assets/img/values-2.png"></img>
                <h3>Job seekers and Candidates</h3>
                <p>Practice answering common interview questions and improve your performance.</p>
            </div>
            <div className="card">
                <img className="users-image" src="https://interviewai.me/assets/img/values-3.png"></img>
                <h3>Remote Workers and Freelancers</h3>
                <p>Ace virtual job interviews with AI-generated, tailored questions and personalized feedback.</p>
            </div>
        </div>
    </div>
}
export default Users;