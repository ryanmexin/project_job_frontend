import React from "react";
import "./About.css";

const About = () => {
  return (
      <main className="about__container">
        <h2 >About the Author</h2>
        <hr className="about__divider" />
        <h3 className="about__name">Ryan Mexin</h3>
        <h4 className="about__skills-title">Skills/Programming Languages</h4>
        <ul className="about__skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Google Cloud</li>
        </ul>
        <hr className="about__divider" />
        <p className="about__information">
        As a new software engineer from Tripleten, I am passionate about
          crafting clean and efficient code. My skills span a range of
          technologies, including HTML, CSS, JavaScript, Node.js, Express.js,
          Git, GitHub, and Google Cloud. Also shown in the list above.
        </p>
      </main>
    
  );
};

export default About;
