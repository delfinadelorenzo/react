import React, { useState, useEffect } from 'react'
import Item from './Item';
import data from "./data.json";

/*IMAGENES*/
// import cies1 from "../imagenes/bikiniCies1.jpg";
// import granadina from "../imagenes/bikiniGranadina1.jpg"
// import saona from "../imagenes/bikiniSaona.jpeg"
// import pal from "../imagenes/bikiniPal.jpg"

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const cargarProductos = async () => {
        const prod = await new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(data)
            }, 2000);
        })
        return prod;
    };

    useEffect(() => {
        const getItems = async () => {
            setLoading(true);
            const result = await cargarProductos();
            setLoading(false);
            setItems(result);
        };
        getItems();
    }, []);

return (
    <div className='d-flex justify-content-start'>
        {items.map((item) =>{
            return <Item key={item.id} item={item} />
        } )}
    </div>
);

};

export default ItemList;