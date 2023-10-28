import { createContext } from "react";


// data context is 
// interface, blueprint
// describes the data, but has no implementation

// step 1 - we create a context
const DataContext = createContext({
    // inside here we describe our object/ blueprint 
    // with all the data you need to be global
    // all things here are immutable like useState
    cart: [],
    user: {}, // user here is an obj not an array

    // to modify the elements we create the function
    // all functions you want to do to cart
    addToCart: () => {},
    removeFromCart: () => {},
});


export default DataContext;