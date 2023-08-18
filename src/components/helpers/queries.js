const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLMenu = import.meta.env.VITE_API_PRODUCTO;

export const crearUsuario = async (usuario) => {
  try {
    const usuarioNuevo = await fetch(`${URLUsuario}/nuevo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return usuarioNuevo
  } catch (error) {
    return null;
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(`${URLUsuario}/`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario)
    });
      const datos = await respuesta.json();
      return{
        status: respuesta.status,
        usuario: datos.usuario
      }
  } catch (error) {
    return null;
  }
};

/*
GET obtener un listado de elementos o un elemento
POST crear un elemento nuevo en la BD
PUT / PATCH editar un elemento nuevo en la BD
DELETE borra un elemento de la BD 
*/

export const consultaListaMenu = async () => {
  try {
    const respuesta = await fetch(URLMenu);
    const listaMenu = await respuesta.json();
    return listaMenu;
  } catch (error) {
    console.log(error);
  }
};
export const consultaMenu = async (id) => {
  try {
    const respuesta = await fetch(URLMenu + "/" + id);
    const menu = await respuesta.json();
    return menu;
  } catch (error) {
    console.log(error);
  }
};

export const consultaBorrarMenu = async (id) => {
  try {
    const respuesta = await fetch(`${URLMenu}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const consultaAgregarMenu = async (menu) => {
  try {
    const respuesta = await fetch(URLMenu, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menu),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const consultaEditarMenu = async (menu, id) => {
  try {
    const respuesta = await fetch(URLMenu + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menu),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
