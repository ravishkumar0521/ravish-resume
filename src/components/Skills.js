import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillsLeft = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "Bootstrap", value: 85 },
    { name: "JavaScript", value: 75 },
  ];

  const skillsRight = [
    { name: "PHP", value: 80 },
    { name: "WordPress Developer", value: 90 },
    { name: "Shopify", value: 65 },
    { name: "Wix", value: 70 },
  ];

  const renderSkill = (skill) => (
    <div className="progress" key={skill.name}>
      <span className="skill">
        <span>{skill.name}</span> <i className="val">{skill.value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={skill.value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${skill.value}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">{skillsLeft.map(renderSkill)}</div>
          <div className="col-lg-6">{skillsRight.map(renderSkill)}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
