import React from "react";
import "./Features.css";
import DoneIcon from '@mui/icons-material/Done';
function Features()
{
    return <div className="mainf" id="feat">
    <h4>FEATURES</h4>
    <h2>Practice interviews with AI</h2>
    <div className="outerFeature">
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">Improved Performance</p></div>
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">Practice and feedback</p></div>
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">Convenient and Flexible</p></div>
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">AI Interview Simulations</p></div>
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">Adaptive Questioning</p></div>
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">Custom Scenario Creation</p></div>
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">Best Technologies Used</p></div>
        <div className="sigcontainer"><div className="icon-outer"><DoneIcon /></div><p className="text">Feedback on each Answer</p></div>
    </div>
    </div>
}
export default Features;