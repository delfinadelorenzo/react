import { useState } from "react";

function ItemCount (){
    const  [ count, SetCount] = useState(0)

    const aumentar = () => { SetCount ( count +1 )}
    const disminuit= () => {SetCount (count - 1)}
    const reset= () => {SetCount (0)}

    return(
        <div>
            
        </div>
    )

}