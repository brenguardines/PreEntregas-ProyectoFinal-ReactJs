const productos = [
    {id: "1",  nombre: "Borcego",               precio: 17500, img: "/img/botaBorcegoNegro.jpg",         idCat: "botas"},
    {id: "2",  nombre: "Bucanera",              precio: 16000, img: "/img/botaBucaneraNegra.jpg",        idCat: "botas"},
    {id: "3",  nombre: "Texana",                precio: 19000, img: "/img/botaTexanaNegra.jpg",          idCat: "botas"},
    {id: "4",  nombre: "Sandalia Una Tira",     precio: 13000, img: "/img/sandaliaNegraUnaTira.jpg",     idCat: "sandalias"},
    {id: "5",  nombre: "Sandalia Dos Tiras",    precio: 12500, img: "/img/sandaliaNegraDosTiras.jpg",    idCat: "sandalias"},
    {id: "6",  nombre: "Sandalia Varias Tiras", precio: 14000, img: "/img/sandaliaNegraVariasTiras.jpg", idCat: "sandalias"},
    {id: "7",  nombre: "Zapato Taco Aguja",     precio: 13500, img: "/img/zapatoTacoAguja.jpg",          idCat: "zapatos"},
    {id: "8",  nombre: "Zapato Taco Alto",      precio: 13500, img: "/img/zapatoTacoAlto.jpg",           idCat: "zapatos"},
    {id: "9",  nombre: "Zapato de Fiesta",      precio: 14500, img: "/img/zapatoAltoFiesta.jpg",         idCat: "zapatos"},
    {id: "10", nombre: "Chatita Blanca",        precio: 10000, img: "/img/chatitaBlanca.jpg",            idCat: "chatitas"},
    {id: "11", nombre: "Chatita Negra",         precio: 9000,  img: "/img/chatitaNegra.jpg",             idCat: "chatitas"},
    {id: "12", nombre: "Mocasin",               precio: 13000, img: "/img/chatitaMocasinNegro.jpg",      idCat: "chatitas"}
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 100)
    })
}