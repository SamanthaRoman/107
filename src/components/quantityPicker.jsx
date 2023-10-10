import "./quantityPicker.css";
import { useState } from "react";


function QuantityPicker(){
    const [quantity,setQuantity] = useState(1);
    
    function increase(){
        console.log("increaseing quantity");
        // logic to increment the value of the quantity each time someoneclicks. 
        let value = quantity + 1;
        setQuantity(value);
    };

    function decrease(){
        console.log("decreasing quantity");
        // ned logic to avoid 0 and negative values with an if statement
        if(quantity === 1){return};// if we have a value of 1 the funciton will terminate and wont continue to execute. 
        let value = quantity - 1;
        setQuantity(value);
    };


    return (
        <div className="quantityPicker">
            <button disabled={quantity===1} onClick={decrease}>-</button> 
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;