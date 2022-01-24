


import db from '../firebase/Firebase'
import { getDoc, doc } from 'firebase/firestore';


import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { bikinis } from "./data"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const getProuct = new Promise ((res) =>{
      res(bikinis.find(item => item.id === id ))
    })
    getProuct.then (item => setItem(item))
  }, []);
    

  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer