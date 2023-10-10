import Product from "../components/product";
import "./catalog.css";

function Catalog(){
    return (
    <div className="catalog">
        <h1>Welcome to Store</h1>
        <div>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
    )
};

export default Catalog;