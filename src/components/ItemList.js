import React, {useState, useEffect} from 'react'

/*IMAGENES*/
import cies1 from "../imagenes/bikiniCies1.jpg";
import granadina from "../imagenes/bikiniGranadina1.jpg"

const ItemList = () => {
    const [Items, setItems] = useState ([]);
    
    const cargarProductos =async () => {
        const prod = await new Promise ((resolve, reject) => {
            setTimeout(function (){
                resolve ([
                    {
                        id:1,
                        tittle:" Bikini Cies",
                        price: 19500,
                        pictureUrl: cies1,
                        stock: 3,
                    },
                    {
                        id:2,
                        tittle:" Bikini Granadina",
                        price: 1850,
                        pictureUrl: granadina,
                        stock: 5, 
                    },
                ])
            }, 2000);
        })
        return prod;
    };
    
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])






}

