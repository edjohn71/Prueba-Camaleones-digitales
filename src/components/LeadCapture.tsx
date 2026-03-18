import React from 'react';
import { Send, Phone } from 'lucide-react';
import './LeadCapture.css';

const LeadCapture = () => {
  return (
    <section id="contact" className="section capture-section">
      <div className="container">
        <div className="capture-container glass-card">
          <div className="capture-content">
            <h2 className="capture-title">Descubre cuánto vale tu propiedad</h2>
            <p className="capture-subtitle">
              Déjanos tus datos y un experto asociado te contactará con un análisis de mercado sin costo y sin compromiso.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>¿Prefieres llamar? +57 313 652 4687</span>
              </div>
            </div>
          </div>
          
          <div className="capture-form-wrapper">
            <form className="capture-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" placeholder="Ej. Juan Pérez" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input type="tel" id="phone" placeholder="+57 313 652 4687" required />
              </div>
              <div className="form-group">
                <label htmlFor="propertyType">Tipo de Propiedad</label>
                <select id="propertyType" required>
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="lote">Lote / Terreno</option>
                  <option value="comercial">Local Comercial</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Solicitar Valoración <Send size={18} />
              </button>
              <p className="form-disclaimer">
                Al enviar aceptas nuestra política de tratamiento de datos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
