import Saludo from "../componentes/Funciones/Saludo";

const Props = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Props en React</h2>

            <p className="lead"> Las <b>props</b> (propiedades) en React permiten que un componente padre le pase información a un componente hijo.
                Son inmutables: el hijo solo las recibe y las usa, pero no puede cambiarlas. </p>

            <div id="carouselProps" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://refine-web.imgix.net/blog/2022-11-16-react-props/social-2.png?w=1788" className="d-block w-100" alt="Ejemplo de useState" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/uvEAvxWvwOs/maxresdefault.jpg" className="d-block w-100" alt="Equivalente ciclo de vida" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://pablomonteserin.com/wp-content/uploads/2023/10/image-1.png" className="d-block w-100" alt="Hooks React" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselProps" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselProps" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <h4>Ejemplo práctico: Props</h4>
            <p>
                Cada nombre agregado se renderiza mostrando un saludo gracias a que se
                pasa como <b>prop</b>.
            </p>

            <div className="border rounded p-3 bg-light shadow-sm mb-4">
                <Saludo />
            </div>
        </div>
    );
};

export default Props;