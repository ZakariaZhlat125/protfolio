import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <h2 className="text-white"><i>Zakaria</i></h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className=" mt-5 social-icon">
              <a href="https://www.linkedin.com/in/zakaria-zhlat/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/ZakariaZhlat"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/ZakariaZhlat125"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="mb-0">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}