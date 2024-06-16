import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import ProductPresentation from './componants/Shop';
import ShowCart from './componants/Cart';
import Home from './componants/Home';
import pic2 from'../src/images/logo1.png';
import About from './componants/About';
import Pay from './componants/Pay';
import Cart from './componants/Cart';
// import { Shop } from '@mui/icons-material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './componants/Navbar';
import Payment from './componants/Payment';
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
            <Route exact path="/Pay"element={<Pay/>}></Route>
          </Routes>
        </BrowserRouter>
        </Provider> 
       
     
     
      </div>
    </div>
  );
}


