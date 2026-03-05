import "./Blog.css";

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="blog-title">My Latest Projects</h2>

      <div className="blog-container">

        {/* Weather App */}
        <div className="blog-card">
          <span className="tag">React Project</span>
          <h3>Weather Application</h3>
          <p>
            A modern weather app that shows real-time temperature,
            humidity and wind speed using API integration.
          </p>
          <div className="blog-buttons">
            <a href="#" className="btn live">Live Demo</a>
            <a href="#" className="btn code">Source Code</a>
          </div>
        </div>

        {/* Task Manager */}
        <div className="blog-card">
          <span className="tag">Productivity</span>
          <h3>Task Manager</h3>
          <p>
            A powerful task manager app to organize daily tasks
            with add, delete and update functionality.
          </p>
          <div className="blog-buttons">
            <a href="#" className="btn live">Live Demo</a>
            <a href="#" className="btn code">Source Code</a>
          </div>
        </div>

        {/* Calculator */}
        <div className="blog-card">
          <span className="tag">JavaScript</span>
          <h3>Calculator App</h3>
          <p>
            A responsive calculator built using JavaScript
            with clean UI and smooth user interaction.
          </p>
          <div className="blog-buttons">
            <a href="#" className="btn live">Live Demo</a>
            <a href="#" className="btn code">Source Code</a>
          </div>
        </div>

      </div>
    </section>
  );
}