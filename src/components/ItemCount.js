import { useState } from "react";



function ItemCount({onAdd, item}) {
    const [count, SetCount] = useState(0)

    const aumentar = () => { SetCount(count + 1) }
    const disminuir = () => { SetCount(count - 1) }
    const reset = () => { SetCount(0) }

    return (
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              display: "flow-root",
              color: "cornflowerblue",
              fontSize: "20px",
            }}
          >
            {count}
          </span>
          <div>
            <button disabled={count === item.stock} onClick={aumentar}>
              +
            </button>
    
            <button disabled={count === 0} onClick={disminuir}>
              -
            </button>
    
            <div>
              <button onClick={reset}> Reset </button>
            </div>
    
            <div>
              <button
                disabled={item.stock === 0}
                onClick={() => onAdd(item, count)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      );
    }
    export default ItemCount;