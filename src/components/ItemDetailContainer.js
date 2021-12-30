//  import { useEffect, useState } from "react";
//  import { useParams } from "react-router-dom";
//  import data from "./data.json";
//  import ItemDetail from "./ItemDetail";

//  const ItemDetailContainer = () => {
//      const { id } = useParams();
//      const [item, setItems] = useState([]);
//      const [loading, setLoading] = useState(false);

//      const cargarProductos = async () => {
//          console.log(data)
//          const prod = await new Promise((resolve, reject) => {
//              setTimeout(function () {
//                  resolve(data)
//              }, 2000);
//          })
//          return prod;
//      };

//      useEffect(() => {
//          const getItems = async () => {
//              setLoading(true);
//              const result = await cargarProductos();
//              setLoading(false);
//              setItems(result);
//          };
//          getItems();
//      }, []);

//      return (
//          productos[id] ? (
//              <ItemDetail item={item} />
//          ) : (
//              <Link to="/detalle/:id" />
//          ),
//      ),

//  }


//  export default ItemDetailContainer