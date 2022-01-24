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
        setLoading(true);
        const getProducts = async()=> {
            const promise= new Promise ( res => {
            const myItems = idCategory ? bikinis.filter(item => item.category === idCategory) : bikinis;
            setTimeout( ()=>{
                res(myItems)
            }, 1500)
          })
      
          promise.then(products => setItems(products))
          .catch(error => console.log(error))
          .finally(()=>{
              setLoading(false);
          });
        }
      
        getProducts()
      }, []);

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