import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export const ContactLinks = ({ color = "text-white" }) => {
    return (
        <div className="flex space-x-4">
            <a href="https://wa.me/34653753291" className="hover:text-green-500">
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2x"
                    className={color}
                    alt="WhatsApp"
                />
            </a>
            <a href="https://maps.app.goo.gl/Fg6SFQh1brXDtzuD7" className="hover:text-red-500">
                <FontAwesomeIcon
                    icon={faLocationDot}
                    size="2x"
                    className={color}
                    alt="Location"
                />
            </a>
        </div>
    );
}

ContactLinks.propTypes = {
    color: PropTypes.string,
}