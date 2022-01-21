import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/Firebase'

const ItemListContainer= () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams();

    useEffect(async () => {

        setLoading(true);

        const myItems = idCategory ?
            query(collection(db, 'products'), where('category', '==', idCategory))
            :
            collection(db, 'products');

        try {
            const querySnapshot = await getDocs(myItems)

            console.log(querySnapshot.docs)

            setItems(querySnapshot.docs.map(el => {
                return { ...el.bikinis(), id: el.id  }
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


