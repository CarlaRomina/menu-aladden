import { Container, Row } from "react-bootstrap";
import CardMenu from "./menu/CardMenu";
const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/15318488/pexels-photo-15318488/free-photo-of-comida-especias-ingredientes-fotografia-de-comida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Plato arabe tradicional"
      />
      <Container>
        <h1 className="display-4">Nuestros platos</h1>
        <hr />
        <Row>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;