import ItemList from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/firebase'
import React, { useState, useEffect } from 'react'
import Item from './Item';
import { bikinis } from "./data.js";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams();
    console.log(idCategory);

    useEffect(async () => {
        setLoading(true);
    
        const myItems = idCategory ?
          query(collection(db, 'products'), where('category', '==', idCategory))
          /* query(collection(db, 'products'), where('category', '==', idCategory), orderBy("name")) */
          :
          collection(db, 'products');
    
        try {
          const querySnapshot = await getDocs(myItems)
    
          console.log(querySnapshot.docs)
    
          setItems(querySnapshot.docs.map(el => {
            return { ...el.data(), id: el.id }
          }))
        }
        catch {
          console.log("SE ROMPIO")
        }
      
        setLoading(false)
    
      }, [idCategory]);
 return (
    <div className='d-flex justify-content-start'>
        {loading ?
            <h2>Cargando...</h2>
            :
            <ItemList items={items} />
        }
    </div>
)
};

export default ItemListContainer