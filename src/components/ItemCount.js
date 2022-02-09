import { useState } from "react";
import { Button } from "react-bootstrap";



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
            <Button variant="outline-dark" disabled={count === item.stock} onClick={aumentar}>
              +
            </Button>
    
            <Button  variant="outline-dark"  disabled={count === 0} onClick={disminuir}>
              -
            </Button>
    
            {/* <div>
              <Button onClick={reset}> Reset </Button>
            </div> */}
    
            <div>
              <Button variant="outline-dark" 
                disabled={item.stock === 0}
                onClick={() => onAdd(item, count)}
              >
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </div>
      );
    }
    export default ItemCount;