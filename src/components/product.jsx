import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DataContext from "../store/dataContext";

// by importing bootstrap into this root file all other files have access to boot strap. 

function Product(props){
    const [quantity, setQuantity] = useState(1) // we set the enitial variable to 1 we can't use 0. 
    const addToCart = useContext(DataContext).addToCart;


    useEffect(function(){
        // when the component is loaded
        console.log("Hello I'm a product");
},[]); // we also add the dictionarry or array symbol

function onQuantityChange(qty){
    setQuantity(qty)
}

function getTotal() {// a function to calculate the total and have it only 2 decimals by using toFixed(2) method.
    const total = props.data.price * quantity;

    return total.toFixed(2);
}

function handleAdd() {
    let prodCart = {...props.data};
    prodCart.quantity = quantity;
    addToCart(prodCart);
}

    return(
        <div className="product">
            <img src={"/images/"+props.data.image} alt="" />
            <h5>{props.data.title}</h5>
            {/* here we link our data element to props and retrieve the title attribute */}
            <div className="prices">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()} </label> 
                {/* include the displayflex */}
            </div >
            <div className="controls">
                <QuantityPicker onChange={onQuantityChange}/>
                <button onClick={handleAdd} className="btn btn-sm btn-outline-success" >Add</button>
            </div>
        </div>
    );
}

export default Product;