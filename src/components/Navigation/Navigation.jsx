import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { ContactLinks } from '../ContactLinks/ContactLinks';

export const NavigationUser = () => {
    return (
        <Navbar expand="md" bg="black" variant="dark" className="p-2">
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        src="/src/assets/react.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="BrandLogo"
                    />
                    {' '}
                    <span className="text-white">
                        GestionVI
                    </span>
                </Navbar.Brand>

                {/* Botón para abrir el menú colapsable */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="text-white" href="#home">Servicios</Nav.Link>
                    </Nav>

                    {/* Sección de iconos que se muestra en el menú colapsable y en pantallas grandes */}
                    <div className="ms-auto">
                        <ContactLinks />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
