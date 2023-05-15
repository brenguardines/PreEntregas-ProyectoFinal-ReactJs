import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='contenedorItem'>
            <img src= {img} alt= {nombre} />
            <h2>Nombre: {nombre} </h2>
            <h3>Id: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>
            <h3>Precio: ${precio} </h3>
        </div>
    )
}

export default ItemDetail