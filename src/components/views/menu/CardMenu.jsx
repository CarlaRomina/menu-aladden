import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMenu = ({producto}) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={producto.imagen}
        />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
          <Link className="btn btn-danger me-2" to={`/detalle/${producto._id}`}>Ver detalle</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMenu;