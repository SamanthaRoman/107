import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// by importing bootstrap into this root file all other files have access to boot strap. 

function Product(props){

    useEffect(function(){
        // when the component is loaded
        console.log("Hello I'm a product");
},[]); // we also add the dictionarry or array symbol

function onQuantityChange(qty){
    console.log("new quantity " + qty);
}
    return(
        <div className="product">
            <img src={"/images/"+props.data.image} alt="" />
            <h5>{props.data.title}</h5>
            {/* here we link our data element to props and retrieve the title attribute */}
            <div className="prices">
                <label>Price:{props.data.price}</label>
                <label>Total:</label>
                {/* include the displayflex */}
            </div>
            <QuantityPicker onChange={onQuantityChange}/>
        </div>
    );
}

export default Product;