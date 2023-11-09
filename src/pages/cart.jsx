import "./cart.css";
import DataContext from "../store/dataContext";
import { useContext } from "react"; // hook from react
import CartProduct from '../components/cartProduct';


function Cart(){
    // get context and read the cart. // don't forget to import datacontex and usecontext
    const cart = useContext(DataContext).cart;
    
    function getCount() {
        let sum = 0;
    
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            sum += prod.quantity;
        }
    
        return sum;
    }

    function getTotal(){
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            total += prod.quantity * prod.price;
        }
        
        return total.toFixed(2);
    }


    return(
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            <h3>You have selected {getCount()} products</h3>
            <div className="parent">
                <div className="list">
                    {cart.map((prod) => (
                        <CartProduct data={prod} key={prod._id} />
                    ))}
                </div>
                <aside>
                    <h4>Total</h4>
                    <h3>${getTotal()}</h3>
                    <hr />
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Coupon Code" id="" />
                        <button className="btn btn-outline-success">Apply</button>
                    </div>
                    <button className="btn btn-dark btn-pay">Pay</button>
                </aside>
            </div>
        </div>
);
}

export default Cart;