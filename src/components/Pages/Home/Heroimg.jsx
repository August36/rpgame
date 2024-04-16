import React from "react";
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

export default Heroimg;
