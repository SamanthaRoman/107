import "./admin.css";
import { useState } from "react";

function Admin(){

const [allProducts, setAllProducts] = useState([]);
const [product, setProduct] = useState({
    title: '',
    category: '',
    image: '',
    price: 0,
});
const [allCoupons, setAllCoupons] = useState([]);
const [coupon, setCoupon] = useState({
    code: '',
    discount: 0,
});

function handleProductChange(e){
    let name = e.target.name;
    // create a copy
    // modify the copy
    // set the copy back

    let copy = { ...product }; // create a copy of product/state variable
    copy[name] = e.target.value; // modify the copy
    setProduct(copy); // set the copy back
}
function handleCouponChange(e){
    let name = e.target.name;
    let copy = { ...coupon }; // create a copy of product/state variable
    copy[name] = e.target.value; // modify the copy
    setCoupon(copy); // set the copy back
}

function saveProduct(){
    console.log(product);
    
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy); // you can call it newList everyhere vs copy if you want
}
function saveCoupon(){
    console.log(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy); // you can call it newList everyhere vs copy if you want

}



    return (
        <div className="admin">
            <h1>Manage your store</h1>
            <div className="parent">
                <section className="products">
                    <div>
                        <h4>Create Products</h4>
                        <div>
                            <label>Title</label>
                            <input onChange={handleProductChange} name="title" type="text"></input>
                        </div>
                        <div>
                            <label>Category</label>
                            <input onChange={handleProductChange} name="category" type="text"></input>
                        </div>
                        <div>
                            <label>Image</label>
                            <input onChange={handleProductChange} name="image" type=""></input>
                        </div>
                        <div>
                            <label>Price</label>
                            <input onChange={handleProductChange} name="price" type="number"></input>
                        </div>
                        <div>
                            <button type="button" onClick={saveProduct} className="btn btn-dark">Save Product</button>
                        </div>
                    </div>
                    {allProducts.map(product => <p key={product.title}> {product.title} - {product.price}</p>)}
                </section>
                <section className="codes">
                    <div>
                        <h4>Create Coupons</h4>
                        <div>
                            <label>Code</label>
                            <input onBlur={handleCouponChange} name="code" type="text"></input>
                        </div>
                        <div>
                            <label>Discount</label>
                            <input onBlur={handleCouponChange} name="discount" type="number"></input>
                        </div>
                        <div>
                            <button onClick={saveCoupon} type="button" className="btn btn-dark">Save Coupon</button>
                        </div> 
                    </div>
                    {allCoupons.map(coupon => <p key={coupon.code}> {coupon.code} - {coupon.discount}</p>)}
                </section>
            </div>
        </div>
    )
}

export default Admin;