import { CardBasic } from './components/Cards/Cards';
import { NavigationUser } from './components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <NavigationUser />
      <div className="relative overflow-hidden">
        <img
          src="https://www.gestioncolaborativa.es/img/trafico/matriculaciones-portada.jpg"
          alt="Banner"
          className="w-full h-48 object-cover bg-white"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardBasic
            title="¿Quiénes somos?"
            text="Somos una Gestoría de Coslada"
          />
          <CardBasic
            title="Nuestros servicios"
            text="Gestionamos la matriculación de tu flota de furgonetas o tu turismo personal."
            showButton={true}
            buttonText="Ver más información"
            variant="blue"
          />
          <CardBasic
            title="Contáctanos"
            showLinks={true}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <CardBasic
            title="Horario"
            text="L - V 9:00 - 18:00"
          />
          <CardBasic
            title="Cómo llegar"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque."
          />
        </div>
        <div className="mt-8">
          <CardBasic
            title="Card 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque."
          />
        </div>
      </div>
    </>
  );
}

export default App;