import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './footer.css';


const Footer = () => {
    return (
        <footer className="uk-container uk-container-expand uk-text-center uk-position-relative">
            <hr/>
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.t.me/defffoo/" className="social-link" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={ faTelegram } size="lg" />
                    </a>
                    <a href="https://www.github.com/mal-mel/" className="social-link" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={ faGithub } size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/oleg-svetovidov/" className="social-link" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={ faLinkedin } size="lg" />
                    </a>
                </div>
                <div className="copyrights">
                    <p>mal_mel @ 2021</p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
