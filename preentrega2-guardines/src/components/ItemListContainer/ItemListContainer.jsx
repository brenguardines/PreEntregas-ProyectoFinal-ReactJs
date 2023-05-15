import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(response => setProductos(response))
      .catch(error => console.error(error))
  }, [idCategoria])


  return (
    <>
      <h2 className='subtitulo'>{greeting}</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer