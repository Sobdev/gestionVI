import { Contact } from '../Components/Contact';
import { Navigation } from '../Components/Navigation';
import { Services } from '../Components/Services';
import { ServiceBoxes } from '../Components/ServicesBoxes';
import { Hero } from '../components/HeroHome';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navigation />

      <main className="flex-grow">

        <Hero
          title='Estás en '
          titleColored='GestionVI'
          subtitle='Tu gestoría de confianza para resolver todos los trámites de tráfico'
          showBackground={true}
          // Buttton inside HeroHome component
          showButton={true}
          textButton='Solicitar información'
          linkButton='mailto:hernandez@gestionvi.com' />
        <Services />
        <ServiceBoxes />
        <Contact />

      </main>

    </div>
  );
}