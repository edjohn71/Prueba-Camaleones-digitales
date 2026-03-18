
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  return (
    <div className="app-container">
      {/* Background ambient lighting */}
      <div className="gradient-bg" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'var(--primary-glow)' }}></div>
      <div className="gradient-bg" style={{ top: '40%', right: '-10%', width: '40vw', height: '40vw', background: 'rgba(59, 130, 246, 0.2)' }}></div>
      <div className="gradient-bg" style={{ bottom: '-10%', left: '20%', width: '60vw', height: '60vw', background: 'rgba(0, 242, 254, 0.15)' }}></div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <UseCases />
        <LeadCapture />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
