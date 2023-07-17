import { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        logged: false,
        email: null
    })

    console.log(user)

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e))
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e))
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        //esto me devuelve el usuario que estuvo ultimo loggeado
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                setUser({
                    logged: true,
                    email: user.email
                })
            } else {
                setUser({
                    logged: false,
                    email: null
                })
            }
        })

    }, [])


    return (
        <AuthContext.Provider value={{ user, login, register, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}