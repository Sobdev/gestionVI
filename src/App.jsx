import { CardBasic } from './components/Cards/Cards';
import { NavigationUser } from './components/Navigation/Navigation';
import { Image, Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <NavigationUser />
      <div className="position-relative overflow-hidden">
        <Image
          src="https://www.gestioncolaborativa.es/img/trafico/matriculaciones-portada.jpg"
          alt="Banner"
          className="img-fluid mx-auto d-block bg-white"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </div>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={5}>
            <CardBasic
              title="¿Quiénes somos?"
              text="Somos una Gestoría de Coslada" />
          </Col>
          <Col xs={12} md={4} lg={5}>
            <CardBasic
              title="Nuestros servicios"
              text="Gestionamos la matriculación de tu flota de furgonetas o tu turismo personal."
              showButton={true}
              buttonText="Ver más información"
              variant="info" />
          </Col>
          <Col xs={12} md={4} lg={2}>
            <CardBasic
              title="Contáctanos"
              showLinks={true} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <CardBasic
              title="Horario"
              text="L - V 9:00 - 18:00" />
          </Col>
          <Col xs={12} md={8} lg={8}>
            <CardBasic
              title="Cómo llegar"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Quisquam, doloremque." />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <CardBasic
              title="Card 1"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Quisquam, doloremque." />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;