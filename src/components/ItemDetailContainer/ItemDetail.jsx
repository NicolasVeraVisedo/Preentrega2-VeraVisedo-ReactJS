const ItemDetail = ( { producto } ) => {

  return (
    <div>
      <img src={producto.imagen} alt="" />
      <h1>{producto.nombre}</h1>
      <h2>${producto.precio}</h2>
      <p>Descripción: {producto.descripcion}</p>
    </div>
  );
};
export default ItemDetail;