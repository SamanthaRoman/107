import Product from "../components/product";
import DataService from "../services/dataservice";
import "./catalog.css";
import { useEffect, useState } from "react";

function Catalog(){
    // products is a state variable similar to a global variable. 
    const [products, setProducts] = useState([]); 
    // using let array = [] is the same as using [] inside useState.

    // when the component is loaded 

    useEffect(function(){ // useEffect is Init for react.
        console.log("catalog loaded")
        loadCatalog();
    }, []);



    // need a function to exectue 
    function loadCatalog(){
        // get the product that I have in the catalog (data service)
        let service = new DataService();
        let prods = service.getProducts(); // prods is products
        console.log(prods);
        setProducts(prods);// passing all prods to our state variable. which its expecting an array. 
    }

// bellow we are counting how many products/ objects are in the array. 

    return (
    <div className="catalog">
        <h1>Welcome to Organic Candles</h1>
        <h2>We have {products.length} for you! </h2>
        <div>
            {/* below we use product as a tag and add an attribute  */}
        {products.map( arrowProducts => <Product data={arrowProducts} />)} 
        {/* data saves each item in memory here so we pass props to the product function. */}
        </div>
    </div>
    )
};

export default Catalog;