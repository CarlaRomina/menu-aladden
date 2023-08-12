import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearMenu from "../views/menu/CrearMenu";
import EditarMenu from "../views/menu/EditarMenu";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />}></Route>
        <Route exact path="/crear-menu" element={<CrearMenu />}></Route>
        <Route exact path="/editar-menu" element={<EditarMenu />}></Route>
      </Routes>
    </>
  );
};
export default RutasAdministrador;
