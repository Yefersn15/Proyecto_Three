import Facturacion from "../componentes/Funciones/Facturacion";

const VirtualDOM = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Virtual DOM en React</h2>
            
            <p className="lead">
                El Virtual DOM es una representación en memoria del DOM real. React utiliza
                el Virtual DOM para optimizar las actualizaciones del DOM, haciendo que
                las aplicaciones sean más rápidas y eficientes mediante la comparación
                (diffing) y actualización selectiva de solo los elementos cambiados.
            </p>

            <div id="carouselVirtualDOM" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ytimg.com/vi/61R7Py0szPs/hq720.jpg" className="d-block w-100" alt="Virtual DOM vs Real DOM" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1649655403381%2FYQwkgNyh-.png%3Fw%3D1200%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng" className="d-block w-100" alt="Funcionamiento Virtual DOM" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241212235246933476/Browser-DOM-Virtual-DOM.webp" className="d-block w-100" alt="Explicación Virtual DOM" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselVirtualDOM" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselVirtualDOM" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <h4>Ejemplo práctico: Sistema de Facturación</h4>
            <p>
                Este ejemplo demuestra cómo el Virtual DOM optimiza las actualizaciones
                en una interfaz compleja con múltiples campos y cálculos en tiempo real.
            </p>

            <div className="border rounded p-3 bg-light shadow-sm mb-4">
                <Facturacion />
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ventajas del Virtual DOM</h5>
                            <ul>
                                <li>Mejor rendimiento con actualizaciones eficientes</li>
                                <li>Reconciliación inteligente de cambios</li>
                                <li>Abstracción del DOM nativo</li>
                                <li>Más fácil de programar</li>
                                <li>Actualizaciones por lotes para mejor performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">¿Cómo funciona?</h5>
                            <ol>
                                <li>Crear representación virtual del UI</li>
                                <li>Detectar cambios en el estado</li>
                                <li>Crear nuevo Virtual DOM</li>
                                <li>Comparar con versión anterior (diffing)</li>
                                <li>Actualizar solo lo necesario en el DOM real</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualDOM;