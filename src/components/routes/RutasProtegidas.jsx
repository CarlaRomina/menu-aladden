import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children, usuario }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  if (usuario.perfil === "administrador") {
    return children;
  } else if (usuario.perfil === "usuario") {
    return <Navigate to={"/"} />;
  } else {
    return <Navigate to={"/registro"} />;
  }
};

export default RutasProtegidas;
