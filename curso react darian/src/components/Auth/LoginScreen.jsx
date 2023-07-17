
import { AuthContext } from '../../context/AuthContext'
import './LoginScreen.scss'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {

    const { login, googleLogin } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(values)
        login(values)
    }

    return (
        <div className='auth-container'>
            <div className='auth-modal'>
                <h2>Login</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder='Email'
                        className='form-control'
                        name='email'
                    />
                    <input
                        value={values.password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder='Contraseña'
                        className='form-control'
                        name='password'
                    />
                    <br />

                    <button className='btn btn-primary' type='submit'>Iniciar Sesion</button>
                    <Link className='btn btn-dark m-2' to='/register'>Registarme</Link>

                </form>
                <button className='btn btn-primary' onClick={googleLogin}>Iniciar con Google</button>

            </div>

        </div>
    )
}
export default LoginScreen 