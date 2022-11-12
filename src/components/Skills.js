import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      <Container>
        <Row className="mb-5">
          <div className="skill-box">
            <Col>
              <p>Backend</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Django Rest frame work</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>MySQL </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>MongoDB </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>FireBase</h5>
                </div>
              </Carousel>
            </Col>
            <Col>
              <p>Front End </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Html |Html5</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>CSS | Css3</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>React hook,redux</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Bootstrap </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Tailwind css</h5>
                </div>
              </Carousel>
            </Col>
          </div>
        </Row>
        <Row>
          <Col xs={5}>
            <h3>Devopes</h3>
            <p className="ms-3"> Git VCS | GitHub |Gitlab</p>
            <p className="ms-3"> Windows CMD | Linux Terminal </p>
          </Col>
          <Col xs={4}>
            <br />
            <p className="ms-3">Docker</p>
            <p className="ms-3">CI/CD</p>
          </Col>
          <Col xs={3}>
            <br />
            <p className="ms-3">Communication Skills</p>
            <p className="ms-3">Team Working</p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
