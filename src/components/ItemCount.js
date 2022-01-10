import { useState } from "react";



function ItemCount({onAdd}) {
    const [count, SetCount] = useState(0)

    const aumentar = () => { SetCount(count + 1) }
    const disminuir = () => { SetCount(count - 1) }
    const reset = () => { SetCount(0) }

    return (
        <div style={{ textAlign: "center" }}>

            <span style={{ display: "flow-root", color: "cornflowerblue", fontSize: "20px" }} > {count} </span>
            <div>

                <button onClick={aumentar}> + </button>

                <button onClick={disminuir}> - </button>

                <div>
                <button onClick={reset}> Reset </button>
                </div>

                <div>
                    <button onClick={onAdd} >Agregar al Carrito</button>
                </div>

            </div>


        </div >
    )

}
export default ItemCount

