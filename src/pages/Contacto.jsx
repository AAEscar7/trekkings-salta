import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const form = useRef();
  const [estadoMensaje, setEstadoMensaje] = useState('');

  const enviarEmail = (e) => {
    e.preventDefault();

    // Reemplaza con tus datos reales de EmailJS
    emailjs.sendForm('service_l3iroee', 'template_fvm642p', form.current, 'F4jN-b4k-WNLXX4-0')
      .then((result) => {
          console.log(result.text);
          setEstadoMensaje('¡Mensaje enviado con éxito! Te responderemos pronto.');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setEstadoMensaje('Hubo un error al enviar el mensaje, intenta nuevamente.');
      });
  };

  return (
    <div className="page-container">
      <h1>Contacto y Ubicación</h1>
      
      <div className="contacto-grid">
        {/* Formulario con EmailJS */}
        <form ref={form} onSubmit={enviarEmail} className="form-contacto">
          <h3>Envíanos tu consulta</h3>
          
          <label htmlFor="nombre">Nombre Completo:</label>
          <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required placeholder="tuemail@ejemplo.com" />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required placeholder="¿Qué recorrido te gustaría hacer?"></textarea>

          <button type="submit">Enviar Mensaje</button>
          
          {estadoMensaje && <p className="mensaje-estado">{estadoMensaje}</p>}
        </form>

        {/* Mapa embebido de Google Maps */}
        <div className="mapa-container">
          <h3>Punto de Encuentro (Ciudad de Salta)</h3>
          <iframe 
            title="Mapa Salta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115960.57321580975!2d-65.4802092329381!3d-24.785908984950946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151b7f9%3A0xa03c399f168d6e3!2sSalta%2C%20Capital%2C%20Salta!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}