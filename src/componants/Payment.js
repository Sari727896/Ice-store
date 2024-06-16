import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
// import { useParams } from "react-router-dom";
// import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Payment() {
    const navigate = useNavigate()
    const product = useSelector((state) => state.cart)
    // useEffect(() => {

    //         alert("Are you sure you want to proceed to payment?");
        
    // }, );


    return (
        <>
            <table class="table table-striped">
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
                        <>
                            <tr>
                                <td scope="row">{item.name}</td>
                                <td scope="row">{item.price}</td>
                                <th scope="row"><img id="img1" src={item.image} alt="" /></th>
                                <td scope="row">{item.cartqty}</td>
                                <td scope="row">{item.cartqty * item.price}</td>
                                <td scope="row">
                                    <span>   </span>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            <button type="button" class="btn btn-danger"onClick={()=>navigate("/Pay")}>PayNow</button>

        </>
    )
}