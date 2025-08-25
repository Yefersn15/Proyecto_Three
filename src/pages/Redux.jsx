import CarritoCompras from "../componentes/Funciones/CarritoCompras";

const Redux = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Redux en React</h2>
            
            <p className="lead">
                Redux es una biblioteca para el manejo del estado en aplicaciones
                JavaScript, y es especialmente popular en aplicaciones React. Permite
                gestionar el estado de la aplicación de manera predecible y centralizada
                mediante un store único, acciones y reducers.
            </p>

            <div id="carouselRedux" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://desarrolloweb.com/media/820/que-es-redux-featured.jpg" className="d-block w-100" alt="Flujo de datos Redux" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*EV1KQifr5KwiupJ9q7tdxA.png" className="d-block w-100" alt="Arquitectura Redux" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcssAczh99uWiqKm9Nyydxvu6sgAE6s9Xpg&s" className="d-block w-100" alt="Flujo Redux" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselRedux" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselRedux" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <h4>Ejemplo práctico: Carrito de Compras</h4>
            <p>
                Este ejemplo simula un carrito de compras utilizando los principios de Redux:
                estado global, acciones y reducer para gestionar el carrito.
            </p>

            <div className="border rounded p-3 bg-light shadow-sm mb-4">
                <CarritoCompras />
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Principios de Redux</h5>
                            <ul>
                                <li><strong>Single Source of Truth:</strong> Todo el estado se almacena en un único store</li>
                                <li><strong>State is Read-only:</strong> El estado solo puede modificarse mediante acciones</li>
                                <li><strong>Changes are made with Pure Functions:</strong> Los reducers son funciones puras que especifican cómo cambia el estado</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Elementos de Redux</h5>
                            <ul>
                                <li><strong>Actions:</strong> Objetos que describen qué pasó</li>
                                <li><strong>Reducers:</strong> Funciones que especifican cómo el estado cambia en respuesta a acciones</li>
                                <li><strong>Store:</strong> Objeto que mantiene el estado de la aplicación</li>
                                <li><strong>Dispatch:</strong> Método para enviar acciones al store</li>
                                <li><strong>Selectors:</strong> Funciones para extraer datos específicos del estado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Redux;