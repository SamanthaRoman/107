import "./navbar.css";
import { Link } from 'react-router-dom';
import DataContext from "../store/dataContext";
import { useContext } from "react"; // hook from react



function Navbar(){

  // useContext(DataContext) // this gives us access to all the context. 
  // to only access user you can place it in a varaible.

  const user = useContext(DataContext).user;
  

  //read the cart
  const cart = useContext(DataContext).cart;


  function getCount() {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
  }

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-body-primary">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li>
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>

              <li>
                <Link className="nav-link active" aria-current="page" to="/catalog">
                  Catalog
                </Link>
              </li>

              <li>
                <Link className="nav-link active" aria-current="page" to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link className="nav-link active" aria-current="page" to="/admin">
                  Admin
                </Link>
              </li>

            </ul>
            <form className="d-flex" role="search">

              <div>
              <i className="fa-regular fa-face-smile-beam"></i> {user.name}
              </div>


              <Link to="/cart" className="btn btn-outline-primary">
                {getCount()} Cart
              </Link>
            </form>
          </div>
        </div>
      </nav>

    );
}


export default Navbar;