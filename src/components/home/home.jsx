import "./Home.css";
import profile from "../../assets/profime img.jpeg"; // apni image yahan daalo

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <h3>Hello, I'm</h3>
        <h1>Abdullah GK</h1>
        <h2>Frontend Developer</h2>

        <p>
          I build modern, responsive and user-friendly websites using
          React and latest web technologies.
        </p>

        <div className="buttons">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="/cv.pdf" className="btn secondary" download>
            Download CV
          </a>
        </div>
      </div>

      <div className="home-right">
        <img src={profile} alt="Abdullah" />
      </div>
    </section>
  );
}