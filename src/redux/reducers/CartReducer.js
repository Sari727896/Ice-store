
const products = [];
const CartReducer = (state = products, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            {
                debugger
                return [...state, action.product]
            }

        case 'REMOVE_FROM_CART':
            {
                debugger
                // const newProduct =state?.filter((product) => product.id !== action.id); 
                // action.product.qty+=1;
                // action.product.cartqty=0;
                return state.filter((item) => item.id!== action.id);

                // return  newProduct;
            }
        case 'INCREASE_CART_QTY':
            {

                action.product.cartqty--;
                return state;
            }
        case 'ADD_CART_QTY':
            {

                action.product.cartqty++;
                return state;
            }


        default:
            return state
    }
}
export default CartReducer

