import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
// import { deleteFromCart } from './redux/actions/cartAction';
// import NavBar from "./NavBar";
// import NavDown from "./NavDown";
import {removeFromCart} from "../redux/actions/cartActions";
import { useNavigate } from 'react-router-dom';
import pic1 from '../images/dolar1.jpg';
const componentStyle = {
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover', // גודל התמונה יכסה את כל רוחב הקומפוננטה
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  };
export default function PayPal() {
    const cart = useSelector((state) => state.cartReducers);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <div id="" style={componentStyle}>
        <div >
            <center>
                {/* <NavBar></NavBar> */}
               
                {/* <br></br> */}
                <button type="button" class="btn btn-danger"onClick={()=>navigate("/ProductPresentation ")}>BackToBuy</button>
                <div id="paypal-buttons">
                <PayPalScriptProvider options={{ "client-id": "test" }} >
                    <PayPalButtons 
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "10.99",
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        }}
                    />
                </PayPalScriptProvider>
                </div>
                {/* <NavDown></NavDown> */}
            </center>
        </div>
        </div>
    )
}