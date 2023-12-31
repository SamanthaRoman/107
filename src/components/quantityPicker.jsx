import "./quantityPicker.css";
import { useState } from "react";


function QuantityPicker(props){
    const [quantity,setQuantity] = useState(1);
    
    function increase(){
        console.log("increaseing quantity");
        // logic to increment the value of the quantity each time someoneclicks. 
        let value = quantity + 1;
        setQuantity(value);
        props.onChange(value); // here we specify to props that on the change event we will pass the value through props/ 
    };

    function decrease(){
        console.log("decreasing quantity");
        // ned logic to avoid 0 and negative values with an if statement
        if(quantity === 1){return};// if we have a value of 1 the funciton will terminate and wont continue to execute. 
        let value = quantity - 1;
        setQuantity(value);
        props.onChange(value);
    };


    return (
        <div className="quantityPicker">
            <button className="btn btn-sm btn-dark" disabled={quantity===1} onClick={decrease}>-</button> 
            <label>{quantity}</label>
            <button className="btn btn-sm btn-primary" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;