import React,{useEffect,useState} from "react";
import "./Navbar.css";
import {auth,provider} from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { selectUserName,selectUserEmail,selectUserPhoto,setUserLoginDetails, setSignOutState} from "../features/user/userSlice";
import {useDispatch,useSelector} from "react-redux";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link } from "react-scroll";
function Navbar(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                navigate("/home");
            }
            else{
                navigate("/");
            }
        })
    },[userName]);
    const signOutWithGoogle=()=>{
        auth
        .signOut()
        .then(()=>{
            dispatch(setSignOutState());
        }).catch((err)=>alert(err.message));
    }
    const setUser=(user)=>{
        dispatch(
            setUserLoginDetails(
                {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }
            )
        )
    }
    return <div className={!userName?"nav-outer2":"nav-outer1"}>
    <div className="leftnav"><SmartToyIcon fontSize="large"/><h1>AInterview</h1></div>
    {
            !userName?<div></div>:<>
        <div className="rightnav">
        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}><h3>Home</h3></Link>
        <Link activeClass="active" to="feat" spy={true} smooth={true} offset={-100} duration={500}><h3>Features</h3></Link>
            <Link activeClass="active" to="topics" spy={true} offset={-100} smooth={true} duration={500}><h3>Topics</h3></Link>
            <button onClick={signOutWithGoogle} className="butt">Log Out</button>
        </div>
        </>
        }
    </div>
}
export default Navbar;