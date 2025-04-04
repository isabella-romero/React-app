import './AboutMe.css';
import me from '../assets/images/me.png';


function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img
        src={me}
        alt="My photo"
        // style={{ width: '250px', borderRadius: '50%' }}
        className="img-style"
      />
      <div>
      <p id= "aboutMe">Hello! My name is Isabella Romero, and I am a web developer specializing in modern JavaScript. I also include building interactive applications with React, plus have a solid grasp of HTML, CSS, and SQL, which I find creates a smoother front-end experience to manage data efficiently. No matter what project I am working on whether it is a clean UI, or structuring a database for performance, I enjoy seeing everything come together. </p>
      </div>
    </section>
  );
}

export default AboutMe;
