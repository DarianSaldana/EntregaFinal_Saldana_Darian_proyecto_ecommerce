import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log('item: ', item)

    useEffect(() => {

        setLoading(true)
        const itemRef = doc(db, 'productos', itemId)

        getDoc(itemRef)
            .then((doc) => {

                setItem({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])//cada vez que el item se actiualiza vuevlo a disparar mi efecto para renderizar mi pagina con los nuevos productos

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer



