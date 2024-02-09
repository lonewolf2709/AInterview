import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home()
{
    return <div className="outerH" id="topics">
        <h4>TOPICS</h4>
        <h2>Currently Present On AInterview</h2>
        <div className="outer-cards">
            <Link className="t-link" to="/inter/1">
            <div className="cardH">
                <img className="h-image" src="https://i.ytimg.com/vi/rLhIPkneFM0/hqdefault.jpg"></img>
                <p>Operating Systems</p>
            </div>
            </Link>
            <Link className="t-link" to="/inter/2">
            <div className="cardH">
                <img className="h-image" src="https://t3.ftcdn.net/jpg/03/87/94/94/360_F_387949414_jvPBNVHETFghaUYLareyh5Nk8HX3bbFB.jpg"></img>
                <p>DataBase Management Systems</p>
            </div>
            </Link>
            <Link className="t-link" to="/inter/3">
            <div className="cardH">
                <img className="h-image" src="https://miro.medium.com/v2/resize:fit:480/1*b46ZNC9iMbPS55SbCp6RKw.jpeg"></img>
                <p>Object Oriented Programming</p>
            </div>
            </Link>
            <Link className="t-link" to="/inter/4">
            <div className="cardH">
                <img className="h-image" src="https://images.pond5.com/global-computer-network-spider-web-illustration-057517292_iconl_nowm.jpeg"></img>
                <p>Computer Networks</p>
            </div>
            </Link>
        </div>
    </div>;
}
export default Home;