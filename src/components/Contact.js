import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact US" />
          </Col>
          <Col md={6}>
            <h2>To Connect</h2>
            <Row>
              <h4>phone : <span className="text-size"><a>+963932125123</a></span></h4>
              <h4>Gmail : <span className="text-size">zakooorr1567@gmail.com</span></h4>
              
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
