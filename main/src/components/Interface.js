
import {React,useEffect,useState} from "react";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import "./Interface.css"
import { Link, useParams } from "react-router-dom";
import { selectUserPhoto } from "../features/user/userSlice";
import { useSelector } from "react-redux";
import {ThreeDots} from "react-loader-spinner";
import HomeIcon from '@mui/icons-material/Home';
import CancelIcon from '@mui/icons-material/Cancel';
import { terminate } from "firebase/firestore";
// import Loader from 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
function Interface()
{
    const [loading,setload]=useState(false);
    const par=useParams();
    let topic;
    if(par.id==='1')
    {
        topic="Operating Systems";
    }
    else if(par.id=='2')
    {
        topic="Database Management Systems";
    }
    else if(par.id=='3')
    {
        topic="Object Oriented Programming";
    }
    else if(par.id=='4')
    {
        topic="Computer Networks";
    }
    const [input,setInput]=useState("");
    const intructions = [
        { user: "me", message: "You are the Interview ChatBot for an organization called AInterview. Your role is to conduct the user's interview." },
        { user: "me", message: `The interview topics will be related to ${topic}.` },
        { user: "me", message: "Your task is to ask 10 questions to the user sequentially." },
        { user: "me", message: "Initiate by posing a question; the user will respond with their answer or state that they don't know." },
        { user: "me", message: "Provide feedback or suggest an answer if the user is unsure. Politely indicate that their response could be improved. Keep responses concise, limited to 4-5 lines, and to the point." },
        { user: "me", message: "Commence the interview by introducing yourself and offering 2-3 lines of instruction." },
        { user: "me", message: "Always ask for permission before starting or transitioning to the next question." },
        { user: "me", message: "Before moving on to the next question, confirm the user's response to the current question. If needed, provide additional guidance or ask for clarification." },
        { user: "me", message: "If the user provides both a response and the next question in the same input, prioritize handling the user's response first. Then, in a separate message, introduce the next question to maintain a clear conversation flow." },
        { user: "me", message: "Avoid revealing the answer and the next question in the same response. Proceed to the next question only after the user confirms understanding or expresses satisfaction." },
        { user: "me", message: "To maintain focus, provide only the current question and its answer. Do not display future questions and answers until the user has responded to the current one." },
        { user: "me", message: "If the user requests information on upcoming questions, politely inform them that you'll reveal each question in sequence and address them one at a time." }
      ];
    const [chatLog,setChatLog]=useState([]);
    const Intro= async ()=>
    {
        setload(true);
        const chatLogFinal=intructions;
        const response=await fetch("http://localhost:3080",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                message:chatLogFinal.map((message)=>message.message).join("")
            })
        });
        setload(false);
        console.log("End");
        const datax = await response.json();
        console.log(datax.data);
        setChatLog([{user:"gpt",message: `${datax.data}`}]);
    }
    useEffect(()=>{Intro();},[]);
    async function handleSubmit(event)
    {
        event.preventDefault();
        console.log("submit");
        setload(true);
        let chatlogNew=[...chatLog,{user:"me",message:`${input}`}];
        setInput("");
        setChatLog(chatlogNew);
        const chatLogFinal=intructions.concat(chatlogNew);
        const response=await fetch("http://localhost:3080",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                message:chatLogFinal.map((message)=>message.message).join("")
            })
        });
        setload(false);
        console.log("End");
        const datax = await response.json();
        console.log(datax.data);
        setChatLog([...chatlogNew,{user:"gpt",message: `${datax.data}`}]);
    }
    async function terminate()
    {
        console.log("Hello3");
        setload(true);
        const del=[{user:"me",message:"The User would like to stop the interview here. Give a 3-4 line feedback and suggest areas for improvement to the user. Tell the user it was great taking his interview and he may leave now.Give a blunt feedback with no sugar coating"}];
        const finalInstuctions=chatLog.concat(del);
        const response=await fetch("https://ai-interview-psi.vercel.app/",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                message:finalInstuctions.map((message)=>message.message).join("")
            })
        });
        setload(false);
        console.log("End");
        const datax = await response.json();
        console.log(datax.data);
        setChatLog([...chatLog,{user:"gpt",message: `${datax.data}`}]);
    }
    function handleChange(event){
        setInput(event.target.value);
    }
    return <div className="App2">
        <aside className="sidemenu">
            <Link className="link" to="/home"><div className="side-menu-button">
            <HomeIcon />
                Home
            </div>
            </Link>
            <div onClick={terminate} className="side-menu-button">
            <CancelIcon />
                Finish Interview
            </div>
            <div className="notes">
            Notes
            <textarea className="note-area">
               
            </textarea>
            </div>
        </aside>
        <section className="chat-box">
        <div className="chat-log">
        {chatLog.map((message1,index) => (
            <ChatMessage key={index} message={message1} />
        ))}
        {loading&&<div className="three"><ThreeDots /></div>}
        </div>
           <div className="chat-input-holder">
           <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange} rows="1" className="chat-input-textarea" placeholder="Type your Message here">
            </input>
            </form>
           </div>
        </section>
    </div>
}
const ChatMessage=({load,message})=>{
    const userPhoto=useSelector(selectUserPhoto);
    console.log(userPhoto);
    return (
        <div>
    <div className="chat-message">
    <div className="chat-message-center">
        <div className={`avatar ${message.user==="gpt"&&"chatgpt"}`}>
            {message.user=="gpt"&&<SmartToyIcon />}
            {message.user=="me"&&<img className="user-img" src={userPhoto}></img>}
        </div>
        <div className="message">
        {message.message}
        </div>
</div>
</div>
</div> )
}
export default Interface;