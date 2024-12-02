import { useSelector } from "react-redux";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function Payment() {
    const product = useSelector((state) => state.cart);

    // Container styles to center the table and restrict its width
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '50px',
        width: '100%',
    };

    const tableStyle = {
        width: '50%', 
        margin: '0 auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
    };

    return (
        <div style={containerStyle}>
            <table class="table table-striped" style={tableStyle}>
                <thead>
                    <tr>
                        <th scope="col" id="col">name</th>
                        <th scope="col" id="col">price</th>
                        <th scope="col" id="col">image</th>
                        <th scope="col" id="col">qty</th>
                        <th scope="col" id="col">totalsum</th>
                    </tr>
                </thead>
                <tbody>
                    {product?.map((item) => (
                        <tr key={item.name}>
                            <td scope="row">{item.name}</td>
                            <td scope="row">{item.price}</td>
                            <th scope="row"><img id="img1" src={item.image} alt="" style={{width: '50px', height: '50px'}} /></th>
                            <td scope="row">{item.cartqty}</td>
                            <td scope="row">{item.cartqty * item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div style={{ marginTop: '20px' }}>
                <PayPalScriptProvider options={{ "client-id": "test" }}>
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
        </div>
    );
}
