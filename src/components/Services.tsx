
import { Camera, Users, Target, Activity } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Camera className="service-icon" />,
    title: 'Marketing Profesional',
    description: 'Fotografía en alta definición, recorridos virtuales 360 y tomas con drones para resaltar el verdadero valor de tu propiedad.'
  },
  {
    icon: <Users className="service-icon" />,
    title: 'Marketing y automatizaciones',
    description: 'Acceso exclusivo a inversionistas y compradores pre-calificados tanto a nivel nacional como internacional.'
  },
  {
    icon: <Target className="service-icon" />,
    title: 'Valoración Precisa',
    description: 'Análisis de mercado comparativo (CMA) para asegurar que tu inmueble salga con el precio más competitivo y atractivo.'
  },
  {
    icon: <Activity className="service-icon" />,
    title: 'Publicidad Estratégica',
    description: 'Campañas pautadas y segmentadas en portales inmobiliarios líderes y redes sociales para máxima visibilidad.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros <span className="gradient-text">Servicios</span></h2>
          <p className="section-subtitle">
            Implementamos las mejores estrategias del mercado inmobiliario para vender tu propiedad en tiempo récord.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
