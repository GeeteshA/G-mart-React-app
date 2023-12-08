import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Shopcategory from './Pages/Shopcategory';
import Contact from './Pages/Contact';
import Watches from './Pages/Watches';
import Product from './Pages/Product';
import Trends from './Pages/Trends'
import Loginsignup from './Pages/Loginsignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shopcategory category="shop"/>}/>
        <Route path='/watches' element={<Watches/>}/>
        <Route path='/trends' element={<Trends/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
