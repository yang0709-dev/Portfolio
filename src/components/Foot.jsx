import { VscGithub } from "react-icons/vsc";
import { FiYoutube } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa6";
import "../css/Foot.css";

export default function Foot() {
  return (
    <div id="foot-container">
      <div id="big-div">
        <div className="icons">
          <a href='https://youtube.com/@Scorp588' className="links" target="_blank">
            <FiYoutube className="icon" id="youtube-icon"/>
          </a>
          
          <a href="https://github.com/yang0709-dev" className="links" target="_blank">
            <VscGithub className="icon" id="github-icon"/>
          </a>

          <a href="https://discord.gg/tTzxybnPec" className="links" target="_blank">
            <FaDiscord className="icon" id="discord-icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}
