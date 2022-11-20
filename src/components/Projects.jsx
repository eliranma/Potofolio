import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import {
  MusicPlayerImage,
  EliranFashionImage,
  CalculatorImg,
  GithubImage,
  SequelizeProject,
} from "../assets";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const reactProjects = [
    {
      title: "Eliran's Fashion",
      description:
        "E-commerce using #React, #Styled-Components, #Firebase, #Redux",
      imgUrl: EliranFashionImage,
    },
    {
      title: "Music Player",
      description:
        "Demo Music Player with a small ws for fetching data from an api, Can Search for real music, real live Progress Bar controlled by buttons or song pick. Using #React-Native",
      imgUrl: MusicPlayerImage,
    },
    {
      title: "Calculator",
      description: "A Simple Calculator using #React #CSS",
      imgUrl: CalculatorImg,
    },
  ];
  const nodejsProjects = [
    {
      title: "Sequlize-ExpressJS-WS",
      description:
        "A ws for CRUD'ing from a MySQL DB, Using Sequlize for modeling data-tables.",
      imgUrl: SequelizeProject,
    },
    {
      title: "Music Player",
      description:
        "Demo Music Player with a small ws for fetching data from an api, Can Search for real music, real live Progress Bar controlled by buttons or song pick. Using #React-Native",
      imgUrl: GithubImage,
    },
    {
      title: "MySQL-Flask-WS",
      description:
        "A ws installed on server to acheive simple and secured communication between a front-end client to DB records",
      imgUrl: GithubImage,
    },
  ];
  const pythonProjects = [
    // {
    //   title: "Eliran's Fashion",
    //   description:
    //     "E-commerce using #React, #Styled-Components, #Firebase, #Redux",
    //   imgUrl: GithubImage,
    // },
    {
      title: "Python.NET-Flask-WS",
      description:
        "A ws installed on server Using Python.NET for importing C# Classes and functions.",
      imgUrl: GithubImage,
    },
    {
      title: "MySQL-Flask-WS",
      description:
        "A ws installed on server to acheive simple and secured communication between a front-end client to DB records",
      imgUrl: GithubImage,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    During the study process, I made few projects in each one of
                    my skills, to improve the classes I've learned, and improve
                    my knowledge with those libraries or programming languages.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="React">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="React">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Python">Python</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="NodeJS">NodeJS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="React">
                        <Row>
                          {reactProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Python">
                        <Row>
                          {pythonProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="NodeJS">
                        <Row>
                          {nodejsProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/** <img className="background-image-right" src={colorSharp2}></img> **/}
    </section>
  );
};

export default Projects;
