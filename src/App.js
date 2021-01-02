import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from './components/TopMenu';
import Products from "./components/products/Products";
import NewProduct from "./components/products/NewProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div className="container">
        <div style={{padding:"7px"}}>
            <Switch>

            <Route path="/products/new" component={NewProduct} />       

            <Route path="/products" component={Products} />
           
            <Route path="/" exact component={Products} />
          </Switch>
        </div>
        </div>
      </div>
      <Footer />
    </Router>
    

  );
}

export default App;
