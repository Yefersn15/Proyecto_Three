import HookUseEffect from "../componentes/funciones/HookUseEffect";

const HooksPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Hooks en React</h2>
      <p className="lead">
        Los <b>Hooks</b> son funciones que permiten "engancharse" al estado y a
        las características del ciclo de vida de los componentes de React.
        Fueron introducidos en la versión <b>16.8</b> y cambiaron la forma en
        que escribimos componentes, evitando la necesidad de clases en muchos
        casos.
      </p>

      <div id="carouselHooks" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.veryfront.com/imgproxy/q:75/w:1440/aHR0cHM6Ly9jZG4uY29kZXJzb2NpZXR5LmNvbS91cGxvYWRzL3JlYWN0LWhvb2tzLmpwZWc=.webp" className="d-block w-100" alt="Ejemplo de useState" />
          </div>
          <div className="carousel-item">
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*0wiDAEIGVVdkfddS.png" className="d-block w-100" alt="Equivalente ciclo de vida" />
          </div>
          <div className="carousel-item">
            <img src="https://filisantillan.com/content/images/2020/12/useState@2x.png" className="d-block w-100" alt="Hooks React" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHooks" data-bs-slide="prev" >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselHooks" data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <h4>Ejemplo práctico: useEffect</h4>
      <p> A continuación un ejemplo sencillo del hook <b>useEffect</b>, que permite
        ejecutar efectos secundarios en un componente funcional: </p>

      <div className="border rounded p-3 bg-light shadow-sm mb-4">
        <HookUseEffect />
      </div>
    </div>
  );
};

export default HooksPage;
