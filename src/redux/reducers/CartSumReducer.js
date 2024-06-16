const cartsum={sum:1}
 const CartSumReducer=(state=cartsum,action)=>
{
  switch(action.type)
  {
    case
    'ADD_SUM_CART':
    {
        debugger
        console.log("aaa",state.sum)
        return {sum:state.sum};
    }
    default:
      return state;
  }
   
}
export default CartSumReducer 