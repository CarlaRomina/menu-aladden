
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import {Link, NavLink, useNavigate} from 'react-router-dom';

const Navbar = ({usuarioLogueado, setUsuarioLogueado}) => {
const navegacion = useNavigate();

  const logout = ()=>{
    setUsuarioLogueado({});
    sessionStorage.removeItem('usuario');
    navegacion('/');
  }
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>Nuestros platos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={'nav-item nav-link'} to={'/'}>Inicio</NavLink>
            <NavLink end className={'nav-item nav-link'} to={'/registro'}>Registro</NavLink>
            {
              (usuarioLogueado.nombreUsuario)?(
                <>
                <NavLink end className={'nav-item nav-link'} to={'/administrador'}>Administrador</NavLink>
                <Button variant="dark" onClick={logout}>Logout</Button>
                </>
              ): <NavLink end className={'nav-item nav-link'} to={'/login'}>Login</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
