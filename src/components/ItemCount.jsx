import { useState } from "react";

const ItemCount = (props) => {
    const [cuenta, setContador] = useState(0)
    const [stockActual, setStock] = useState(props.stock)

    const additionHandler = () => {
        if (cuenta < props.stock) {
            setContador(cuenta + 1)
            setStock(stockActual - 1)
        }
    }
    const substractionHandler = () => {
        if (cuenta > 0) {
            setContador(cuenta - 1)
            setStock(stockActual + 1)
        }
    }

    return (
        <div className="text-center text-lg">
        <button className="btn-circle text-lg bg-red-800 text-white" onClick={substractionHandler}> - </button>
        <strong className="text-lg"> {cuenta} </strong> 
        <button className="btn-circle text-lg bg-green-800 text-white" onClick={additionHandler}> + </button>
        <strong> | Stock: {stockActual} </strong>
        </div>
    )
}
export default ItemCount