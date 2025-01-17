import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import About from "./components/About";
import Contact from "./components/Contact";
import AllProdcutos from "./components/AllProdcuts";

function App() {
  // Estado para manejar el carrito
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  // // Lista de productos disponibles
  // const productos = [
  //   { id: 1, name: "Laptop", price: 1000 },
  //   { id: 2, name: "Auriculares", price: 200 },
  //   { id: 3, name: "Teclado", price: 150 },
  //   { id: 4, name: "Mouse", price: 100 },
  // ];

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('https://67252ed8c39fedae05b4299f.mockapi.io/productos') 
      const data = await res.json()
      setProductos(data)
    };

    fetchData()
  }, [])

 
  
  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    // <>
    //   <Carousel />
    //   <ProductList productos={productos} addToCart={addToCart} />
    //   <Cart cart={cart} clearCart={clearCart} />
    // </>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<>
      <Carousel />
      <ProductList productos={productos} addToCart={addToCart} />
      <Cart cart={cart} clearCart={clearCart} />
      </>
      } />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/all" element={<AllProdcutos productos={productos} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



