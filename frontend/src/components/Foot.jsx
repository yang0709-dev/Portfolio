import { FiYoutube } from "react-icons/fi";
import { TiSocialGithubCircular } from "react-icons/ti";
import "../css/Foot.css";

export default function Foot() {
  return (
    <div id="container">
      <div id="big-div">
        <div className="icons">
          <FiYoutube className="icon" href="youtube.com" />
          <a href="https://github.com/yang0709-dev">
            <TiSocialGithubCircular className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
