import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="text-white" href="#features">Contacto</Nav.Link>
                        <Nav.Link className="text-white" href="#pricing">Localización</Nav.Link>
                    </Nav>
                    <Nav.Link href="https://wa.me/34653753291">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            size="2x"
                            className="text-white me-3"
                            alt="WhatsApp"
                        />
                    </Nav.Link>
                    <Nav.Link href="https://maps.app.goo.gl/Fg6SFQh1brXDtzuD7">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            size="2x"
                            className="text-white"
                            alt="Location"
                        />
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
