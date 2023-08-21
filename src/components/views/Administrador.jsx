import { Table } from "react-bootstrap";
import ItemMenu from "./menu/ItemMenu";
import { useEffect, useState } from "react";
import { consultaListaMenu } from "../helpers/queries";
import { Link } from "react-router-dom";


const Administrador = () => {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
 consultaListaMenu().then((respuesta)=> {
  setMenu(respuesta);
 })
  }, [])



    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Platos disponibles</h1>
          <Link className="btn btn-primary" to='/administrador/crear-menu'>
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Posicion</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Detalle</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((menu ,index)=> <ItemMenu key={menu.id} posicion={index} menu={menu} setMenu={setMenu}></ItemMenu>)
            }
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;