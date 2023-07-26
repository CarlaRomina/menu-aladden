import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleMenu = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/10273537/pexels-photo-10273537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Arroz Aladden</Card.Title>
              <hr />
              <Card.Text>
              Combinación perfecta entre leche, choclate, café intenso y un toque de canela. Café con granos 100% de arábica brasileña. Todo en una capsula inteligente.
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> Café
              <br />
              <span className="text-danger fw-semibold ">Precio:</span> $1.740,00</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleMenu;
