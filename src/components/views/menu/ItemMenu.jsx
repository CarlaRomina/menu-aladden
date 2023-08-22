import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultaBorrarMenu, consultaListaMenu } from "../../helpers/queries";
import { Link } from "react-router-dom";
import MenuP from "../../common/MenuP";

const ItemMenu = ({posicion,menu,setMenu}) => {
  const borrarMenu = ()=>{
    Swal.fire({
      title: `¿Esta seguro de borrar el menú ${menu.nombreProducto}?`,
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {   
        consultaBorrarMenu(menu._id).then((respuesta)=>{
          console.log(respuesta);
          if(respuesta.status === 200){
            Swal.fire(
              'Menú eliminado',
              `El ${menu.nombreProducto} fue eliminado correctamente`,
              'success'
            );
            
            consultaListaMenu().then((respuesta)=> setMenu(respuesta))
          }else{
            Swal.fire(
              'Ocurrio un error',
              `Intente realizar esta operación nuevamente mas tarde`,
              'error'
            )
          }
        })
        
      }
    })
  }

   return (
    <tr>   
      <td>{posicion+1}</td>
      <td>{menu.nombreProducto}</td>
      <td>${menu.precio}</td>
      <td>{menu.detalle}</td>
      <td>{menu.imagen}</td>
      <td>{menu.categoría}</td>
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