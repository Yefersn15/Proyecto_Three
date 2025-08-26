import { useState, useEffect } from "react";

const HookUseEffect = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  // useEffect se ejecuta cada vez que cambia "contador"
  useEffect(() => {
    setMensaje(`El contador ha cambiado a ${contador}`);
    console.log("useEffect ejecutado, contador:", contador);
  }, [contador]); // dependencia => se ejecuta cuando cambia "contador"

  return (
    <div>
      <h5>Ejemplo de useEffect</h5>
      <p>Contador: <b>{contador}</b></p>
      <button className="btn btn-primary me-2" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <button className="btn btn-primary me-2" onClick={() => setContador(contador - 1)}>
        Disminuir
      </button>

      <button className="btn btn-danger" onClick={() => setContador(0)}>
        Reiniciar
      </button>
      <p className="mt-3 text-success">{mensaje}</p>
    </div>
  );
};

export default HookUseEffect;