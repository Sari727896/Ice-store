export const addCartSum= () => {
    return {
        type: "ADD_SUM_CART",
       
    }
}

export const decreaseCartSum= () => {
    return {
        type: "DECREASE_SUM_CART",
       
    }
}
export const deleteFromCartSum= (qty) => {
    return {
        type: "DELETE_FROM_SUM_CART",
        qty
    }
}
