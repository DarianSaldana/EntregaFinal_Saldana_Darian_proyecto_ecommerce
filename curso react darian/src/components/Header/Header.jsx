import './Header.scss'
import logo from '../../assets/ruku.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

//aca vamos a agregar la posibilidad de cambiar el diseño de mi componente dependiendo de donde me encuentre parado
const Header = ({ variant = false }) => {
    const { user, logout } = useContext(AuthContext)
    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">

                <img src={logo} alt="logo img" className="header__img m-1" />
                <nav className='header__nav'>
                    <Link className='header__link' to="/">Inicio</Link>
                    <Link className='header__link' to="/nosotros">Nosotros</Link>
                    <Link className='header__link' to="/contacto">Contacto</Link>
                    <Link className='header__link' to="/productos/interior">Hogar</Link>
                    <Link className='header__link' to="/productos/exterior">Exterior</Link>
                    <Link className='header__link' to="/productos/oferta">Ofertas</Link>
                    <p className='header__welcome'> Bienvenido: {user.email} </p>
                    <button className='btn btn-danger border-5 col-lg-auto p-2 m-5' onClick={logout}>Sign out</button>
                </nav>
                {<CartWidget />}

            </div>

        </header>
    )
}

export default Header