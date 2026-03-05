import "./project.css";

import weatherImg from "../../assets/weather-app.jpeg";
import taskImg from "../../assets/task.jpeg";
import calculatorImg from "../../assets/calu.png";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">

        {/* Weather App */}
        <div className="project-card">
          <img src={weatherImg} alt="Weather App" />
          <h3>Weather App</h3>
          <p>Beginner project using HTML, CSS & JavaScript.</p>
          <a href="#" className="project-btn">View Project</a>
        </div>

        {/* Task Manager */}
        <div className="project-card">
          <img src={taskImg} alt="Task Manager" />
          <h3>Task Manager</h3>
          <p>Simple task manager to add and delete tasks.</p>
          <a href="#" className="project-btn">View Project</a>
        </div>

        {/* Calculator */}
        <div className="project-card">
          <img src={calculatorImg} alt="Calculator" />
          <h3>Calculator</h3>
          <p>Basic calculator built with JavaScript.</p>
          <a href="#" className="project-btn">View Project</a>
        </div>

      </div>
    </section>
  );
}