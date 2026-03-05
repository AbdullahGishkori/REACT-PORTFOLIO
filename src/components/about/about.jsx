import "./about.css";
import profile from "../../assets/profime img.jpeg"; // ya public method use karo

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="Abdullah GK" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I'm Abdullah GK, a passionate Frontend Developer who loves building 
            modern and responsive websites using React and latest web technologies.
          </p>

          <p>
            I focus on clean design, performance and user experience.
            My goal is to create websites that are both beautiful and functional.
          </p>

          <a href="#contact" className="about-btn">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}