import axios from "axios";

// create a library/dictionary

let catalog = [
    {
        "title": "Green Breeze",
        "category": "scented",
        "price": 32.24,
        "image": "green-breeze.jpg",
        "_id": "1", // don't repeat this please
    },
    {
        "title": "Oak Tree",
        "category": "scented",
        "price": 35.87,
        "image": "oak-tree.jpg",
        "_id": "2", // don't repeat this please
    },
    {
        "title": "White Snow",
        "category": "unscented",
        "price": 50.00,
        "image": "white-snow.jpg",
        "_id": "3", // don't repeat this please
    },
    {
        "title": "Blue Jasmine",
        "category": "scented",
        "price": 50.00,
        "image": "blue-jasmine.jpg",
        "_id": "4", // don't repeat this please
    },
    {
        "title": "Bergamot",
        "category": "organic",
        "price": 50.00,
        "image": "bergamot.jpg",
        "_id": "5", // don't repeat this please
    },
    {
        "title": "Almond Spice",
        "category": "unscented",
        "price": 50.00,
        "image": "almond-spice.jpg",
        "_id": "6", // don't repeat this please
    },
    {
        "title": "Night Sky",
        "category": "scented",
        "price": 50.00,
        "image": "night-sky.jpg",
        "_id": "7", // don't repeat this please
    },
];

// we create a component with a function inside
// because we are in js not java script (jsx)

class DataService {
    async getProducts(){ // function inside component
        // use async with await. they must be used together
        // return catalog; // retruning all the products

        const response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
    }


    async saveProduct(product) {
        const response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }
}

export default DataService;