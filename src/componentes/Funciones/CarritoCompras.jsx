import { useState } from "react";

// Simulación de un store de Redux para un carrito de compras
const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];
  
  const getState = () => state;
  
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  
  return { getState, dispatch, subscribe };
};

// Productos disponibles
const productosIniciales = [
  { id: 1, nombre: "Laptop", precio: 1200, stock: 10, imagen: "💻" },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50, imagen: "🖱️" },
  { id: 3, nombre: "Teclado", precio: 75, stock: 30, imagen: "⌨️" },
  { id: 4, nombre: "Monitor", precio: 300, stock: 15, imagen: "🖥️" },
  { id: 5, nombre: "Auriculares", precio: 60, stock: 40, imagen: "🎧" }
];

// Reducer para el carrito
const carritoReducer = (state = { items: [], total: 0 }, action) => {
  switch (action.type) {
    case 'AGREGAR_AL_CARRITO':
      const producto = action.producto;
      const productoExistente = state.items.find(item => item.id === producto.id);
      
      // Verificar si hay suficiente stock
      const cantidadEnCarrito = productoExistente ? productoExistente.cantidad : 0;
      if (cantidadEnCarrito >= producto.stock) {
        return state; // No agregar si no hay stock disponible
      }
      
      if (productoExistente) {
        // Si ya existe, aumentar cantidad
        return {
          ...state,
          items: state.items.map(item =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
          total: state.total + producto.precio
        };
      } else {
        // Si no existe, agregar nuevo item
        return {
          ...state,
          items: [...state.items, { ...producto, cantidad: 1 }],
          total: state.total + producto.precio
        };
      }
      
    case 'ELIMINAR_DEL_CARRITO':
      const itemAEliminar = state.items.find(item => item.id === action.id);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
        total: state.total - (itemAEliminar.precio * itemAEliminar.cantidad)
      };
      
    case 'VACIAR_CARRITO':
      return {
        items: [],
        total: 0
      };
      
    default:
      return state;
  }
};

// Crear store
const store = createStore(carritoReducer, { items: [], total: 0 });

const CarritoCompras = () => {
  const [carrito, setCarrito] = useState(store.getState());
  const [productos] = useState(productosIniciales);
  
  // Suscribirse a cambios en el store
  useState(() => {
    const unsubscribe = store.subscribe(() => {
      setCarrito(store.getState());
    });
    
    return unsubscribe;
  }, []);
  
  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.items.find(item => item.id === producto.id);
    const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;
    
    if (cantidadEnCarrito < producto.stock) {
      store.dispatch({ type: 'AGREGAR_AL_CARRITO', producto });
    }
  };
  
  const eliminarDelCarrito = (id) => {
    store.dispatch({ type: 'ELIMINAR_DEL_CARRITO', id });
  };
  
  const vaciarCarrito = () => {
    store.dispatch({ type: 'VACIAR_CARRITO' });
  };

  return (
    <div>
      <h5>Carrito de Compras con Redux</h5>
      <p className="text-muted">Estado global gestionado con un patrón similar a Redux</p>
      
      <div className="row">
        <div className="col-md-8">
          <h6>Productos Disponibles:</h6>
          <div className="row">
            {productos.map(producto => {
              const productoEnCarrito = carrito.items.find(item => item.id === producto.id);
              const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;
              const stockDisponible = producto.stock - cantidadEnCarrito;
              
              return (
                <div key={producto.id} className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <div className="display-4 mb-2">{producto.imagen}</div>
                      <h6 className="card-title">{producto.nombre}</h6>
                      <p className="card-text">Precio: <strong>${producto.precio}</strong></p>
                      <p className="card-text">
                        Stock: <span className="badge bg-secondary">{producto.stock}</span>
                        {cantidadEnCarrito > 0 && (
                          <span className="ms-2">
                            En carrito: <span className="badge bg-info">{cantidadEnCarrito}</span>
                          </span>
                        )}
                      </p>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => agregarAlCarrito(producto)}
                        disabled={stockDisponible <= 0}
                      >
                        {stockDisponible > 0 ? 'Agregar al Carrito' : 'Sin stock'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="sticky-top" style={{top: '20px'}}>
            <h6>Carrito de Compras:</h6>
            <div className="card">
              <div className="card-body">
                {carrito.items.length === 0 ? (
                  <p className="text-muted">El carrito está vacío</p>
                ) : (
                  <>
                    <ul className="list-group list-group-flush mb-3">
                      {carrito.items.map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <span className="me-2 fs-5">{item.imagen}</span>
                            <div>
                              <div>{item.nombre}</div>
                              <small className="text-muted">${item.precio} c/u</small>
                            </div>
                          </div>
                          <div className="text-end">
                            <div className="d-flex align-items-center">
                              <span className="badge bg-primary me-2">{item.cantidad}</span>
                              <span>${(item.precio * item.cantidad).toFixed(2)}</span>
                            </div>
                            <button 
                              className="btn btn-sm btn-outline-danger mt-1"
                              onClick={() => eliminarDelCarrito(item.id)}
                            >
                              &times;
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <strong>Total:</strong>
                      <span className="h5 mb-0">${carrito.total.toFixed(2)}</span>
                    </div>
                    
                    <button 
                      className="btn btn-danger w-100"
                      onClick={vaciarCarrito}
                    >
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;