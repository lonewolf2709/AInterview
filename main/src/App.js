import Login from './components/Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Topics from './components/Topics';
import Interface from './components/Interface';
import Features from './components/Features';
import Users from './components/Users';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/home" element={<div><Navbar /><Intro /><Features /><Users /><Home /><Footer /></div>}></Route>
        <Route path="/" element={<div><Navbar /><Login /></div>}></Route>
        <Route path="/inter/:id" element={<div><Interface /></div>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;
