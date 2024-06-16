import React, { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, addToCart, addCartQty, increseCartQty, removeFromCart } from "../redux/actions/cartActions";
import { addIceCreamQty, decreaseIceCreamQty } from "../redux/actions/iceCreamAction";
import { useState, useHistory } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from '@mui/material';
import { addCartSum,decreaseCartSum,deleteFromCartSum} from '../redux/actions/cartSumAction';

export default function ShowCart() {

    const product = useSelector((state) => state.cart)
    // const sums = useSelector((state) => state.cartSum)
    const dispatch = useDispatch()
    const [isButtonClick, setIsButtonClick] = useState(false);
    const [qty, setQty] = useState(0);
    const navigate = useNavigate()
    const addToCarts = (item) => {
        const flag = product?.find((p) => p.id === item.id);
        if (!flag && item.qty > 0) {
            dispatch(addToCart(item));
        }
        if (item.qty > 0)
            dispatch(addCartQty(item))
    }

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" id="col">name</th>
                        <th scope="col" id="col">price</th>
                        <th scope="col" id="col">image</th>
                        <th scope="col" id="col">qty</th>
                        <th scope="col" id="col">add/decrease</th>
                    </tr>
                </thead>
                <tbody>
                    {product?.map((item) => (
                        <>
                            <tr>
                                <td scope="row">{item.name}</td>
                                <td scope="row">{item.price}</td>
                                <th scope="row"><img id="img1" src={item.image} alt="" /></th>
                                <td scope="row">{item.cartqty}</td>
                                <td scope="row">

                                    <span>   </span>
                                    <button class="btn btn-outline-dark" onClick={(e) => {
                                        e.preventDefault();
                                        // sums.sum--;
                                        if (item.cartqty > 1) {
                                            dispatch(increseCartQty(item));
                                            setQty(item.cartqty)
                                        }
                                        else {
                                            dispatch(removeFromCart(item.id));
                                        }
                                        dispatch(decreaseCartSum())
                                    }}>-
                                    </button>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(removeFromCart(item.id));
                                            // if(item.cartqty> 1) 
                                            // sums.sum++;
                                            dispatch(deleteFromCartSum(item.cartqty));
                                        }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <span>     </span>
                                    <button class="btn btn-outline-dark" onClick={(e) => {
                                        e.preventDefault();
                                        addToCarts(item);
                                        dispatch(decreaseIceCreamQty(item.id));
                                        setQty(item.cartqty)
                                        // dispatch(add())
                                        // if(sums.sum > 1)
                                        // sums.sum++;
                                        dispatch(addCartSum())
                                    }}>+</button>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            <Button type="button" class="btn btn-danger" variant="secondary" onClick={() => navigate("/Payment")}>GoToPayment</Button>
        </>
    )
}