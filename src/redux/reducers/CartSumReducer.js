const cartsum={sum:0}
 const CartSumReducer=(state=cartsum,action)=>
{
  switch(action.type)
  {
    case
    'ADD_SUM_CART':
    {
        return {sum:state.sum+1};
    }
    case
    'DECREASE_SUM_CART':
    {  
      return {sum:state.sum-1};
    }
    case 
    'DELETE_FROM_SUM_CART':
     {
      return {sum:state.sum-(action.qty)}
     }
    default:
      return state;
  }
   
}
export default CartSumReducer 