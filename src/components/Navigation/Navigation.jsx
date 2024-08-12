import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { ContactLinks } from '../ContactLinks/ContactLinks';

export const NavigationUser = () => {
    return (
        <Navbar expand="md" bg="black" variant="dark" className="p-2">
            {/* Expand md determines the breakpoint in to medium(md) >= 768px */}
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

                {/* Button to open the Navbar */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ms-auto aligns everthing to the left */}
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="text-white" href="#home">Servicios</Nav.Link>
                    </Nav>
                    <div className="ms-auto">
                        <ContactLinks />
                    </div>

                    {/* Regular Navbar with every interaction */}
                    {/* ms-auto aligns everthing to the right */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
