import Product from "../components/product";
import DataService from "../services/dataservice";
import "./catalog.css";
import { useEffect, useState } from "react";

function Catalog(){
    // products is a state variable similar to a global variable. 
    const [products, setProducts] = useState([]); 
    // using let array = [] is the same as using [] inside useState.
    const [categories, setCategories] = useState([]);

    const [productsToDisplay, setProductsToDisplay] = useState([]);

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
        setProductsToDisplay(prods);
    // her I want to create the valuses for the categories state variable.

        let cats = ["scented", "organic", "unscented"];
        setCategories(cats); // here we are using our function for state and passing each category to our
                        // state variable Categoires and updating them with set state
    }

function filter(category){
    console.log(category);
    // create filter logic
    // first need a variable to store the category

    let list = [];

    // second find prdoucts that match the category and add them to the list.

    for (let i = 0; i <products.length; i++) {
        let prod = products[i];
        if(prod.category === category){
            list.push(prod);
        }  
        console.log(prod);
    }

    console.log(list);
    setProductsToDisplay(list);
}

function clearFilters(){
    setProductsToDisplay(products);

}

// bellow we are counting how many products/ objects are in the array. 

    return (
    <div className="catalog">
        <h1>Welcome to Organic Candles</h1>
        <h2>We have {products.length} for you! </h2>
        <br />
        {/* below we transfrom each categorie into a button  */}
        <button onClick={clearFilters} className="btn btn-sm btn-dark btn-clear-filter">Show All</button>
        {categories.map(arrowCategories => <button key={arrowCategories} onClick={()=>filter(arrowCategories)} className="btn btn-sm btn-primary btn-filter" >{arrowCategories}</button>)}
        <br />
        {/* below we use product as a tag and add an attribute  */}
        {productsToDisplay.map( arrowProducts => <Product key={arrowProducts._id} data={arrowProducts} />)} 
        {/* data saves each item in memory here so we pass props to the product function. */}

    </div>
    )
};

export default Catalog;