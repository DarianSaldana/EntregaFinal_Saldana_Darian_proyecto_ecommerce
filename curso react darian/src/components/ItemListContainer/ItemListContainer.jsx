import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        //como en el inicio no tengo filtros condiciono utilizando el category id que me entra por parametros
        const q = categoryId
            ? query(productosRef, where("category", "==", categoryId))//el query utiliza 3 parametros, que propiedad voy a filtrar, de que forma y con que lo comparo
            : productosRef
        getDocs(q)
            .then((resp) => {
                //hago un spread de todos las propiedades del objeto doc.data agregando como propiedad id = doc.id
                const items = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setProductos(items)
            }).catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [categoryId])//cada vez que la categoria se actiualiza vuevlo a disparar mi efecto para renderizar mi pagina con los nuevos productos

    return (
        <div className="container my-5">

            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }

        </div>
    )
}


export default ItemListContainer


