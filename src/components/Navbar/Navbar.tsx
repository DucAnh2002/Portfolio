import './Navbar.css'
import { assets } from '../../assets/assets.ts';

import { Link } from 'react-router-dom';
import { useState} from 'react';
import  {useThemeStore}  from '../../hooks'; 
import {FC} from 'react';




const Navbar:FC = () => {
  const {theme, setTheme} = useThemeStore()
  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const [menu, setMenu] = useState("");
  return (
    <div className='navbar' >
      <Link to={"/"}>{assets.logo1 && <img src={assets.logo1} alt="Logo" onClick={() => setMenu("home")}/>}</Link>
      
        <div className='navbar-menu'>
          <ul>
            <a href="#home" onClick={() => setMenu("home")}  className={ menu==="home"?"acctive" :""}>Home</a>
            <a href="#about" onClick={() => setMenu("about")} className={ menu==="about"?"acctive" :""}>
              About
            </a>
            
            <a href="#skills" onClick={() => setMenu("skills")}>Skills</a>
            <a href="#portfolio"onClick={() => setMenu("portfolio")}>Portfolio</a>
            <a href="#contact" onClick={() => setMenu("contact")}>Contact</a>
          </ul>
          <div className="navbar-right">
          <button onClick={toggle} className="theme-btn">
                {theme === "dark" ? "🌞" : "🌙"}
          </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
