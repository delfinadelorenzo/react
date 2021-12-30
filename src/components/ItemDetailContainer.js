import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data  from "./data.json";

const ItemDetailContainer = () => {
    const {id} =useParams ();
    const [producto, setProducto] =  useState();

    const loadItems = async () => {
        const response = await new Promise ((resolve, reject) => {
            setTimeout ( ()=>{
                resolve (data[id]);
            }, 2000);
        });
        return response;
    };

    useEffect ( () =>{
        const getData =async () => {
            const result = await loadItems();
            setProducto (result);
        };
        getData();
    }, [loadItems]);
    
    return <div>DETALLE con id {id} | {JSON.stringify(producto) } </div>
}

export default ItemDetailContainer