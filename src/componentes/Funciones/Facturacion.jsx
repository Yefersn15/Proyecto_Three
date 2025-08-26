import { useState } from "react";

const Facturacion = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [iva, setIva] = useState(16);
  const [descuento, setDescuento] = useState(0);

  const agregarProducto = () => {
    if (nombre.trim() !== "" && precio > 0 && cantidad > 0) {
      const nuevoProducto = {
        id: Date.now(),
        nombre,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad),
        total: parseFloat(precio) * parseInt(cantidad)
      };
      
      setProductos([...productos, nuevoProducto]);
      setNombre("");
      setPrecio("");
      setCantidad(1);
    }
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  const subtotal = productos.reduce((sum, producto) => sum + producto.total, 0);
  const impuesto = subtotal * (iva / 100);
  const totalDescuento = subtotal * (descuento / 100);
  const total = subtotal + impuesto - totalDescuento;

  return (
    <div>
      <h5>Sistema de Facturación con Virtual DOM</h5>
      <p className="text-muted">El Virtual DOM optimiza las actualizaciones de esta interfaz</p>
      
      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label">Producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            placeholder="0.00"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            className="form-control"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            min="1"
          />
        </div>
        <div className="col-md-3 d-flex align-items-end">
          <button className="btn btn-primary w-100" onClick={agregarProducto}>
            Agregar Producto
          </button>
        </div>
      </div>

      {productos.length > 0 && (
        <>
          <div className="table-responsive mb-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>${producto.precio.toFixed(2)}</td>
                    <td>{producto.cantidad}</td>
                    <td>${producto.total.toFixed(2)}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label className="form-label">IVA (%)</label>
              <input
                type="number"
                className="form-control"
                value={iva}
                onChange={(e) => setIva(e.target.value)}
                min="0"
                max="100"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Descuento (%)</label>
              <input
                type="number"
                className="form-control"
                value={descuento}
                onChange={(e) => setDescuento(e.target.value)}
                min="0"
                max="100"
              />
            </div>
          </div>

          <div className="mt-4 p-3 bg-light rounded">
            <div className="row">
              <div className="col-md-6">
                <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
                <p>IVA ({iva}%): <strong>${impuesto.toFixed(2)}</strong></p>
                <p>Descuento ({descuento}%): <strong>-${totalDescuento.toFixed(2)}</strong></p>
              </div>
              <div className="col-md-6 text-end">
                <h4>Total: <span className="text-primary">${total.toFixed(2)}</span></h4>
              </div>
            </div>
          </div>
        </>
      )}

      {productos.length === 0 && (
        <div className="alert alert-info text-center">
          No hay productos agregados. Agrega algunos productos para ver la factura.
        </div>
      )}
    </div>
  );
};

export default Facturacion;