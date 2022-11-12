import { useState } from "react";
import { Col } from "react-bootstrap";
import { ProjectCart } from "./ProjectCart";

export const ProjectCard = ({ title, description, imgUrl, pro }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showProjectHandler = () => {
    setCartIsShown(true);
  };

  const hidePojectHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Col size={12} sm={5} md={4}>
      {cartIsShown && <ProjectCart onClose={hidePojectHandler} project={pro} />}
      <div className="proj-imgbx" onClick={showProjectHandler}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
