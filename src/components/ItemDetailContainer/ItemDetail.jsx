import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };

    console.log(productoCarrito);
  };

  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={producto.imagen} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{producto.nombre}</p>
        <p className="text-detail">Descripción: {producto.descripcion}</p>
        <p className="text-detail">Precio: ${producto.precio}</p>
        <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
      </div>
    </div>
  );
};
export default ItemDetail;
