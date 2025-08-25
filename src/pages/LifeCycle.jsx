import RelojCicloVida from "../componentes/Funciones/RelojCicloVida";

const LifeCycle = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Ciclo de Vida en React</h2>
            
            <p className="lead">
                El ciclo de vida de un componente de React se refiere a las etapas
                por las que pasa un componente desde su creación hasta su eliminación.
                Estas etapas incluyen la inicialización, la actualización y la
                destrucción.
            </p>

            <div id="carouselLifeCycle" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png" className="d-block w-100" alt="Diagrama ciclo de vida" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ismaellopez.dev/images/uploads/2022-07-22_21h57_56.png" className="d-block w-100" alt="Fases ciclo de vida" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Freact%2Fciclo-de-vida-obsoleto.png&w=1200&q=75" className="d-block w-100" alt="Hook equivalentes" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselLifeCycle" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselLifeCycle" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <h4>Ejemplo práctico: Reloj con Ciclo de Vida</h4>
            <p>
                Este reloj demuestra las diferentes fases del ciclo de vida de un componente:
                montaje, actualización y desmontaje.
            </p>

            <div className="border rounded p-3 bg-light shadow-sm mb-4">
                <RelojCicloVida />
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Fases del Ciclo de Vida</h5>
                            <ul>
                                <li><strong>Montaje:</strong> Cuando el componente se inserta en el DOM</li>
                                <li><strong>Actualización:</strong> Cuando el componente recibe nuevos props o estado</li>
                                <li><strong>Desmontaje:</strong> Cuando el componente se elimina del DOM</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Hooks Equivalentes</h5>
                            <ul>
                                <li><strong>useEffect vacío:</strong> Equivalente a componentDidMount</li>
                                <li><strong>useEffect con dependencias:</strong> Equivalente a componentDidUpdate</li>
                                <li><strong>Return en useEffect:</strong> Equivalente a componentWillUnmount</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeCycle;