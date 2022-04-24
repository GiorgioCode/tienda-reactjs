import { useState } from "react";

const ItemCount = () => {
    const [cuenta, setContador] = useState(0)
    
    const additionHandler = () => {
        setContador(cuenta + 1)
    }
    const substractionHandler = () => {
        setContador(cuenta - 1)
    }

    return (
        <div className="text-center text-lg">
        <button className="btn-circle text-lg bg-red-800 text-white" onClick={substractionHandler}> - </button>
        <strong className="text-lg"> {cuenta}</strong>
        <button className="btn-circle text-lg bg-green-800 text-white" onClick={additionHandler}> + </button>
        </div>
    )
}
export default ItemCount