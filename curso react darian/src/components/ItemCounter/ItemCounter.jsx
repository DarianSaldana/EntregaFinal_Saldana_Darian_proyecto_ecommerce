
const ItemCounter = ({ max, cantidad, setCantidad, handleAgregar }) => { //recordar que no solo recibe parametros sino funciones
    //en este caso itemCounter va a recibir la funcion setCantidad COMO REFERENCIA y cambiar el stock dependiendo de esta funcion

    //aca no tengo las funciones en si sino la referencia a esa funcion ya que setCantidad viene por parametro
    const handleSumar = () => {//a las funciones designadas a controlar un evento las definimos como handler y el nombre
        cantidad < max && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div>
            <button
                onClick={handleRestar}
                className={cantidad === 1 ? "btn btn-outilne-primary" : "btn btn-dark"}>
                -
            </button>
            <span className="mx-3">{cantidad}</span>
            {/* <span className="mx-3">0</span> */}
            <button
                onClick={handleSumar}
                className={cantidad === max ? "btn btn-outilne-primary" : "btn btn-dark"}>
                +
            </button>

            <br />
            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}
export default ItemCounter