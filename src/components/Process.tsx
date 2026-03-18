import React from 'react';
import { Search, PenTool, TrendingUp, Handshake } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <Search size={24} />,
    title: "1. Avalúo y Diagnóstico",
    desc: "Determinamos el precio óptimo basado en datos reales de mercado de tu zona en Colombia."
  },
  {
    icon: <PenTool size={24} />,
    title: "2. Preparación Visual",
    desc: "Producción audiovisual profesional y home staging digital para enamorar desde el primer click."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "3. Difusión Masiva",
    desc: "Tu propiedad se posiciona frente a compradores activos mediante campañas de alto impacto."
  },
  {
    icon: <Handshake size={24} />,
    title: "4. Negociación y Cierre",
    desc: "Manejamos las ofertas y nos encargamos del trámite legal hasta firmar las escrituras."
  }
];

const Process = () => {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">El camino hacia la <span className="gradient-text">Venta Exitosa</span></h2>
          <p className="section-subtitle">Un proceso claro, seguro y optimizado para evitar dolores de cabeza y vender con confianza.</p>
        </div>
        
        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="step-icon glass-card">{step.icon}</div>
              <div className="step-content glass-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {idx < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
