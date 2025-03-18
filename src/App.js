import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Products from "./components/Products";
import Footers from  "./components/Footers";
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;

