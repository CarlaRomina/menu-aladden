
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Error404 from "./components/views/Error404";
import Footer from "./components/common/Footer";
import Login from "./components/views/Login";
import Inicio from "./components/views/Inicio";
import Registro from "./components/views/Registro";
import DetalleMenu from "./components/views/DetalleMenu";
import CrearMenu from "./components/views/menu/CrearMenu";
import EditarMenu from "./components/views/menu/EditarMenu";
import Administrador from "./components/views/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuP from "./components/common/MenuP";


function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}; 
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
    <MenuP usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></MenuP>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route exact path="/detalle/:id" element={<DetalleMenu></DetalleMenu>}></Route>
        <Route exact path="/administrador/*" element={<Administrador></Administrador>}></Route>
        
        {/* <Route path="*" element={<Error404></Error404>}></Route> */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
