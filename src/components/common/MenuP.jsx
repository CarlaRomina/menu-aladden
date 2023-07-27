
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import {Link, NavLink, useNavigate} from 'react-router-dom';

const MenuP = ({usuarioLogueado, setUsuarioLogueado}) => {
const navegacion = useNavigate();

  const logout = ()=>{
    setUsuarioLogueado({});
    sessionStorage.removeItem('usuario');
    navegacion('/');
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              alt=""
              src="public/lampara.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              size="lg"
              
            />{' '}
            Menú Aladden
          </Navbar.Brand>
        </Container>
      </Navbar>
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

export default MenuP;
