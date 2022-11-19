import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getAge } from "../utils/utils";
import { ReactIcon, ReactNativeIcon, NodeJSIcon, PythonIcon } from "../assets";

const Banner = () => {
  // CONSTANTS
  const AGE = getAge("03/10/1996");
  const SKILLS = [
    { name: "React JS", icon: ReactIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Node Js", icon: NodeJSIcon },
    { name: "Python", icon: PythonIcon },
  ];
  const INITIAL_DELTA = 400 - Math.random() * 100;

  //STATES
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [delta, setDelta] = useState(INITIAL_DELTA);
  const period = 2000;

  // eslint-disable-next-line
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % SKILLS.length;
    let fullText = SKILLS[i].name;
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (!isDeleting) {
      setImage(SKILLS[i].icon);
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      //   setImage(SKILLS[0].icon)
      setDelta(600);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome To My Portofolio !</span>
            <h1>
              {`Hi I'm a `}
              <span className="txt-rotate">
                <span className="wrap">{text}</span>
              </span>{" Developer"}
            </h1>
            <p>
              My name is Eliran Manzeli I'm {AGE} years old, I'm a junior
              Full-Stack Developer, I lives in Holon city in Israel.
            </p>
            <button onClick={() => console.log("clicked")}>
              Let's Connect !
            </button>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <img src={image} alt="HeaderImage" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
