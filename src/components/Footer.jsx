import "../styles/footer.scss";
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="title-social-media">
        <h3>Seguimos en Contacto!</h3>
        <div className="social-media">
          <div className="social-media-item"><BsInstagram/></div>
          <div className="social-media-item"><AiOutlineMail/></div>
          <div className="social-media-item"><BsWhatsapp/></div>
        </div>
      </div>

      <div className="terms-copyright">
        <p>BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS</p>
        <p>
          Copyright ©Cerveza Savia 2022. Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
