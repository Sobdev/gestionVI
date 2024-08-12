import PropTypes from "prop-types";
import "./Cards.css";
import { Card, Button } from "react-bootstrap";
import { ContactLinks } from "../ContactLinks/ContactLinks";

export const CardBasic = ({ title, text, buttonText, variant, showButton, showLinks }) => {
    return (
        <Card className="custom-box p-3 mb-4 border-0 bg-light">
            <Card.Body>
                <Card.Title className="custom-title">
                    {title}
                </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                {/* If its true and... */}
                {showButton && (
                    <Button variant={variant}>{buttonText}</Button>
                )}
                {showLinks && (
                    <ContactLinks />
                )}
            </Card.Body>
        </Card>
    )
}

CardBasic.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    variant: PropTypes.string,
    showButton: PropTypes.bool,
    showLinks: PropTypes.bool,
}

CardBasic.defaultProps = {
    showButton: false,
    showLinks: false,
}