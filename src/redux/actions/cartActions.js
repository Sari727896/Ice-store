import { decreaseIceCreamQty } from "./iceCreamAction"

export const addToCart=(product) =>
{
   
    // decreaseIceCreamQty(product)
    return {
        type:"ADD_TO_CART",
        product
    }
}
export const removeFromCart=(id) =>
{
    return {
        type:"REMOVE_FROM_CART",
        id
    }
}

export const increseCartQty=(product) =>
{
    return {
        type:"INCREASE_CART_QTY",
        product
    }
}
export const addCartQty=(product) =>
{
    return {
        type:"ADD_CART_QTY",
        product,
    }
}





    