import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import {Home} from './pages/Home';
import {Avatar} from './pages/Avatar';
import {Products} from './pages/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/avatar" element = {<Avatar/>}/>
        <Route path="/products" element = {<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
