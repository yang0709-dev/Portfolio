import "../css/Projects.css"
import Post from "../components/Post";

export default function Projects() {
  return (
    <div className="project-container">
      <div id="blogs-title">Projects</div>
      <div id="blogs-wrapper">
        <Post picture_path="/habit.png" title="Habit Tracker" desc='This project was created with react js and it helps you to keep track of your habits and make beautiful graphs.' path_to_post='https://github.com/yang0709-dev/Habit-Tracker'></Post>
        <Post picture_path="/habit.png" title="Habit Tracker" desc='This project was created with react js and it helps you to keep track of your habits and make beautiful graphs.' path_to_post='https://github.com/yang0709-dev/Habit-Tracker'></Post>
        <Post picture_path="/habit.png" title="Habit Tracker" desc='This project was created with react js and it helps you to keep track of your habits and make beautiful graphs.' path_to_post='https://github.com/yang0709-dev/Habit-Tracker'></Post>
      </div>
    </div>
  );
}
