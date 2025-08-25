// src/components/Funciones/Saludo.jsx
import { useState } from "react";

const Saludo = () => {
    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    const agregarNombre = () => {
        if (nombre.trim() !== "") {
            setNombres([...nombres, nombre]);
            setNombre(""); // limpiar input
        }
    };

    const eliminarNombre = (index) => {
        setNombres(nombres.filter((_, i) => i !== index));
    };

    return (
        <div>
            {/* Campo de texto y botón */}
            <div className="mb-4">
                <label className="form-label">Escribe un nombre:</label>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Ingresa un nombre" value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    <button className="btn btn-primary" onClick={agregarNombre}>
                        Agregar
                    </button>
                </div>
            </div>

            {nombres.length === 0 ? (
                <p className="text-muted">No hay nombres registrados aún.</p>
            ) : (
                nombres.map((n, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <h5>👋 Hola, {n}!</h5>
                            <p>¡Bienvenido a Props en React!</p>
                        </div>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarNombre(index)}>
                            ❌ Eliminar
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Saludo;