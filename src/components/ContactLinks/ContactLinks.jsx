import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';

export const ContactLinks = () => {
    return (
        <Nav className="p-0">
            <Nav.Link href="https://wa.me/34653753291">
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2x"
                    className="text-white"
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
        </Nav>
    )
}