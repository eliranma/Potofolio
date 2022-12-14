import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ReactIcon,
  ReactNativeIcon,
  NodeJSIcon,
  PythonIcon,
  ExpressJSIcon,
  MongoDBIcon,
  MySQLIcon,
  FlaskIcon,
  SequelizeIcon,
} from "../assets";

const Skills = () => {
  const skills = [
    { name: "React JS", icon: ReactIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "NodeJS", icon: NodeJSIcon },
    { name: "SequelizeJS", icon: SequelizeIcon },
    { name: "ExpressJS", icon: ExpressJSIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Flask", icon: FlaskIcon },
    { name: "MySQL", icon: MySQLIcon },
    { name: "MongoDB", icon: MongoDBIcon },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I start my way on programming with pure html-css-js, <br></br>next I've
                decided to learn #ReactJS for building a cross-platform Web
                Apps.<br></br> The next skill on my list was #NodeJS, I've
                started to build simple WebServices for my apps, <br></br>and keep
                learning more to achieve a better understanding of back-end
                architecture.<br></br>
                I've learned #Python during my IT formal jobs and used it to
                automate daily tasks.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <img src={skill.icon} alt={skill.name + " Image"} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/** <img className="background-image-left" src={colorSharp} alt="Image" /> **/}
    </section>
  );
};

export default Skills;
