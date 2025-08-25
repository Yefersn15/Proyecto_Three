import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Bienvenido a React con Vite</h2>

            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">¿Qué es React?</h5>
                            <p className="card-text">
                                React es una biblioteca de JavaScript para construir interfaces de usuario.
                                Permite crear componentes reutilizables y manejar el estado de la aplicación
                                de manera eficiente mediante el Virtual DOM.
                            </p>
                            <ul>
                                <li>Componentes reutilizables</li>
                                <li>Virtual DOM para mejor rendimiento</li>
                                <li>Ecosistema amplio de herramientas</li>
                                <li>JSX para escribir HTML en JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">¿Qué es Vite?</h5>
                            <p className="card-text">
                                Vite es una herramienta de construcción que proporciona una experiencia
                                de desarrollo más rápida y optimizada para proyectos modernos.
                            </p>
                            <ul>
                                <li>Servidor de desarrollo ultrarrápido</li>
                                <li>Build optimizado para producción</li>
                                <li>Soporte nativo para ES modules</li>
                                <li>Configuración mínima requerida</li>
                                <li>Hot Module Replacement (HMR)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselInicio" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://arielfuggini.com/static/d00325bbd9f153f8a3bfb2a3d4cd87e3/32ccb/react.png" className="d-block w-100" alt="React Logo" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*udvSMrSVGOgD4fxjMJHbOw.jpeg" className="d-block w-100" alt="Vite Logo" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*scIPeOF3jlDkTKDYrwElfg.gif" className="d-block w-100" alt="React con Vite" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselInicio" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselInicio" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <h4>Resumen de Contenidos</h4>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <Link to="/State" className="text-decoration-none text-black">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Estado (State)</h5>
                                <p className="card-text">Manejo del estado local de componentes con useState.</p>
                                <span className="badge bg-primary">useState</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to="/Props" className="text-decoration-none text-black">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Props</h5>
                                <p className="card-text">Comunicación entre componentes mediante propiedades.</p>
                                <span className="badge bg-success">Propiedades</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to="/Hooks" className="text-decoration-none text-black">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Hooks</h5>
                                <p className="card-text">Funciones especiales para manejar estado y efectos.</p>
                                <span className="badge bg-info">useEffect</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to="/LifeCycle" className="text-decoration-none text-black">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Ciclo de Vida</h5>
                                <p className="card-text">Fases por las que pasa un componente React.</p>
                                <span className="badge bg-warning">Montaje/Actualización</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to="/VirtualDOM" className="text-decoration-none text-black">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Virtual DOM</h5>
                                <p className="card-text">Representación optimizada del DOM para mejor rendimiento.</p>
                                <span className="badge bg-danger">Optimización</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to="/Redux" className="text-decoration-none text-black">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Redux</h5>
                                <p className="card-text">Manejo del estado global de la aplicación.</p>
                                <span className="badge bg-secondary">Estado Global</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inicio;