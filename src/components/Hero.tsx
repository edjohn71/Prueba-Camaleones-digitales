import React from 'react';
import { ArrowRight, Home } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container hero-container">
        <div className="badge glass-card">
          <Home size={16} className="neon-text" />
          <span>Vende tu propiedad en Colombia</span>
        </div>
        <h1 className="hero-title">
          Vende tu inmueble más rápido y <br />
          <span className="gradient-text">al mejor precio</span>
        </h1>
        <p className="hero-subtitle">
          Estrategias de marketing profesional, fotografía con drones y una red de compradores listos para invertir en tu propiedad. Te acompañamos en todo el proceso.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary">
            Quiero Vender <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary">
            Evaluar mi propiedad
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
