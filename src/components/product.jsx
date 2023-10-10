import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){

    return(
        <div className="product">
            <img src="https://picsum.photos/200/200" alt="" />
            <h5>Title goes here</h5>
            <div className="prices">
                <label>Price:</label>
                <label>Total:</label>
            </div>
            <QuantityPicker/>
        </div>
    );
}

export default Product;