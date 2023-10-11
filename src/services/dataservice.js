// create a library/dictionary

let catalog = [
    {
        "title": "Green Breeze",
        "category": "soy wax base",
        "price": 50.00,
        "image": "green-breeze.jpg",
        "_id": "1", // don't repeat this please
    },
    {
        "title": "Oak Tree",
        "category": "beeswax",
        "price": 50.00,
        "image": "oak-tree.jpg",
        "_id": "2", // don't repeat this please
    },
    {
        "title": "White Snow",
        "category": "soy wax base",
        "price": 50.00,
        "image": "white-snow.jpg",
        "_id": "3", // don't repeat this please
    },
    {
        "title": "Blue Jasmine",
        "category": "soy wax base",
        "price": 50.00,
        "image": "blue-jasmine.jpg",
        "_id": "4", // don't repeat this please
    },
    {
        "title": "Bergamot",
        "category": "beeswax base",
        "price": 50.00,
        "image": "bergamot.jpg",
        "_id": "5", // don't repeat this please
    },
    {
        "title": "Almond Spice",
        "category": "soy wax base",
        "price": 50.00,
        "image": "almond-spice.jpg",
        "_id": "6", // don't repeat this please
    },
    {
        "title": "Night Sky",
        "category": "beeswax base",
        "price": 50.00,
        "image": "night-sky.jpg",
        "_id": "7", // don't repeat this please
    },
];

// we create a component with a function inside
// because we are in js not java script (jsx)

class DataService {
    getProducts(){ // function inside component
        return catalog; // retruning all the products
    }
}

export default DataService;