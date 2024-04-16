import PropTypes from "prop-types";
import "./Heroimg.css";

const Heroimg = ({ src, altText }) => {
    return (
        <section>
            <figure className="heroImg_container">
                <img className="heroImg" src={src} alt={altText} />
            </figure>
        </section>
    );
};

// Define prop types
Heroimg.propTypes = {
    src: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};

export default Heroimg;
