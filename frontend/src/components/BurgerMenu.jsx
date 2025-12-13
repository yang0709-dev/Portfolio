import { RxHamburgerMenu } from "react-icons/rx";
import { Route, Routes } from "react-router-dom";
import "../css/BurgerMenu.css"
import { move_to_right } from "../functions/move_to_right";

export default function BurgerMenu() {
  return (
    <>
      <RxHamburgerMenu id="burger" onClick={move_to_right()}/>
      <div id="container">
        <ul className="pages">
          <li className="page">Introduction</li>
          <li className="page">Blog Posts</li>
          <li className="page">Project</li>
        </ul>
      </div>
    </>
  );
}
