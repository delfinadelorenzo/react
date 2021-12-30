import React, { useState, useEffect } from 'react'
import Item from './Item';
import {data} from "./data.js";

/*IMAGENES*/
// import cies1 from "../imagenes/bikiniCies1.jpg";
// import granadina from "../imagenes/bikiniGranadina1.jpg"
// import saona from "../imagenes/bikiniSaona.jpeg"
// import pal from "../imagenes/bikiniPal.jpg"

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        data
            .then(items=>{setItems(items)})
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [])

return (
    <div className='d-flex justify-content-start'>
        {loading ? 
            <h2>Cargando...</h2>
            :
            <Item items={items} />
        }
    </div>
)};

export default ItemList;