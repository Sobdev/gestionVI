import { NavigationUser } from './components/Navigation/Navigation';
import { Image } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <div className="Navbar">
        <NavigationUser />
      </div>
      <div className="container">
        <Image
          src="https://transporte3.com/wp-content/uploads/2024/01/Faconauto-camiones-1000x454.webp"
          alt="Banner"
          className="img-fluid mx-auto d-block mb-2"
        />
      </div>
    </>
  );
}

export default App;