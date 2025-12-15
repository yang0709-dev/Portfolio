import { RxHamburgerMenu } from "react-icons/rx";
import { Route, Routes } from "react-router-dom";
import "../css/BurgerMenu.css"
import { move_to_right } from "../functions/move_to_right";
import { useState } from "react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const toggleBurger =()=>{
    setOpen(!open)
  }
  return (
    <div id="burger-container">
      <RxHamburgerMenu id="burger" onClick={()=>toggleBurger()}/>
      <div id="burger-elements" className={open?"open":""}>
        
        <ul id="pages">
          <a href="/" className="page-links">
            <li className="page">Introduction</li>
          </a>
          <a href="/BlogPosts" className="page-links">
            <li className="page">Blog Posts</li>
          </a>
          <a href="/Projects" className="page-links">
            <li className="page">Projects</li>
          </a>
          
        </ul>
      </div>
      
    </div>
  );
}
