import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import data from "./data.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState (data);
  const [producto, setProducto] = useState();

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data[id]);
      }, 2000);
    });

    return response;
  };

  useEffect(() => {
    const getData = async () => {
      const result = await loadItems();
      setProducto(result);
    };
    getData();
  }, [loadItems]);

  return <div>DETALLE con id { id } | data  { JSON.stringify(producto) }</div>
}

export default ItemDetailContainer