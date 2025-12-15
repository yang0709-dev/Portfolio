import "../css/Post.css";

export default function Post({ picture_path, title, desc, path_to_post }) {
  return (
    <a href={path_to_post} id="post-teleporter" target="_blank">
      <div id="post-container">
        <div id="post-pic-wrapper">
          <img src={picture_path} className="post-pic"></img>
        </div>
        <div id="post-info">
          <div className="post-name">{title}</div>
          <div className="post-desc">{desc}</div>
        </div>
      </div>
    </a>
  );
}
