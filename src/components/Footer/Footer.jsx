import "./Footer.css";
import { Link } from "react-router-dom";
import Fb from "../../assets/facebook-logo.png";
import Twitter from "../../assets/twitter-logo.png";
import LinkedIn from "../../assets/linkedIn-logo.png"
import Instagram from "../../assets/Instagram-logo.png"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>For Business</h4>
            <Link to="/employer" className="footer-link">
              <p>Employer</p>
            </Link>
            <Link to="/healthplan" className="footer-link">
              <p>Health plan</p>
            </Link>
            <Link to="/individual" className="footer-link">
              <p>Individual</p>
            </Link>
          </div>
          <div className="sb_footer-links-div">
            <h4>Ressources</h4>
            <Link to="/resource" className="footer-link">
              <p>Resource center</p>
            </Link>
            <Link to="/testimonials" className="footer-link">
              <p>Testimonials</p>
            </Link>
            <Link to="/stv" className="footer-link">
              <p>STV</p>
            </Link>
          </div>
          <div className="sb_footer-links-div">
            <h4>Partners</h4>
            <Link to="/partners" className="footer-link">
              <p>Swing tech</p>
            </Link>
          </div>
          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <Link to="/about" className="footer-link">
              <p>About</p>
            </Link>            
            <Link to="/press" className="footer-link">
              <p>Press</p>
            </Link>            
            <Link to="/contact" className="footer-link">
              <p>Contact</p>
            </Link>
          </div>
          <div className="sb_footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p><img src={Fb} alt="facebook" /></p>
              <p><img src={Twitter} alt="Twitter" /></p>
              <p><img src={LinkedIn} alt="LinkedIn" /></p>
              <p><img src={Instagram} alt="Instagram" /></p>
            </div>
          </div>
        </div>

      <hr></hr>
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>
            @{new Date().getFullYear()} Kradsbørstig. All rights reserved
          </p>
        </div>
        <div className="sb_footer-below-link">
        <Link to="/terms" className="footer-link">
              <p>Terms & Conditions</p>
            </Link>
        <Link to="/terms" className="footer-link">
              <p>Privacy</p>
            </Link>
        <Link to="/terms" className="footer-link">
              <p>Security</p>
            </Link>
        <Link to="/terms" className="footer-link">
              <p>Cookie declaration</p>
            </Link>
        </div>
      </div>
      </div>
    </div>
  );
};
