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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
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
