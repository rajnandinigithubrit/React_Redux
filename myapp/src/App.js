import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart/Cart";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
function App() {
  return (
    <div className="App">
<Navbar/>
      <Routes>
        
      <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

      </Routes>
    </div>
  );
}

export default App;
