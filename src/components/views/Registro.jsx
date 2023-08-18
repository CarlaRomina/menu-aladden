import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearUsuario } from "../helpers/queries";
import swal from "sweetalert2";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    data.perfil = "usuario";
    data.estado = "activo";
    crearUsuario(data).then((respuesta) => {
      if (respuesta.status === 201) {
        localStorage.setItem("usuario", JSON.stringify(respuesta));
        swal.fire("Registro con exito", "Inicía sesion", "success");
        reset();
      } else if (respuesta.status === 401) {
        swal.fire("Ocurrió un error", "Ya existe un usuario con este correo", "error");
      } else {
        swal.fire("Ocurrió un error", "Intente nuevamente más tarde", "error");
      }
    });
  };
  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Text className="fw-bold">Nombre Usuario</Form.Text>
              <Form.Control
                type="text"
                placeholder="Ej: Emanuel"
                maxLength={30}
                {...register("nombreUsuario", {
                  required: "El nombre de usario es obligatorio",
                  minLength: {
                    value: 5,
                    message: "Canntidad mínima de caracteres: 5",
                  },
                  maxLength: {
                    value: 30,
                    message: "Cantidad máxima de caracteres: 30",
                  },
                })}
              />
              <Form.Text className="text-danger fw-bold">{errors.nombreUsuario?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Text className="fw-bold">Email</Form.Text>
              <Form.Control
                placeholder="Ej: example@empresa.com"
                type="email"
                maxLength={60}
                {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 5,
                    message: "Cantidad mínima de caaracteres es 5.",
                  },
                  maxLength: {
                    value: 60,
                    message: "Catidad máxima de caracteres: 60.",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                    message: "El email no cumple el formato Ej: example@empresa.com",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger fw-bold">{errors.email?.message}</Form.Text>
            <Form.Group className="mb-2">
              <Form.Text className="fw-bold">Contraseña</Form.Text>
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                maxLength={8}
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,8}$/,
                    message:
                      "La contraseña debe tener entre 6 y 8 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                  },
                })}
              />
              <Form.Text className="text-danger fw-bold">{errors.password?.message}</Form.Text>
            </Form.Group>
            <div className="row">
              <Button className="btn btn-dark btn-lg btn-block mb-2" type="submit">
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
