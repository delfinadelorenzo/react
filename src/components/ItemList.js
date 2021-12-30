import React, { useState, useEffect } from 'react'
import Item from './Item';
import { data } from "./data.js";
import { useParams } from 'react-router-dom';

/*IMAGENES*/
// import cies1 from "../imagenes/bikiniCies1.jpg";
// import granadina from "../imagenes/bikiniGranadina1.jpg"
// import saona from "../imagenes/bikiniSaona.jpeg"
// import pal from "../imagenes/bikiniPal.jpg"

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams();
    console.log(idCategory);

    useEffect(() => {
        data
            .then((res)=>{
                if (idCategory){
                    const categoriaFiltradas= res.filter((item)=> item.category.toLowerCase () ===idCategory)
                    setItems(categoriaFiltradas)
                }else{
                    setItems(res)
                }
            })
            .catch(err => console.log(err))
       
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='d-flex justify-content-start'>
            {loading ?
                <h2>Cargando...</h2>
                :
                <Item items={items} />
            }
        </div>
    )
};

export default ItemList