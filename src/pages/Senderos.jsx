import { senderos } from '../data/senderosData';

export default function Senderos() {
  return (
    <div className="page-container">
      <h1 className="titulo-principal">Circuitos de Trekking</h1>
      <div className="grid-senderos">
        {senderos.map((item) => (
          <div key={item.id} className="card-sendero">
            <img src={item.imagen} alt={item.nombre} className="card-img" />
            <div className="card-body">
              <h3>{item.nombre}</h3>
              <p><strong>Dificultad:</strong> {item.dificultad}</p>
              <p><strong>Duración estimada:</strong> {item.duracion}</p>
              <p>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}