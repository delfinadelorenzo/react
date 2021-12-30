import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {data} from "./data"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])   
    const {id} = useParams();

    useEffect(()=>{
        data
        .then((item)=>{
            if(id){
                const idProduct = item.filter((e)=> e.id === id)
                setItem(idProduct)
            }else{
                setItem(item)
            }
        })
        .catch((err)=> console.log(err))
    }, [id])

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer