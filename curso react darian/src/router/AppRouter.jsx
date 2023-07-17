
import Header from '../components/Header/Header'
//instalar bootstrap npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from '../components/Contacto/Contacto.jsx'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { Nosotros } from '../components/Nosotros/Nosotros'
import Cart from '../components/Cart/Cart'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import LoginScreen from '../components/Auth/LoginScreen'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import RegisterScreen from '../components/Auth/RegisterScreen';

const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <BrowserRouter>

            {
                user.logged
                    ? <>

                        <Routes>
                            <Route path='/cart' element={<Header variant />} />
                            <Route path='*' element={<Header />} />
                        </Routes>

                        <Routes>
                            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                            <Route path='/nosotros' element={<Nosotros />} />
                            <Route path='/contacto' element={<Contacto />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='*' element={<Navigate to={'/'} />} />

                        </Routes>
                    </>

                    : <Routes>
                        <Route path='/login' element={<LoginScreen />} />
                        <Route path='/register' element={<RegisterScreen />} />
                        <Route path='*' element={<Navigate to={'/login'} />} />
                    </Routes>
            }

            {/* <Footer /> */}

        </BrowserRouter>
    )
}
export default AppRouter

