import { ContactLinks } from '../ContactLinks/ContactLinks';
import { Link } from 'react-router-dom';

export const NavigationUser = () => {
    return (
        <nav className="bg-black p-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="#home" className="flex items-center">
                    <img
                        src="/src/assets/react.svg"
                        width="30"
                        height="30"
                        className="inline-block align-top"
                        alt="BrandLogo"
                    />
                    <span className="text-white ml-2">GestionVI</span>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="#home" className="text-white hover:text-gray-300">Inicio</Link>
                    <Link to="#services" className="text-white hover:text-gray-300">Servicios</Link>
                </div>
                <div className="ml-auto">
                    <ContactLinks />
                </div>
            </div>
        </nav>
    );
}