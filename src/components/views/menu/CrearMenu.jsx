import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaAgregarMenu } from "../../helpers/queries";
import Swal from "sweetalert2";


const CrearMenu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (menuNuevo) => {
    consultaAgregarMenu(menuNuevo).then((respuestaCreated)=>{
      if(respuestaCreated && respuestaCreated.status === 201){
        Swal.fire('Producto creado', `El producto ${menuNuevo.nombreMenu} fue creado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Ocurrio un error', `El menú ${menuNuevo.nombreMenu} no fue creado, intentelo mas tarde`, 'error');
      }
    })
   
  };

  
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo menú</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombrePlato">
          <Form.Label>Menú</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Arroz Persa"
            maxLength={50}
            {...register("nombrePlato", {
              required: "El nombre del plato es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 50,
                message: "La cantidad máxima de caracteres es de 50 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombrePlato?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 400"
            {...register("precio", {
              required: "El precio del menú es obligatorio",
              min: {
                value: 300,
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
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://ejemplo.com/imagen_falafel.jpg"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern:{
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|svg)$/,
                message: "La imagen debe tener una url valida, terminada en (png/jpg/jpeg/svg)"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="plato caliente">Plato caliente</option>
            <option value="plato frio">Plato frio</option>
            <option value="sin tacc">Sin tacc</option>
            <option value="postres">Postres</option>
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

export default CrearMenu;