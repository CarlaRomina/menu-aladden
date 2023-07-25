import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultaBorrarMenu, consultaListaMenu } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Menu from "../../common/Navbar";


const ItemReceta = ({menu,setMenu}) => {

  const borrarMenu = ()=>{
    Swal.fire({
      title: `¿Esta seguro de borrar el menú ${menu.nombreMenu}?`,
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        
        consultaBorrarMenu(menu.id).then((respuesta)=>{
          console.log(respuesta);
          if(respuesta.status === 200){
            Swal.fire(
              'RMenú eliminado',
              `El ${menu.nombreMenu} fue eliminado correctamente`,
              'success'
            );
            
            consultaListaMenu().then((respuesta)=> setMenu(respuesta))
          }else{
            Swal.fire(
              'Ocurrio un error',
              `Intente realizar esta operación nuevamente mas tarde`,
              'success'
            )
          }
        })
        
      }
    })
  }

   return (
    <tr>
      {/* <td>{props.receta._id}</td> */}
      <td>{menu.id}</td>
      <td>{menu.nombreMenu}</td>
      <td>${menu.precio}</td>
      <td>{menu.imagen}</td>
      <td>{menu.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={'/adminastrador/editar-menu/'+ menu.id}>Editar</Link>
        <Button variant="danger" onClick={borrarMenu}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemMenu;