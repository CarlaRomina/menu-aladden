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
    consultaAgregarMenu(menuNuevo).then((respuesta) => {
      console.log(menuNuevo);
      if (respuesta && respuesta.status === 201) {
        Swal.fire("Producto creado", `El producto ${menuNuevo.nombreProducto} fue creado correctamente`, "success");
        reset();
      } else {
        Swal.fire("Ocurrio un error", `El menú ${menuNuevo.nombreProducto} no fue creado, intentelo mas tarde`, "error");
      }
    });
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
            {...register("nombreProducto", {
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
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionPlato">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={4}
            maxLength={500}
            placeholder="Ingrese una descripción para dar más detalles sobre el producto..."
            {...register("detalle", {
              required: "Debe ingresar una descripción del producto",
              minLength: {
                value: 10,
                message: "Cantidad mínima de caracteres: 10",
              },
              maxLength: {
                value: 500,
                message: "Cantidad máxima de caracteres: 500",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.detalle?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            inputMode="numeric"
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
          <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Ej: https://ejemplo.com/imagen_falafel.jpg"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|svg)$/,
                message: "La imagen debe tener una url valida, terminada en (png/jpg/jpeg/svg)",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            {...register("categoría", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="plato caliente">Plato caliente</option>
            <option value="plato frio">Plato frio</option>
            <option value="sin tacc">Sin tacc</option>
            <option value="postres">Postres</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoría?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Select
            {...register("estado", {
              required: "El estado es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="disponible" > Disponible</option>
            <option value="agotado" > Agotado</option>
            <option value="oferta" > Oferta</option>
            <option value="descatalogado" > Descatalogado</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.estado?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearMenu;
