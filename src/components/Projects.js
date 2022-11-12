import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import NeedJob from "../assets/img/NeedJob.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

import React, { useState } from "react";
const Projects = (props) => {
  const projects = [
    {
      title: "Need job project",
      description: "Using Django  and Bootstrap",
      imgUrl: NeedJob,
      url: "#",
      urlInGithub: "https://github.com/ZakariaZhlat125/NeedJobProject",
      totalDescription:"An open source online job portable using Django Using this project, you can search for jobs if you are a researcher and you can post job opportunities and the system proposes job opportunities similar to those you searched for and send notifications of job opportunities similar to the skills you added to your profile"
    }

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Some Text</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills md-5 mb-5 justfiy-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">FullStack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Backend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Front End</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} pro={project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>sometext</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>sometext</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
