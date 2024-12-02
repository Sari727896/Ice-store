import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import ProductPresentation from './componenets/Shop';
import ShowCart from './componenets/Cart';
import Home from './componenets/Home';
import pic2 from'../src/images/logo1.png';
import About from './componenets/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './componenets/Navbar';
import Payment from './componenets/Payment';
export default function App() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 200);

  return (
  
    <div className="App">
        <h1 id="title"> <img id="logo1"src={pic2} alt=""/> Quality ice creams </h1>
      <div className="App-header">
      
      <Provider store = {store}>
   
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>

            <Route exact path="/Cart" element={<ShowCart />}></Route>
            <Route exact path="/About" element={<About/>}></Route>
            <Route exact path="/ProductPresentation" element={<ProductPresentation />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Payment"element={<Payment/>}></Route>
          </Routes>
        </BrowserRouter>
        </Provider> 
       
     
     
      </div>
    </div>
  );
}


