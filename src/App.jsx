
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Registro from "./components/views/Registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}; 
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
    <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      {/* <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route exact path="/detalle" element={<DetalleMenu></DetalleMenu>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/editar-menu" element={<EditarMenu></EditarMenu>}></Route>
        <Route exact path="/administrador/crear-menu" element={<CrearMenu></CrearMenu>}></Route>
        
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes> */}
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
