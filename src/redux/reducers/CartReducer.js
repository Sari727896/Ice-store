
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
                return state.filter((item) => item.id!== action.id);
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

