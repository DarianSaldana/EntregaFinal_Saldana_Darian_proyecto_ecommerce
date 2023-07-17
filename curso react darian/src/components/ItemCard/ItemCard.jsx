import { Link } from "react-router-dom"

const ItemCard = ({ id, stock, nombre, precio, descripcion, img }) => {

    return (
        <div className='col-3 m-2'>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            {stock <= 10 && <p style={{ fontWeight: 900, color: 'brown' }}>Quedan solo {stock} unidades!</p>}
            <p>Precio : {precio}</p>
            <Link className="btn btn-dark" to={`/detail/${id}`}>Ver producto</Link>
        </div>
    )

}

export default ItemCard