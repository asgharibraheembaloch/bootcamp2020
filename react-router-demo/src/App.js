import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import About from './About';
import Home from './Home';
import NoteFound from './NoteFound';
import Product from './Product';
import ProductDetails from './ProductDetails';
import ProductHome from './ProductHome';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to React Router Demo App</h1>
      <br/>
      <Link to="/">Home</Link>
      {' '}
      <Link to="about">About</Link>
      {' '}
      <Link to="products">Product</Link>
      {' '}
      <Link to="products/mobile">Mobile</Link>
      {' '}
      <Link to="products/laptop">Laptop</Link>
      <br/>
      <br/>
      <button onClick={()=>{
        navigate('/about')
      }
      }>
        Displays About Page
      </button>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Product/>}>
          <Route path="" element={<ProductHome/>}></Route>   
          <Route path=":productId" element={<ProductDetails/>}></Route>
        </Route>
        <Route path="*" element={<NoteFound/>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
