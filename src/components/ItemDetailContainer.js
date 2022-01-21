import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {data} from "./data"
import {useParams} from "react-router-dom"
import db from '../firebase/Firebase'
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])   
    const {id} = useParams();

    useEffect(() => {
        const ref = doc(db, 'products', id)
    
        getDoc(ref)
        .then( querySnapshot => {
          setItem({...querySnapshot.bikinis(), id: querySnapshot.id})
        })
        .catch(e => console.log(e))
    
      }, []);

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer