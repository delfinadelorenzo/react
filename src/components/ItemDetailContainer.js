


 import db from '../firebase/firebase'
 import { getDoc, doc } from 'firebase/firestore';


import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { bikinis } from "./data"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const ref = doc(db, 'products', id)

    getDoc(ref)
    .then( querySnapshot => {
      setItem({...querySnapshot.data(), id: querySnapshot.id})
    })
    .catch(e => console.log(e))

  }, [id]);


  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer