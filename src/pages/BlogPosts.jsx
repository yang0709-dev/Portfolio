import Post from "../components/Post";
import "../css/BlogPosts.css";

export default function BlogPosts() {
  return (
    <>
      <div id="blogs-container">
        <div id="blogs-title">Blogs</div>
        <div id="blogs-wrapper">
            <Post picture_path='/first.png' title='Instadf' desc='test' path_to_post='/First'></Post>
        </div>
      </div>
    </>
  );
}
