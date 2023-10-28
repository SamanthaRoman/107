import { useState } from "react";
import DataContext from "./dataContext";



// step 2 create a wrapper component to provide functionality

function GlobalProvider(props) {
//no class because nothing visual will be displayed for the UI

// u need state variables for eacth item in the data context
// because they are immuatable and the only way to change it is by using
// set state.
const [cart, setCart] = useState([]);
const [user, setUser] = useState({
    name: "Samantha"
});

// also need to create the functions here to be able to access also.
function addToCart (product) {
    let copy = [...cart];
    copy.push(product);
    setCart(copy);

};
function removeFromCart () {};
//in value we need to fulfill our promises from data context and what we are passing
    return (
    <DataContext.Provider value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
    }}>
        {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;