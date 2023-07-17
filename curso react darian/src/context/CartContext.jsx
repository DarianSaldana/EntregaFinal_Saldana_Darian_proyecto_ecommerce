import { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";


export const CartContext = createContext()
//aca va a ser mi espacio donde decido que elementos compartir con el resto de mi aplicacion

export const CartProvider = ({ children }) => {

    //usando la funcionalidad contexto voy a crear las siguientes variables
    const [cart, setCart] = useState([])
    // console.log("cart", cart)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }
    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, isInCart, totalCompra, vaciarCarrito, eliminarDelCarrito, totalCantidad }}>
            {/* esto seria el resto de mi aplicacion osea <BrowserRouter> ya que es el hijo de cart provider en la app.jsx */}
            {children}
        </CartContext.Provider>
    )
}

