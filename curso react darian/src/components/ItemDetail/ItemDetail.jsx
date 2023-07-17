import { useContext, useState } from "react"
import ItemCounter from "../ItemCounter/ItemCounter"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, nombre, precio, category, descripcion, img, stock }) => {

    //gracias a esta linea yo me traigo la referencia a la funcion agregarAlCarrito desde la app.jsx
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, nombre, precio, category, descripcion, img, stock, cantidad
        }
        console.log(item)
        //aca tengo que pasarle un nuevo valor al estado setCart con el nuevo item del carrito

        agregarAlCarrito(item)
    }
    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br />

            <small>Cat: {category}</small>
            <br />
            <br />

            {

                isInCart(id)
                    ? <Link className="btn btn-success" to="/cart"> Terminar mi compra</Link>
                    : <ItemCounter
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />

            }

            <hr />
            <button onClick={handleVolver} className="btn btn-outline-dark">Volver</button>
        </div>
    )
}
export default ItemDetail