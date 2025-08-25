import Tema from '../componentes/Funciones/Tema'

const State = () => {
    return (
        <div className="container mt-4">

            <h2 className="text-center mb-3">useState en React</h2>

            <p className="lead"> <b>useState</b> es un Hook de React que nos permite añadir estado a un componente funcional.
                Sirve para guardar y actualizar valores que pueden cambiar con la interacción del usuario o durante el ciclo de vida del componente.</p>

            <div id="carouselState" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.codepwr.com/wp/wp-content/uploads/2024/01/React-Props-vs-State-980x490.jpg" className="d-block w-100" alt="Ejemplo de useState" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hYSKyofnqThnPIsYRfnUUQ.png" className="d-block w-100" alt="Equivalente ciclo de vida" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.scaler.com/topics/images/state-transition-in-react-js.webp" className="d-block w-100" alt="Hooks React" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselState" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselState" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <p> Aquí usamos <code>useState</code> para crear un contador que aumenta y
                disminuye al hacer clic en los botones.</p>

            <div className="border rounded p-3 bg-light shadow-sm mb-4">
                <Tema />
            </div>
        </div>
    );
};


export default State;