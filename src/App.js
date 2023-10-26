
import './App.css';
import { React } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


// create a footer component and render it in the App.js

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
