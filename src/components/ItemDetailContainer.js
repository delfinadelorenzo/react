


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

    const getProduct = new Promise((res) => {
      res(bikinis)
    })
    getProduct
    .then ((item)=>{
      if (id) {
        const idProduct = item.filter((e)=> e.id ===id)
        setItem(idProduct)
      }else{
        setItem(item)
      }
    })
    .catch((err)=> console.log(err))
  },[id])


  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer