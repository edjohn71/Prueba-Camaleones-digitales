import React from 'react';
import { DollarSign, Clock, LayoutDashboard } from 'lucide-react';
import './Benefits.css';

const benefits = [
  {
    icon: <DollarSign size={32} className="benefit-icon" />,
    title: "Venta al Mejor Precio",
    desc: "Negociamos para que obtengas la máxima rentabilidad posible por tu inmueble en el mercado actual."
  },
  {
    icon: <Clock size={32} className="benefit-icon" />,
    title: "Tiempos Récord",
    desc: "Reducimos los tiempos de espera promedio conectándote directo con compradores pre-aprobados."
  },
  {
    icon: <LayoutDashboard size={32} className="benefit-icon" />,
    title: "Gestión Transparente",
    desc: "Te mantenemos informado en tiempo real de cada visita, oferta y avance legal sobre tu propiedad."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section benefits">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Por qué vender con <span className="gradient-text">Nosotros?</span></h2>
          <p className="section-subtitle">Tu tranquilidad es nuestra prioridad. Cuidamos tu patrimonio como si fuera nuestro.</p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-card glass-card">
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
