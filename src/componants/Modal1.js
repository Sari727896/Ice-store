import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { addCartQty, addToCart } from '../redux/actions/cartActions';
import { decreaseIceCreamQty } from '../redux/actions/iceCreamAction';
import { addCartSum } from '../redux/actions/cartSumAction';
function Modal1(props) {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const product = useSelector((state) => state.cart)
  const sums = useSelector((state) => state.cartSum)
  
  const addToCarts=(item)=>{
    const flag=product?.find((p)=>p.id===item.id);
           if(!flag){
               dispatch(addToCart(item));
           } 
         dispatch(addCartQty(item))       
  }

  return (
    <>
      <Button id="btn"  variant="primary" onClick={handleShow}>
      product details
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header  >
          <Modal.Title>{props.name}</Modal.Title>
          {/* <button className="close-button" onClick={handleClose}><FaTimes /></button> */}
        </Modal.Header>
        <Modal.Body>
    <span style={{ fontWeight: 'bold' }}>price:</span> {props.price}&#8362;
       <br></br>
       <span style={{ fontWeight: 'bold' }}>description:</span> {props.description}
      </Modal.Body>
        <Modal.Footer>
          <Button id="close" class="btn btn-outline-dark" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button class="btn btn-outline-dark" id="addToCart" variant="primary" onClick={(e) => {
                                    e.preventDefault();
                                    // debugger
                                    // if(sums.sum == 1)
                                    // sums.sum=sums.sum ;
                                    // else{
                                    //    sums.sum=sums.sum+1 ;
                                    // }
                                    dispatch(addCartSum())
                                    dispatch(decreaseIceCreamQty(props.id));
                                    addToCarts(props.item)
                                    
                                    alert('The item has been added to the cart')
                                   handleClose()
                                }}>ADD TO CART</button>
          {/* <p>{props.item.qty}</p> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;