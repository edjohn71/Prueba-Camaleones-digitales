import React from 'react';
import { Mail, ArrowRight, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cta-box glass-card">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para vender tu propiedad?</h2>
            <p className="cta-subtitle">Agenda una llamada de valoración gratuita y descubre el verdadero potencial de tu inmueble en el mercado actual.</p>
          </div>
          <div className="cta-action">
            <button className="btn btn-primary">
              Agendar Valoración <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="neon-text font-bold text-xl">Propiedades</span>Colombia
            <p className="footer-desc mt-2">Marketing inmobiliario de alto impacto para propietarios exigentes.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Navegación</h4>
              <a href="#services">Servicios</a>
              <a href="#process">Proceso</a>
              <a href="#cases">Casos de Éxito</a>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <a href="mailto:contacto@propiedadescolombia.com" className="flex items-center gap-2">
                <Mail size={16} /> contacto@propiedadescolombia.com
              </a>
              <a href="tel:+573136524687" className="flex items-center gap-2">
                <Phone size={16} /> +57 313 652 4687
              </a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Propiedades Colombia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
