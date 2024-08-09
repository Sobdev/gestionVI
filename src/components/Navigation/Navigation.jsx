import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function Navigation() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/src/assets/react.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}