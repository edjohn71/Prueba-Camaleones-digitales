import React from 'react';
import { Home, Building, MapPin } from 'lucide-react';
import './UseCases.css';

const cases = [
  {
    icon: <Home size={40} />,
    title: "Casa Campestre en Llanogrande",
    industry: "Vendida en 20 días",
    desc: "Propiedad de estrato alto con más de un año en el mercado con otras inmobiliarias. Implementamos tour 360º y logramos cierre a precio full."
  },
  {
    icon: <Building size={40} />,
    title: "Penthouse El Poblado, Medellín",
    industry: "Récord de Cierre",
    desc: "Captamos compradores de inversión extranjera a través de campañas digitales específicas. Negociación en dólares en tiempo récord."
  },
  {
    icon: <MapPin size={40} />,
    title: "Lote Comercial en Bogotá",
    industry: "Venta B2B Exclusiva",
    desc: "Conectamos con desarrolladores y constructoras usando nuestra red privada. Cerramos una de las transacciones más grandes del trimestre."
  }
];

const UseCases = () => {
  return (
    <section id="cases" className="section cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Casos de <span className="gradient-text">Éxito en Colombia</span></h2>
          <p className="section-subtitle">Conoce historias reales de propietarios que depositaron su confianza en nuestra estrategia de venta.</p>
        </div>

        <div className="cases-grid">
          {cases.map((useCase, idx) => (
            <div key={idx} className="case-card glass-card">
              <div className="case-header">
                <div className="case-icon text-primary">{useCase.icon}</div>
                <div className="case-meta">
                  <span className="case-industry">{useCase.industry}</span>
                  <h3 className="case-title">{useCase.title}</h3>
                </div>
              </div>
              <p className="case-desc">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
