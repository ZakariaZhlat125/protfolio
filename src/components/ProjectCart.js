import { Button, Card, Col, ModalTitle } from "react-bootstrap";
import Modal from "./Modal";
export const ProjectCart = ({ project, onClose }) => {
  return (
    <Modal>
      <Card className="border-0  text-black">
        <Card.Header className="mb-2">
          <h2>{project.title}</h2>
        </Card.Header>
        <Card.Img
          style={{ width: "18rem" }}
          variant="top"
          src={project.imgUrl}
        />

        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>
            <p>{project.totalDescription}</p>
          </Card.Text>
          <Card.Link className="m-2" href="#">
            Link
          </Card.Link>
          <Card.Link className="m-2" href={project.urlInGithub}>
            Url in github
          </Card.Link>
          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={onClose}>
              Close
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Modal>
  );
};
