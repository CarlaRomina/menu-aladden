import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { consultaMenu } from "../helpers/queries";
import Swal from "sweetalert2";

const DetalleMenu = () => {
  const {id} = useParams();
  const [producto, setProducto]= useState({});
  useEffect(()=>{
    consultaMenu(id).then((respuesta)=>{
      if(respuesta){
        setProducto(respuesta);
      }else{
        Swal.fire(
          "Ocurrio un erros",
          "Intente esta operacion en unos minutos",
          "error"
        )
      }
    })
  },[])
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
                {producto.detalle}
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> {producto.categoría}
              <br />
              <span className="text-danger fw-semibold ">Precio:</span>${producto.precio}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleMenu;
