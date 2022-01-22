import ItemList from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/Firebase'
import React, { useState, useEffect } from 'react'
import Item from './Item';
import { bikinis } from "./data.js";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams();
    console.log(idCategory);

    useEffect(() => {
        bikinis
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

export default ItemListContainer