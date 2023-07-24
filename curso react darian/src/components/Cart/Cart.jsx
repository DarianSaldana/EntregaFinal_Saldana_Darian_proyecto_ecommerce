import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito ahora esta vacío</h2>
                <hr />
                <p>Te invitamos a que visites nuestro catálogo de productos</p>
                <Link className="btn btn-dark" to={"/"}>Ir a la tienda</Link>
            </div>
        )
    }
    return (
        <div className="container my-5">


            <h2>Tu compra</h2>
            <hr />

            <div>
                <h5>Total: ${totalCompra()}</h5>
                <button onClick={vaciarCarrito} className="btn btn-danger m-1">Vaciar Carrito</button>
                <Link className="btn btn-success m-1" to='/checkout'>Ir al Checkout</Link>
                <button onClick={handleVolver} className="btn btn-outline-dark m-1">Volver al catálogo</button>
                <hr />
            </div>


            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre} />
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <button className="btn btn-danger m-1" onClick={() => eliminarDelCarrito(prod.id)}>
                            <FaTrashAlt />
                        </button>
                        <hr />
                    </div>
                ))
            }

            <h5>Total: ${totalCompra()}</h5>
            <hr />

        </div>
    )
}
export default Cart 