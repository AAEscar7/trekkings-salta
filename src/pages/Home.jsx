import { useState, useEffect } from 'react';

export default function Home() {
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-24.7859&longitude=-65.4117&current_weather=true')
      .then((res) => res.json())
      .then((data) => {
        setClima(data.current_weather);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar la API:", err);
        setCargando(false);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="home-grid">
        {/* Columna Izquierda: Título y Clima */}
        <div className="home-content">
          <h1 className="titulo-principal">
            Trekking<br />
            Senderismo<br />
            Ciudad de Salta
          </h1>
          
          <section className="api-section">
            <h2>🌤️ Clima en Salta</h2>
            {cargando ? (
              <p>Cargando información meteorológica...</p>
            ) : clima ? (
              <div className="clima-card">
                <p><strong>Temperatura actual:</strong> {clima.temperature} °C</p>
                <p><strong>Velocidad del viento:</strong> {clima.windspeed} km/h</p>
              </div>
            ) : (
              <p>No se pudieron obtener los datos meteorológicos.</p>
            )}
          </section>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="home-image-container">
          <img 
            src="/Img_home_botas.jpg" 
            alt="Imagen botas de senderismo en Salta" 
            className="main-image"
          />
        </div>
      </div>
    </div>
  );
}