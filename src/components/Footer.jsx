import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="title-social-media">
        <h3>Seguimos en Contacto!</h3>
        <div className="social-media">
          <a
            href="https://www.instagram.com/saviacerveza/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-media-item">
              <BsInstagram />
            </div>
          </a>
          <Link to="/contacto">
            <div className="social-media-item">
              <AiOutlineMail />
            </div>
          </Link>
          <a href="https://wa.me/56952321116?text=Hola! Me interesan sus cervezas artesanales" target="_blank" rel="noreferrer">
            <div className="social-media-item">
              <BsWhatsapp />
            </div>
          </a>
        </div>
      </div>

      <div className="terms-copyright">
        <p>BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS</p>
        <p>Copyright ©Cerveza Savia 2022. Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
