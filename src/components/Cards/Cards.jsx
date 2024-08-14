import { ContactLinks } from "../ContactLinks/ContactLinks";
import PropTypes from 'prop-types';

export const CardBasic = ({
    title = '',
    text = '',
    buttonText = '',
    variant = 'blue',
    showButton = false,
    showLinks = false,
}) => {
    const buttonClasses = `bg-${variant}-500 hover:bg-${variant}-700 text-white font-bold py-2 px-4 rounded`;

    return (
        <div className="p-3 mb-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div>
                <h5 className="text-xl font-semibold mb-2">
                    {title}
                </h5>
                <p className="text-gray-700 mb-4">
                    {text}
                </p>
                {showButton && (
                    <button className={buttonClasses}>
                        {buttonText}
                    </button>
                )}
                {showLinks && (
                    <ContactLinks />
                )}
            </div>
        </div>
    );
}

CardBasic.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    variant: PropTypes.string,
    showButton: PropTypes.bool,
    showLinks: PropTypes.bool,
}