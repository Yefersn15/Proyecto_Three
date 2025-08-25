import { useState, useEffect } from "react";

const RelojCicloVida = () => {
  const [hora, setHora] = useState(new Date());
  const [activo, setActivo] = useState(true);
  const [mensajes, setMensajes] = useState([]);

  const agregarMensaje = (mensaje) => {
    setMensajes(prev => [...prev, {id: Date.now(), mensaje, tiempo: new Date().toLocaleTimeString(), tipo: 'evento'}]);
  };

  // Montaje del componente
  useEffect(() => {
    agregarMensaje("Componente montado");
    console.log("Componente montado");

    let intervalo = null;
    if (activo) {
      intervalo = setInterval(() => {
        setHora(new Date());
      }, 1000);
    }

    // Desmontaje del componente
    return () => {
      agregarMensaje("Componente desmontado");
      console.log("Componente desmontado");
      if (intervalo) clearInterval(intervalo);
    };
  }, []);

  // Actualización por cambio de estado (activo)
  useEffect(() => {
    if (mensajes.length > 0) { // Evitar mensaje inicial duplicado
      agregarMensaje(activo ? "Reloj activado" : "Reloj pausado");
    }
    
    let intervalo = null;
    if (activo) {
      intervalo = setInterval(() => {
        setHora(new Date());
      }, 1000);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [activo]);

  const limpiarRegistros = () => {
    // Mantener solo los mensajes de montaje/desmontaje y agregar mensaje de limpieza
    const mensajesImportantes = mensajes.filter(msg => 
      msg.mensaje.includes("montado") || msg.mensaje.includes("desmontado")
    );
    
    setMensajes([
      ...mensajesImportantes,
      {id: Date.now(), mensaje: "Registros eliminados", tiempo: new Date().toLocaleTimeString(), tipo: 'limpieza'}
    ]);
  };

  return (
    <div>
      <h5>Reloj con Ciclo de Vida</h5>
      <div className="text-center mb-4">
        <div className="display-4">{hora.toLocaleTimeString()}</div>
        <div className="text-muted">{hora.toLocaleDateString()}</div>
      </div>

      <div className="d-flex justify-content-center gap-2 mb-4">
        <button 
          className={`btn ${activo ? 'btn-warning' : 'btn-success'}`}
          onClick={() => setActivo(!activo)}
        >
          {activo ? '⏸️ Pausar' : '▶️ Reanudar'}
        </button>
        <button 
          className="btn btn-info"
          onClick={() => setHora(new Date())}
        >
          ⏱️ Actualizar Manualmente
        </button>
        <button 
          className="btn btn-danger"
          onClick={limpiarRegistros}
          disabled={mensajes.filter(msg => !msg.mensaje.includes("montado") && !msg.mensaje.includes("desmontado")).length === 0}
        >
          🗑️ Limpiar Registros
        </button>
      </div>

      <div className="mt-4">
        <h6>Registro del Ciclo de Vida:</h6>
        <div className="border rounded p-3" style={{maxHeight: '200px', overflowY: 'auto'}}>
          {mensajes.length === 0 ? (
            <p className="text-muted">No hay eventos registrados</p>
          ) : (
            mensajes.map((msg) => (
              <div key={msg.id} className={`d-flex justify-content-between border-bottom py-1 ${msg.tipo === 'limpieza' ? 'text-danger fw-bold' : ''}`}>
                <span>{msg.mensaje}</span>
                <small className="text-muted">{msg.tiempo}</small>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RelojCicloVida;