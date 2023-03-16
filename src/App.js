import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import {Home} from './pages/Home';
import {Avatar} from './pages/Avatar';
import {Products} from './pages/Products';
import {Product} from './pages/Product'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/avatar" element = {<Avatar/>}/>
        <Route path="/products" element = {<Products/>}/>
        <Route path="/product/:id" element = {<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
