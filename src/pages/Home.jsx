import { useState } from 'react';
import { Contact } from '../Components/Contact';
import { Navigation } from '../Components/Navigation';
import { Services } from '../Components/Services';
import { ServiceBoxes } from '../Components/ServicesBoxes';
import { Hero } from '../components/HeroHome';
import { FeaturesExplained } from '../components/FeaturesExplained';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navigation />

      <main className="flex-grow">
        <Hero
          title='Estás en '
          titleColored='GestionVI'
          subtitle='Tu gestoría de confianza para resolver todos los trámites de tráfico'
          showBackground={true}
          showButton={true}
          textButton='Solicitar información'
          onClickButton={handleShowModal}
        />
        <Services />
        <ServiceBoxes />
        <Contact />
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Nuestros Servicios</h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>X</button>
            </div>
            <div className="p-4">
              <FeaturesExplained />
            </div>
            <div className="p-4 border-t text-right">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleCloseModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};