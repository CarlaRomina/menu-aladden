import { Col, Card, Button } from "react-bootstrap";

const CardMenu = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card.Body>
          <Card.Title>Lomo de cerdo</Card.Title>
          <Card.Text>A las finas hierbas</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMenu;