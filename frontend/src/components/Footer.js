
import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Ícones de redes sociais
import '../styles/Footer.module.css'; // Importar o arquivo de estilos
import '../styles/Header.module.css'; // Importar o arquivo de estilos
const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://facebook.com" className="social-icon"><FaFacebookF /></a>
        <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
        <a href="mailto:info@studiobeauty.com" className="social-icon"><FaEnvelope /></a>
      </div>
      <p>© 2024 Studio Beauty Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;