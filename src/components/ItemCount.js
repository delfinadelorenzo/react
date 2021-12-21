import { useState } from "react";


function ItemCount() {
    const [count, SetCount] = useState(0)

    const aumentar = () => { SetCount(count + 1) }
    const disminuir = () => { SetCount(count - 1) }
    const reset = () => { SetCount(0) }

    return (
        <div style={{textAlign: "center"}}>
            
            <span style={{display: "flow-root", color:"cornflowerblue", fontSize:"20px"}} > {count} </span>
            <div>

            <button  onClick={aumentar}> + </button>
            <button  onClick={disminuir}> - </button>
            <button  onClick={reset}> Reset </button>

            </div>


        </div >
    )

}
export default ItemCount