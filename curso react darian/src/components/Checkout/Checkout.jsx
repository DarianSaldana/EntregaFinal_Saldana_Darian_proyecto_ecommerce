import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useCartContext()
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleInputChange = (e) => {
        // console.log('value', e.target.value)
        // console.log('name', e.target.name)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        //validacion
        if (values.nombre.length === 0 || values.direccion.length === 0 || values.email.length === 0) {
            alert("Ningun campo puede estar vacio")
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }

        console.log('orden', orden)

        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch(err => console.log(err))

    }

    if (orderId) {

        return (
            <div className="container my-5">
                <h3>Tu compra fue exitosa!</h3>
                <hr />
                <h2>Te enviaremos un mail con los detalles de tu compra.</h2>
                <p>
                    Tu numero de compra es: <strong>{orderId}</strong>
                </p>
                <Link to="/" className='btn btn-outline-dark m-1"'>Volver al Inicio</Link>

            </div>
        )
    }

    if (cart.length === 0) {
        return
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type="text"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    className="form-control my-2"
                    name='nombre'
                />
                <input
                    value={values.direccion}
                    type="text"
                    placeholder="Direccion"
                    onChange={handleInputChange}
                    className="form-control my-2"
                    name='direccion'
                />
                <input
                    value={values.email}
                    type="email"
                    placeholder="Tu correo"
                    onChange={handleInputChange}
                    className="form-control my-2"
                    name='email'
                />
                <button className="btn btn-dark m-1" type="submit">Enviar</button>
                <button onClick={handleVolver} className="btn btn-outline-dark m-1">Volver al catálogo</button>

            </form>
        </div>
    )
}
export default Checkout 