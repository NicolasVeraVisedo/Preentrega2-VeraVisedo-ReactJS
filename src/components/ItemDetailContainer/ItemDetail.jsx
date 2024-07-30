const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={producto.imagen} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{producto.nombre}</p>
        <p className="text-detail">Descripción: {producto.descripcion}</p>
        <p className="text-detail">Precio: ${producto.precio}</p>
      </div>
    </div>
  );
};
export default ItemDetail;
