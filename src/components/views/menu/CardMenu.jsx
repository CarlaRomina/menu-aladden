import { Col, Card, Button } from "react-bootstrap";

const CardMenu = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src=""
        />
        <Card.Body>
          <Card.Title>Shawarma mixto</Card.Title>
          <Card.Text>Con salsa de ajo</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMenu;