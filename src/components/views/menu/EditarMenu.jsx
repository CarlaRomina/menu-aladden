import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { consultaEditarMenu, consultaMenu } from "../../helpers/queries";
import Swal from "sweetalert2";


const EditarMenu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const {id} = useParams();
  const navegacion = useNavigate()
  useEffect(()=>{
    consultaMenu(id).then((respuesta)=>{
      if(respuesta){
        console.log('tengo que cargar el objeto en el formulario')
        console.log(respuesta);
        setValue('nombreProducto', respuesta.nombreMenu);
        setValue('precio', respuesta.precio);
        setValue('imagen', respuesta.imagen);
        setValue('categoría', respuesta.categoria);
        setValue('estado',respuesta.estado);
      }else{
        Swal.fire('Ocurrio un error', `No se puede editar el menú, intentelo mas tarde`, 'error');
      }
    })
  }, [])

  const onSubmit = (menuEditado) => {
    console.log(menuEditado);
   consultaEditarMenu(menuEditado, id).then((respuesta)=>{
    if(respuesta && respuesta.status === 200){
      Swal.fire('Menú editado', `El menú ${menuEditado.nombreMenu} fue editado correctamente`, 'success');
      navegacion('/administrador');
    }else{
      Swal.fire('Ocurrio un error', `El menú ${menuEditado.nombreMenu} no fue editado, intentelo mas tarde`, 'error');
    }
   })
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Menú</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreMenu">
          <Form.Label>Menú*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Falafel"
            {...register("nombreMenu", {
              required: "El nombre del menú es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad máxima de caracteres es de 100 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreMenu?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="$2100"
            {...register("precio", {
              required: "El precio del menú es obligatorio",
              min: {
                value: 3,
                message: "El precio minimo es de $300",
              },
              max: {
                value: 10000,
                message: "El precio máximo es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La imagen es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Plato frio</option>
            <option value="bebida fria">Plato Caliente</option>
            <option value="dulce">Sin tacc</option>
            <option value="salado">Postres</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
            
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarMenu;