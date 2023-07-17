import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({ items = [] }) => {
    //aca separe la creacion del catalogo de productos para no cargar todo en el mismo modulo y hacerlo reutilizable
    return (
        <div className="container my-5">
            <h2>Lista de Productos</h2>
            <hr />

            <div className='row'>
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod} />)
                }
            </div>
        </div>
    )

}

export default ItemList
